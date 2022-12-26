import { expect } from 'chai'
import { isCategorization } from './index.js'

describe('isCategorization', () => {
  const slug = 'test'
  const label = 'Test'

  it('rejects null', () => {
    expect(isCategorization(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isCategorization(undefined)).to.equal(false)
  })

  it('rejects functions', () => {
    expect(isCategorization(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isCategorization(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isCategorization(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isCategorization(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isCategorization(slug)).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isCategorization([slug, label])).to.equal(false)
  })

  it('rejects empty objects', () => {
    expect(isCategorization({})).to.equal(false)
  })

  it('accepts an object that meets the minimum requirements', () => {
    expect(isCategorization({ slug, label })).to.equal(true)
  })

  it('rejects a null slug', () => {
    expect(isCategorization({ slug: null, label })).to.equal(false)
  })

  it('rejects an undefined slug', () => {
    expect(isCategorization({ slug: undefined, label })).to.equal(false)
  })

  it('rejects a function for a slug', () => {
    expect(isCategorization({ slug: () => {}, label })).to.equal(false)
  })

  it('rejects true as a slug', () => {
    expect(isCategorization({ slug: true, label })).to.equal(false)
  })

  it('rejects false as a slug', () => {
    expect(isCategorization({ slug: false, label })).to.equal(false)
  })

  it('rejects a numerical slug', () => {
    expect(isCategorization({ slug: 1, label })).to.equal(false)
  })

  it('rejects an array as a slug', () => {
    expect(isCategorization({ slug: slug.split(''), label })).to.equal(false)
  })

  it('rejects an object as a slug', () => {
    expect(isCategorization({ slug: { slug }, label })).to.equal(false)
  })

  it('rejects a null label', () => {
    expect(isCategorization({ slug, label: null })).to.equal(false)
  })

  it('rejects an undefined label', () => {
    expect(isCategorization({ slug, label: undefined })).to.equal(false)
  })

  it('rejects a function for a label', () => {
    expect(isCategorization({ slug, label: () => {} })).to.equal(false)
  })

  it('rejects true as a label', () => {
    expect(isCategorization({ slug, label: true })).to.equal(false)
  })

  it('rejects false as a label', () => {
    expect(isCategorization({ slug, label: false })).to.equal(false)
  })

  it('rejects a numerical label', () => {
    expect(isCategorization({ slug, label: 1 })).to.equal(false)
  })

  it('rejects an array as a label', () => {
    expect(isCategorization({ slug, label: label.split('') })).to.equal(false)
  })

  it('rejects an object as a label', () => {
    expect(isCategorization({ slug, label: { label } })).to.equal(false)
  })
})
