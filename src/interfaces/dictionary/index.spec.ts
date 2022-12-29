import { expect } from 'chai'
import { isDictionary } from './index.js'

describe('isDictionary', () => {
  const test = 'test'

  it('rejects null', () => {
    expect(isDictionary(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isDictionary(undefined)).to.equal(false)
  })

  it('rejects a function', () => {
    expect(isDictionary(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isDictionary(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isDictionary(false)).to.equal(false)
  })

  it('rejects numbers', () => {
    expect(isDictionary(1)).to.equal(false)
  })

  it('rejects strings', () => {
    expect(isDictionary(test)).to.equal(false)
  })

  it('rejects arrays', () => {
    expect(isDictionary(test.split(''))).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(isDictionary({})).to.equal(true)
  })

  it('rejects an object with a null property', () => {
    expect(isDictionary({ test: null })).to.equal(false)
  })

  it('rejects an object with an undefined property', () => {
    expect(isDictionary({ test: undefined })).to.equal(false)
  })

  it('rejects an object with a function property', () => {
    expect(isDictionary({ test: () => {} })).to.equal(false)
  })

  it('rejects an object with a true property', () => {
    expect(isDictionary({ test: true })).to.equal(false)
  })

  it('rejects an object with a false property', () => {
    expect(isDictionary({ test: false })).to.equal(false)
  })

  it('rejects an object with a number property', () => {
    expect(isDictionary({ test: 1 })).to.equal(false)
  })

  it('accepts an object with a string property', () => {
    expect(isDictionary({ test })).to.equal(true)
  })

  it('rejects an object with an array property', () => {
    expect(isDictionary({ test: test.split('') })).to.equal(false)
  })

  it('rejects an object with an object property', () => {
    expect(isDictionary({ test: { test } })).to.equal(false)
  })
})
