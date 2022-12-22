import { expect } from 'chai'
import getAllSecrets from './get-all-secrets.js'

describe('getAllSecrets', () => {
  it('gets an array of all secret keys', async () => {
    const expected = ['CommonKnowledgeKhorvaire', 'CommonKnowledgeBreland', 'Dhakaan', 'SpellcastingBasics']
    const keys = await getAllSecrets()
    for (const key of expected) {
      expect(keys).to.include(key)
    }
  })
})
