import { expect } from 'chai'
import { isTimeline } from './index.js'

describe('isTimeline', () => {
  const orig = '<timeline />'

  it('rejects null', () => {
    expect(isTimeline(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isTimeline(undefined)).to.equal(false)
  })

  it('rejects a function', () => {
    expect(isTimeline(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isTimeline(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isTimeline(false)).to.equal(false)
  })

  it('rejects a number', () => {
    expect(isTimeline(1)).to.equal(false)
  })

  it('rejects a string', () => {
    expect(isTimeline(orig)).to.equal(false)
  })

  it('rejects an array', () => {
    expect(isTimeline(orig.split(''))).to.equal(false)
  })

  it('rejects an empty object', () => {
    expect(isTimeline({})).to.equal(false)
  })

  it('rejects an object with an undefined orig property', () => {
    expect(isTimeline({ orig: undefined })).to.equal(false)
  })

  it('rejects an object with a null orig property', () => {
    expect(isTimeline({ orig: null })).to.equal(false)
  })

  it('rejects an object with a function orig property', () => {
    expect(isTimeline({ orig: () => {} })).to.equal(false)
  })

  it('rejects an object with a true orig property', () => {
    expect(isTimeline({ orig: true })).to.equal(false)
  })

  it('rejects an object with a false orig property', () => {
    expect(isTimeline({ orig: false })).to.equal(false)
  })

  it('rejects an object with a number orig property', () => {
    expect(isTimeline({ orig: 1 })).to.equal(false)
  })

  it('accepts an object with a string orig property', () => {
    expect(isTimeline({ orig })).to.equal(true)
  })

  it('rejects an object with an array orig property', () => {
    expect(isTimeline({ orig: orig.split('') })).to.equal(false)
  })

  it('rejects an object with an object orig property', () => {
    expect(isTimeline({ orig: { orig } })).to.equal(false)
  })

  it('accepts an object with an undefined tags property', () => {
    expect(isTimeline({ orig, tags: undefined })).to.equal(true)
  })

  it('rejects an object with a null tags property', () => {
    expect(isTimeline({ orig, tags: null })).to.equal(false)
  })

  it('rejects an object with a function tags property', () => {
    expect(isTimeline({ orig, tags: () => {} })).to.equal(false)
  })

  it('rejects an object with a true tags property', () => {
    expect(isTimeline({ orig, tags: true })).to.equal(false)
  })

  it('rejects an object with a false tags property', () => {
    expect(isTimeline({ orig, tags: false })).to.equal(false)
  })

  it('rejects an object with a number tags property', () => {
    expect(isTimeline({ orig, tags: 1 })).to.equal(false)
  })

  it('rejects an object with a string tags property', () => {
    expect(isTimeline({ orig, tags: 'tag1 tag2' })).to.equal(false)
  })

  it('accept an object with an empty array tags property', () => {
    expect(isTimeline({ orig, tags: [] })).to.equal(true)
  })

  it('rejects an object with a tags array that includes undefined', () => {
    expect(isTimeline({ orig, tags: [undefined] })).to.equal(false)
  })

  it('rejects an object with a tags array that includes null', () => {
    expect(isTimeline({ orig, tags: [null] })).to.equal(false)
  })

  it('rejects an object with a tags array that includes a function', () => {
    expect(isTimeline({ orig, tags: [() => {}] })).to.equal(false)
  })

  it('rejects an object with a tags array that includes true', () => {
    expect(isTimeline({ orig, tags: [true] })).to.equal(false)
  })

  it('rejects an object with a tags array that includes false', () => {
    expect(isTimeline({ orig, tags: [false] })).to.equal(false)
  })

  it('rejects an object with a tags array that includes a number', () => {
    expect(isTimeline({ orig, tags: [1] })).to.equal(false)
  })

  it('accepts an object with a tags array that includes a string', () => {
    expect(isTimeline({ orig, tags: ['tag1'] })).to.equal(true)
  })

  it('rejects an object with a tags array that includes arrays', () => {
    expect(isTimeline({ orig, tags: [['tag1']] })).to.equal(false)
  })

  it('rejects an object with a tags array that includes objects', () => {
    expect(isTimeline({ orig, tags: [{ tag: 'tag1' }] })).to.equal(false)
  })

  it('rejects an object with an object tags property', () => {
    expect(isTimeline({ orig, tags: { tag1: true, tag2: true, tag3: false } })).to.equal(false)
  })

  it('accepts an object with an undefined start property', () => {
    expect(isTimeline({ orig, start: undefined })).to.equal(true)
  })

  it('rejects an object with a null start property', () => {
    expect(isTimeline({ orig, start: null })).to.equal(false)
  })

  it('rejects an object with a function start property', () => {
    expect(isTimeline({ orig, start: () => {} })).to.equal(false)
  })

  it('rejects an object with a true start property', () => {
    expect(isTimeline({ orig, start: true })).to.equal(false)
  })

  it('rejects an object with a false start property', () => {
    expect(isTimeline({ orig, start: false })).to.equal(false)
  })

  it('accepts an object with a number start property', () => {
    expect(isTimeline({ orig, start: 1 })).to.equal(true)
  })

  it('rejects an object with a string start property', () => {
    expect(isTimeline({ orig, start: '1' })).to.equal(false)
  })

  it('rejects an object with an array start property', () => {
    expect(isTimeline({ orig, start: [1, 2, 3] })).to.equal(false)
  })

  it('rejects an object with an object start property', () => {
    expect(isTimeline({ orig, start: { year: 998 } })).to.equal(false)
  })

  it('accepts an object with an undefined end property', () => {
    expect(isTimeline({ orig, end: undefined })).to.equal(true)
  })

  it('rejects an object with a null end property', () => {
    expect(isTimeline({ orig, end: null })).to.equal(false)
  })

  it('rejects an object with a function end property', () => {
    expect(isTimeline({ orig, end: () => {} })).to.equal(false)
  })

  it('rejects an object with a true end property', () => {
    expect(isTimeline({ orig, end: true })).to.equal(false)
  })

  it('rejects an object with a false end property', () => {
    expect(isTimeline({ orig, end: false })).to.equal(false)
  })

  it('accepts an object with a number end property', () => {
    expect(isTimeline({ orig, end: 1 })).to.equal(true)
  })

  it('rejects an object with a string end property', () => {
    expect(isTimeline({ orig, end: '1' })).to.equal(false)
  })

  it('rejects an object with an array end property', () => {
    expect(isTimeline({ orig, end: [1, 2, 3] })).to.equal(false)
  })

  it('rejects an object with an object end property', () => {
    expect(isTimeline({ orig, end: { year: 998 } })).to.equal(false)
  })
})
