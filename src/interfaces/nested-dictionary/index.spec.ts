import { expect } from 'chai'
import { isNestedDictionary } from './index.js'

describe('isNestedDictionary', () => {
  it('rejects null', () => {
    expect(isNestedDictionary(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isNestedDictionary(undefined)).to.equal(false)
  })

  it('rejects a function', () => {
    expect(isNestedDictionary(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isNestedDictionary(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isNestedDictionary(false)).to.equal(false)
  })

  it('rejects a number', () => {
    expect(isNestedDictionary(1)).to.equal(false)
  })

  it('rejects a string', () => {
    expect(isNestedDictionary('test')).to.equal(false)
  })

  it('rejects an array', () => {
    expect(isNestedDictionary([])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(isNestedDictionary({})).to.equal(true)
  })

  it('rejects an object with a null property', () => {
    expect(isNestedDictionary({ test: null })).to.equal(false)
  })

  it('rejects an object with an undefined property', () => {
    expect(isNestedDictionary({ test: undefined })).to.equal(false)
  })

  it('rejects an object with a function property', () => {
    expect(isNestedDictionary({ test: () => {} })).to.equal(false)
  })

  it('rejects an object with a true property', () => {
    expect(isNestedDictionary({ test: true })).to.equal(false)
  })

  it('rejects an object with a false property', () => {
    expect(isNestedDictionary({ test: false })).to.equal(false)
  })

  it('rejects an object with a number property', () => {
    expect(isNestedDictionary({ test: 1 })).to.equal(false)
  })

  it('rejects an object with a string property', () => {
    expect(isNestedDictionary({ test: 'test' })).to.equal(false)
  })

  it('rejects an object with an array property', () => {
    expect(isNestedDictionary({ test: [] })).to.equal(false)
  })

  it('accepts an object with an empty object property', () => {
    expect(isNestedDictionary({ test: {} })).to.equal(true)
  })

  it('accepts nested object properties', () => {
    expect(isNestedDictionary({ test: { test: { test: {} } } })).to.equal(true)
  })
})
