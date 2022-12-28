import { expect } from 'chai'
import { isSecretLegend } from './index.js'

describe('isSecretLegend', () => {
  const test = 'test'

  it('rejects null', () => {
    expect(isSecretLegend(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isSecretLegend(undefined)).to.equal(false)
  })

  it('rejects a function', () => {
    expect(isSecretLegend(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isSecretLegend(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isSecretLegend(false)).to.equal(false)
  })

  it('rejects a number', () => {
    expect(isSecretLegend(1)).to.equal(false)
  })

  it('rejects a string', () => {
    expect(isSecretLegend('test')).to.equal(false)
  })

  it('rejects an array', () => {
    expect(isSecretLegend(['t', 'e', 's', 't'])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(isSecretLegend({})).to.equal(true)
  })

  it('rejects an object with a null property', () => {
    expect(isSecretLegend({ test: null })).to.equal(false)
  })

  it('rejects an object with an undefined property', () => {
    expect(isSecretLegend({ test: undefined })).to.equal(false)
  })

  it('rejects an object with a function property', () => {
    expect(isSecretLegend({ test: () => {} })).to.equal(false)
  })

  it('rejects an object with a true property', () => {
    expect(isSecretLegend({ test: true })).to.equal(false)
  })

  it('rejects an object with a false property', () => {
    expect(isSecretLegend({ test: false })).to.equal(false)
  })

  it('rejects an object with a number property', () => {
    expect(isSecretLegend({ test: 1 })).to.equal(false)
  })

  it('accept an object with a string property', () => {
    expect(isSecretLegend({ test })).to.equal(true)
  })

  it('rejects an object with an array property', () => {
    expect(isSecretLegend({ test: test.split('') })).to.equal(false)
  })

  it('rejects an object with an object property', () => {
    expect(isSecretLegend({ test: { test } })).to.equal(false)
  })
})
