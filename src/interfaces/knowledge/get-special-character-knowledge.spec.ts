import { expect } from 'chai'
import getSpecialCharacterKnowledge from './get-special-character-knowledge.js'

describe('getSpecialCharacterKnowledge', () => {
  it('creates a character who knows nothing by default', async () => {
    const none = await getSpecialCharacterKnowledge()
    expect(none.CommonKnowledgeKhorvaire).to.equal(false)
    expect(none.CommonKnowledgeBreland).to.equal(false)
    expect(none.Dhakaan).to.equal(false)
    expect(none.SpellcastingBasics).to.equal(false)
  })

  it('can create a character who knows all the secrets', async () => {
    const gm = await getSpecialCharacterKnowledge('all')
    expect(gm.CommonKnowledgeKhorvaire).to.equal(true)
    expect(gm.CommonKnowledgeBreland).to.equal(true)
    expect(gm.Dhakaan).to.equal(true)
    expect(gm.SpellcastingBasics).to.equal(true)
  })

  it('can take its own array of secret keys', async () => {
    const char = await getSpecialCharacterKnowledge('nothing', ['a', 'b', 'c'])
    expect(char.CommonKnowledgeKhorvaire).to.equal(undefined)
    expect(char.CommonKnowledgeBreland).to.equal(undefined)
    expect(char.Dhakaan).to.equal(undefined)
    expect(char.SpellcastingBasics).to.equal(undefined)
    expect(char.a).to.equal(false)
    expect(char.b).to.equal(false)
    expect(char.c).to.equal(false)
    expect(char.d).to.equal(undefined)
  })
})
