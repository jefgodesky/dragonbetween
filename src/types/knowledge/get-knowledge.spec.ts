import { expect } from 'chai'
import { isKnowledge } from './index.js'
import getKnowledge from './get-knowledge.js'

describe('getKnowledge', () => {
  it('returns knowledge', async () => {
    const knowledge = await getKnowledge('CommonKnowledgeKhorvaire', 'CommonKnowledgeBreland')
    expect(isKnowledge(knowledge)).to.equal(true)
    expect(knowledge.CommonKnowledgeKhorvaire).to.equal(true)
    expect(knowledge.CommonKnowledgeBreland).to.equal(true)
    expect(knowledge.CommonKnowledgeSarlona).to.equal(false)
    expect(knowledge.Dhakaan).to.equal(false)
    expect(knowledge.ThisIsNotActuallyARealSecretKey).to.equal(undefined)
  })
})
