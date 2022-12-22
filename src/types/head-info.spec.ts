import { expect } from 'chai'
import { isHeadInfo } from './head-info.js'

describe('isHeadInfo', () => {
  it('rejects null', () => {
    expect(isHeadInfo(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isHeadInfo(undefined)).to.equal(false)
  })

  it('rejects true', () => {
    expect(isHeadInfo(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isHeadInfo(false)).to.equal(false)
  })

  it('rejects a number', () => {
    expect(isHeadInfo(1)).to.equal(false)
  })

  it('rejects a string', () => {
    expect(isHeadInfo('Test')).to.equal(false)
  })

  it('rejects an empty array', () => {
    expect(isHeadInfo([])).to.equal(false)
  })

  it('accepts an empty object', () => {
    expect(isHeadInfo({})).to.equal(true)
  })

  it('rejects an object with title set to null', () => {
    expect(isHeadInfo({ title: null })).to.equal(false)
  })

  it('accepts an object with title set to undefined', () => {
    expect(isHeadInfo({ title: undefined })).to.equal(true)
  })

  it('rejects an object with title set to true', () => {
    expect(isHeadInfo({ title: true })).to.equal(false)
  })

  it('rejects an object with title set to false', () => {
    expect(isHeadInfo({ title: false })).to.equal(false)
  })

  it('rejects an object with title set to a number', () => {
    expect(isHeadInfo({ title: 1 })).to.equal(false)
  })

  it('accepts an object with title set to a string', () => {
    expect(isHeadInfo({ title: 'Test' })).to.equal(true)
  })

  it('rejects an object with title set to an array', () => {
    expect(isHeadInfo({ title: ['T', 'e', 's', 't'] })).to.equal(false)
  })

  it('rejects an object with title set to an object', () => {
    expect(isHeadInfo({ title: { value: 'Test' } })).to.equal(false)
  })

  it('rejects an object with description set to null', () => {
    expect(isHeadInfo({ description: null })).to.equal(false)
  })

  it('accepts an object with description set to undefined', () => {
    expect(isHeadInfo({ description: undefined })).to.equal(true)
  })

  it('rejects an object with description set to true', () => {
    expect(isHeadInfo({ description: true })).to.equal(false)
  })

  it('rejects an object with description set to false', () => {
    expect(isHeadInfo({ description: false })).to.equal(false)
  })

  it('rejects an object with description set to a number', () => {
    expect(isHeadInfo({ description: 1 })).to.equal(false)
  })

  it('accepts an object with description set to a string', () => {
    expect(isHeadInfo({ description: 'Test' })).to.equal(true)
  })

  it('rejects an object with description set to an array', () => {
    expect(isHeadInfo({ description: ['T', 'e', 's', 't'] })).to.equal(false)
  })

  it('rejects an object with description set to an object', () => {
    expect(isHeadInfo({ description: { value: 'Test' } })).to.equal(false)
  })

  it('rejects an object with url set to null', () => {
    expect(isHeadInfo({ url: null })).to.equal(false)
  })

  it('accepts an object with url set to undefined', () => {
    expect(isHeadInfo({ url: undefined })).to.equal(true)
  })

  it('rejects an object with url set to true', () => {
    expect(isHeadInfo({ url: true })).to.equal(false)
  })

  it('rejects an object with url set to false', () => {
    expect(isHeadInfo({ url: false })).to.equal(false)
  })

  it('rejects an object with url set to a number', () => {
    expect(isHeadInfo({ url: 1 })).to.equal(false)
  })

  it('accepts an object with url set to a string', () => {
    expect(isHeadInfo({ url: 'Test' })).to.equal(true)
  })

  it('rejects an object with url set to an array', () => {
    expect(isHeadInfo({ url: ['T', 'e', 's', 't'] })).to.equal(false)
  })

  it('rejects an object with url set to an object', () => {
    expect(isHeadInfo({ url: { value: 'Test' } })).to.equal(false)
  })

  it('rejects an object with image set to null', () => {
    expect(isHeadInfo({ image: null })).to.equal(false)
  })

  it('accepts an object with image set to undefined', () => {
    expect(isHeadInfo({ image: undefined })).to.equal(true)
  })

  it('rejects an object with image set to true', () => {
    expect(isHeadInfo({ image: true })).to.equal(false)
  })

  it('rejects an object with image set to false', () => {
    expect(isHeadInfo({ image: false })).to.equal(false)
  })

  it('rejects an object with image set to a number', () => {
    expect(isHeadInfo({ image: 1 })).to.equal(false)
  })

  it('accepts an object with image set to a string', () => {
    expect(isHeadInfo({ image: 'Test' })).to.equal(true)
  })

  it('rejects an object with image set to an array', () => {
    expect(isHeadInfo({ image: ['T', 'e', 's', 't'] })).to.equal(false)
  })

  it('rejects an object with image set to an object', () => {
    expect(isHeadInfo({ image: { value: 'Test' } })).to.equal(false)
  })
})
