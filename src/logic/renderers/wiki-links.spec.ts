import { expect } from 'chai'
import renderWikiLinks from './wiki-links.js'

describe('renderWikiLinks', () => {
  it('renders wiki links', () => {
    const links = [
      { id: 'creatures', display: 'Creatures', slug: 'creatures', orig: '[[creatures | Creatures]]' },
      { id: 'nope', display: 'Nothing here', orig: '[[nope | Nothing here]]' },
      { id: 'test', display: 'Test', slug: 'test' }
    ]
    const orig = '[[creatures | Creatures]]\n\n[[nope | Nothing here]]\n\n[[test | Test]]'
    const actual = renderWikiLinks(orig, links)
    expect(actual).to.equal('<a href="/lore/creatures">Creatures</a>\n\nNothing here\n\n[[test | Test]]')
  })
})
