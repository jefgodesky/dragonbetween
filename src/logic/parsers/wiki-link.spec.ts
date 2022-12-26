import { expect } from 'chai'
import { isWikiLink } from '../../interfaces/wiki-link/index.js'
import parseWikiLink from './wiki-link.js'

describe('parseWikiLink', () => {
  it('returns null if it isn\'t a wiki link', () => {
    expect(parseWikiLink('lol nope')).to.equal(null)
  })

  it('parses a simple wiki link expression', () => {
    const orig = '[[Test Page]]'
    const actual = parseWikiLink(orig)
    expect(isWikiLink(actual)).to.equal(true)
    expect(actual?.id).to.equal('Test Page')
    expect(actual?.display).to.equal('Test Page')
    expect(actual?.orig).to.equal(orig)
  })

  it('parses a wiki link with an alias', () => {
    const orig = '[[Test Page | Hello, world!]]'
    const actual = parseWikiLink(orig)
    expect(isWikiLink(actual)).to.equal(true)
    expect(actual?.id).to.equal('Test Page')
    expect(actual?.display).to.equal('Hello, world!')
    expect(actual?.orig).to.equal(orig)
  })

  it('parses a wiki link that links to a slug', () => {
    const orig = '[[test-page | Hello, world!]]'
    const actual = parseWikiLink(orig)
    expect(isWikiLink(actual)).to.equal(true)
    expect(actual?.id).to.equal('test-page')
    expect(actual?.display).to.equal('Hello, world!')
    expect(actual?.orig).to.equal(orig)
  })
})
