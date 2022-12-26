import { expect } from 'chai'
import WikiLink from '../interfaces/wiki-link/index.js'
import populateWikiLinks from './populate-wiki-links.js'

describe('populateWikiLinks', () => {
  it('populates wiki links', async () => {
    const before: WikiLink[] = [
      { id: 'Creatures', display: 'Read more about creatures', orig: '[[Creatures | Read more about creatures]]' },
      { id: '/creatures', display: 'Link to creatures', orig: '[[ /creatures | Links to creatures ]]' },
      { id: 'This link won\'t work.', display: 'This link won\'t work.', orig: '[[This link won\'t work.]]' }
    ]
    const after = await populateWikiLinks(before)
    expect(after).to.have.lengthOf(3)
    expect(after).not.to.equal(before)
    expect(before[0]?.slug).to.equal(undefined)
    expect(after[0]?.slug).to.equal('creatures')
    expect(after[1]?.slug).to.equal('creatures')
    expect(after[2]?.slug).to.equal(undefined)
  })
})
