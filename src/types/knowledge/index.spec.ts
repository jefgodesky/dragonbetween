import { expect } from 'chai'
import { isKnowledge } from './index.js'

describe('Knowledge', () => {
  it('rejects null', () => {
    expect(isKnowledge(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isKnowledge(undefined)).to.equal(false)
  })

  it('rejects a function', () => {
    expect(isKnowledge(() => {})).to.equal(false)
  })

  it('rejects false', () => {
    expect(isKnowledge(false)).to.equal(false)
  })

  it('rejects true', () => {
    expect(isKnowledge(true)).to.equal(false)
  })

  it('rejects a number', () => {
    expect(isKnowledge(1)).to.equal(false)
  })

  it('rejects a string', () => {
    expect(isKnowledge('true')).to.equal(false)
  })

  it('rejects an array', () => {
    expect(isKnowledge([1, 2, 3])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(isKnowledge({})).to.equal(true)
  })

  it('rejects an object with a null property', () => {
    expect(isKnowledge({ test: null })).to.equal(false)
  })

  it('rejects an object with an undefined property', () => {
    expect(isKnowledge({ test: undefined })).to.equal(false)
  })

  it('rejects an object with a function property', () => {
    expect(isKnowledge({ test: () => {} })).to.equal(false)
  })

  it('accepts an object with a false property', () => {
    expect(isKnowledge({ test: false })).to.equal(true)
  })

  it('accepts an object with a true property', () => {
    expect(isKnowledge({ test: true })).to.equal(true)
  })

  it('rejects an object with a number property', () => {
    expect(isKnowledge({ test: 1 })).to.equal(false)
  })

  it('rejects an object with a string property', () => {
    expect(isKnowledge({ test: 'true' })).to.equal(false)
  })

  it('rejects an object with an array property', () => {
    expect(isKnowledge({ test: [1, 2, 3] })).to.equal(false)
  })

  it('rejects an object with an object property', () => {
    expect(isKnowledge({ test: {} })).to.equal(false)
  })
})
