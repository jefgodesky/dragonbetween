import { expect } from 'chai'
import loadSecretLegend from './load-secret-legend.js'

describe('loadSecretLegend', () => {
  it('loads the secret legend from the database', async () => {
    const legend = await loadSecretLegend()
    expect(legend.CommonKnowledgeKhorvaire).to.equal('You know all the things that anyone from Khorvaire would know.')
    expect(legend.CommonKnowledgeBreland).to.equal('You know all the things that anyone from Breland would know.')
    expect(legend.Dhakaan).to.equal('You know the name of the Empire of Dhakaan.')
    expect(legend.SpellcastingBasics).to.equal('You understand the basics of spellcasting.')
    expect(legend.ThisIsNotActuallyASecretKey).to.equal(undefined)
  })
})
