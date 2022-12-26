import { expect } from 'chai'
import { isWikiLink } from './index.js'

describe('isWikiLink', () => {
  const id = 'test'
  const display = 'Test'
  const orig = '[[test | Test]]'
  const slug = 'test'

  it('rejects null', () => {
    expect(isWikiLink(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isWikiLink(undefined)).to.equal(false)
  })

  it('rejects a function', () => {
    expect(isWikiLink(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isWikiLink(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isWikiLink(false)).to.equal(false)
  })

  it('rejects a number', () => {
    expect(isWikiLink(1)).to.equal(false)
  })

  it('rejects a string', () => {
    expect(isWikiLink(display)).to.equal(false)
  })

  it('rejects an array', () => {
    expect(isWikiLink([id, display])).to.equal(false)
  })

  it('rejects an empty object', () => {
    expect(isWikiLink({})).to.equal(false)
  })

  it('accepts an object that meets the minimum requirements', () => {
    expect(isWikiLink({ id, display })).to.equal(true)
  })

  it('rejects a null ID', () => {
    expect(isWikiLink({ id: null, display })).to.equal(false)
  })

  it('rejects an undefined ID', () => {
    expect(isWikiLink({ id: undefined, display })).to.equal(false)
  })

  it('rejects a function for ID', () => {
    expect(isWikiLink({ id: () => {}, display })).to.equal(false)
  })

  it('rejects true for ID', () => {
    expect(isWikiLink({ id: true, display })).to.equal(false)
  })

  it('rejects false for ID', () => {
    expect(isWikiLink({ id: false, display })).to.equal(false)
  })

  it('rejects a numerical ID', () => {
    expect(isWikiLink({ id: 1, display })).to.equal(false)
  })

  it('rejects an array for ID', () => {
    expect(isWikiLink({ id: id.split(''), display })).to.equal(false)
  })

  it('rejects an object for ID', () => {
    expect(isWikiLink({ id: { id }, display })).to.equal(false)
  })

  it('rejects a null display string', () => {
    expect(isWikiLink({ id, display: null })).to.equal(false)
  })

  it('rejects an undefined display string', () => {
    expect(isWikiLink({ id, display: undefined })).to.equal(false)
  })

  it('rejects a function for a display string', () => {
    expect(isWikiLink({ id, display: () => {} })).to.equal(false)
  })

  it('rejects true for a display string', () => {
    expect(isWikiLink({ id, display: true })).to.equal(false)
  })

  it('rejects false for a display string', () => {
    expect(isWikiLink({ id, display: false })).to.equal(false)
  })

  it('rejects a numerical display string', () => {
    expect(isWikiLink({ id, display: 1 })).to.equal(false)
  })

  it('rejects an array for a display string', () => {
    expect(isWikiLink({ id, display: display.split('') })).to.equal(false)
  })

  it('rejects an object for a display string', () => {
    expect(isWikiLink({ id, display: { display } })).to.equal(false)
  })

  it('rejects a null original string', () => {
    expect(isWikiLink({ id, display, orig: null })).to.equal(false)
  })

  it('accepts an undefined original string', () => {
    expect(isWikiLink({ id, display, orig: undefined })).to.equal(true)
  })

  it('rejects a function for an original string', () => {
    expect(isWikiLink({ id, display, orig: () => {} })).to.equal(false)
  })

  it('rejects true for an original string', () => {
    expect(isWikiLink({ id, display, orig: true })).to.equal(false)
  })

  it('rejects false for an original string', () => {
    expect(isWikiLink({ id, display, orig: false })).to.equal(false)
  })

  it('rejects a numerical original string', () => {
    expect(isWikiLink({ id, display, orig: 1 })).to.equal(false)
  })

  it('accepts a string original string', () => {
    expect(isWikiLink({ id, display, orig })).to.equal(true)
  })

  it('rejects an array for an original string', () => {
    expect(isWikiLink({ id, display, orig: orig.split('') })).to.equal(false)
  })

  it('rejects an object for an original string', () => {
    expect(isWikiLink({ id, display, orig: { orig } })).to.equal(false)
  })

  it('rejects a null slug', () => {
    expect(isWikiLink({ id, display, slug: null })).to.equal(false)
  })

  it('accepts an undefined slug', () => {
    expect(isWikiLink({ id, display, slug: undefined })).to.equal(true)
  })

  it('rejects a function for a slug', () => {
    expect(isWikiLink({ id, display, slug: () => {} })).to.equal(false)
  })

  it('rejects true for a slug', () => {
    expect(isWikiLink({ id, display, slug: true })).to.equal(false)
  })

  it('rejects false for a slug', () => {
    expect(isWikiLink({ id, display, slug: false })).to.equal(false)
  })

  it('rejects a numerical slug', () => {
    expect(isWikiLink({ id, display, slug: 1 })).to.equal(false)
  })

  it('accepts a string slug', () => {
    expect(isWikiLink({ id, display, slug })).to.equal(true)
  })

  it('rejects an array for a slug', () => {
    expect(isWikiLink({ id, display, slug: slug.split('') })).to.equal(false)
  })

  it('rejects an object for a slug', () => {
    expect(isWikiLink({ id, display, slug: { slug } })).to.equal(false)
  })
})
