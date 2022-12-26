import { expect } from 'chai'
import findWikiLinks from './wiki-links.js'

describe('parseWikiLinks', () => {
  it('parses all the wiki links in the string', () => {
    const orig = '[[Test 1]] Hello, [[Test2 | Test]]! [[test-slug | Test this!]]'
    const links = findWikiLinks(orig)
    expect(links).to.have.lengthOf(3)
    expect(JSON.stringify(links[0])).to.equal('{"id":"Test 1","display":"Test 1","orig":"[[Test 1]]"}')
    expect(JSON.stringify(links[1])).to.equal('{"id":"Test2","display":"Test","orig":"[[Test2 | Test]]"}')
    expect(JSON.stringify(links[2])).to.equal('{"id":"test-slug","display":"Test this!","orig":"[[test-slug | Test this!]]"}')
  })
})
