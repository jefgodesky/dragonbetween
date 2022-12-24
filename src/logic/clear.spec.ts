import { expect } from 'chai'
import Knowledge from '../interfaces/knowledge/index.js'
import clear from './clear.js'

describe('clear', () => {
  const knowledge: Knowledge = { secret1: true, secret2: true, secret3: false }

  it('returns true if not given a secret', () => {
    expect(clear(knowledge)).to.equal(true)
  })

  it('returns true if it\'s in knowledge', () => {
    expect(clear(knowledge, 'secret1')).to.equal(true)
  })

  it('returns false if it\'s explicitly not in knowledge', () => {
    expect(clear(knowledge, 'secret3')).to.equal(false)
  })

  it('returns false if it\'s not included in knowledge', () => {
    expect(clear(knowledge, 'secret4')).to.equal(false)
  })

  it('evaluates complex logical expressions', () => {
    expect(clear(knowledge, '(secret2 || secret3) && secret1')).to.equal(true)
    expect(clear(knowledge, '(secret1 || secret2) && (secret1 && secret3)')).to.equal(false)
  })
})
