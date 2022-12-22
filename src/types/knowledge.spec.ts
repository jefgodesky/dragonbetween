import { expect } from 'chai'
import { isKnowledge } from './knowledge.js'

describe('Knowledge', () => {
  it('returns false if given null', () => {
    expect(isKnowledge(null)).to.equal(false)
  })

  it('returns false if given undefined', () => {
    expect(isKnowledge(undefined)).to.equal(false)
  })

  it('returns false if given false', () => {
    expect(isKnowledge(false)).to.equal(false)
  })

  it('returns false if given true', () => {
    expect(isKnowledge(true)).to.equal(false)
  })

  it('returns false if given a number', () => {
    expect(isKnowledge(1)).to.equal(false)
  })

  it('returns false if given a string', () => {
    expect(isKnowledge('true')).to.equal(false)
  })

  it('returns false if given an array', () => {
    expect(isKnowledge([1, 2, 3])).to.equal(false)
  })

  it('returns true if given an empty object', () => {
    expect(isKnowledge({})).to.equal(true)
  })

  it('returns false if given an object with a null property', () => {
    expect(isKnowledge({ test: null })).to.equal(false)
  })

  it('returns false if given an object with an undefined property', () => {
    expect(isKnowledge({ test: undefined })).to.equal(false)
  })

  it('returns true if given an object with a false property', () => {
    expect(isKnowledge({ test: false })).to.equal(true)
  })

  it('returns true if given an object with a true property', () => {
    expect(isKnowledge({ test: true })).to.equal(true)
  })

  it('returns false if given an object with a number property', () => {
    expect(isKnowledge({ test: 1 })).to.equal(false)
  })

  it('returns false if given an object with a string property', () => {
    expect(isKnowledge({ test: 'true' })).to.equal(false)
  })

  it('returns false if given an object with an array property', () => {
    expect(isKnowledge({ test: [1, 2, 3] })).to.equal(false)
  })

  it('returns false if given an object with an object property', () => {
    expect(isKnowledge({ test: {} })).to.equal(false)
  })
})
