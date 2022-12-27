import { expect } from 'chai'
import { isLink } from './index.js'

describe('isLink', () => {
  const slug = 'test'
  const label = 'Test'

  it('rejects null', () => {
    expect(isLink(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isLink(undefined)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isLink(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isLink(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isLink(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isLink(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isLink(slug)).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isLink([slug, label])).to.equal(false)
  })

  it('rejects empty objects', () => {
    expect(isLink({})).to.equal(false)
  })

  it('accepts an object that meets the minimum requirements', () => {
    expect(isLink({ slug, label })).to.equal(true)
  })

  it('rejects a null slug', () => {
    expect(isLink({ slug: null, label })).to.equal(false)
  })

  it('rejects an undefined slug', () => {
    expect(isLink({ slug: undefined, label })).to.equal(false)
  })

  it('rejects a function for a slug', () => {
    expect(isLink({ slug: () => {}, label })).to.equal(false)
  })

  it('rejects true as a slug', () => {
    expect(isLink({ slug: true, label })).to.equal(false)
  })

  it('rejects false as a slug', () => {
    expect(isLink({ slug: false, label })).to.equal(false)
  })

  it('rejects a numerical slug', () => {
    expect(isLink({ slug: 1, label })).to.equal(false)
  })

  it('rejects an array as a slug', () => {
    expect(isLink({ slug: slug.split(''), label })).to.equal(false)
  })

  it('rejects an object as a slug', () => {
    expect(isLink({ slug: { slug }, label })).to.equal(false)
  })

  it('rejects a null label', () => {
    expect(isLink({ slug, label: null })).to.equal(false)
  })

  it('rejects an undefined label', () => {
    expect(isLink({ slug, label: undefined })).to.equal(false)
  })

  it('rejects a function for a label', () => {
    expect(isLink({ slug, label: () => {} })).to.equal(false)
  })

  it('rejects true as a label', () => {
    expect(isLink({ slug, label: true })).to.equal(false)
  })

  it('rejects false as a label', () => {
    expect(isLink({ slug, label: false })).to.equal(false)
  })

  it('rejects a numerical label', () => {
    expect(isLink({ slug, label: 1 })).to.equal(false)
  })

  it('rejects an array as a label', () => {
    expect(isLink({ slug, label: label.split('') })).to.equal(false)
  })

  it('rejects an object as a label', () => {
    expect(isLink({ slug, label: { label } })).to.equal(false)
  })
})
