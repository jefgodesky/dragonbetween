import { expect } from 'chai'
import { isSecretLegend } from './index.js'

describe('isSecretLegend', () => {
  const test = 'test'
  const label = 'Test'

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

  it('rejects an empty object', () => {
    expect(isSecretLegend({})).to.equal(false)
  })

  it('rejects a null legend', () => {
    expect(isSecretLegend({ legend: null })).to.equal(false)
  })

  it('rejects an undefined legend', () => {
    expect(isSecretLegend({ legend: undefined })).to.equal(false)
  })

  it('rejects a function for a legend', () => {
    expect(isSecretLegend({ legend: () => {} })).to.equal(false)
  })

  it('rejects a true legend', () => {
    expect(isSecretLegend({ legend: true })).to.equal(false)
  })

  it('rejects a false legend', () => {
    expect(isSecretLegend({ legend: false })).to.equal(false)
  })

  it('rejects a numerical legend', () => {
    expect(isSecretLegend({ legend: 1 })).to.equal(false)
  })

  it('rejects a string legend', () => {
    expect(isSecretLegend({ legend: 'legend' })).to.equal(false)
  })

  it('rejects an array for a legend', () => {
    expect(isSecretLegend({ legend: [] })).to.equal(false)
  })

  it('accepts an empty object for a legend', () => {
    expect(isSecretLegend({ legend: {} })).to.equal(true)
  })

  it('rejects a legend with a null property', () => {
    expect(isSecretLegend({ legend: { test: null } })).to.equal(false)
  })

  it('rejects a legend with an undefined property', () => {
    expect(isSecretLegend({ legend: { test: undefined } })).to.equal(false)
  })

  it('rejects a legend with a function property', () => {
    expect(isSecretLegend({ legend: { test: () => {} } })).to.equal(false)
  })

  it('rejects a legend with a true property', () => {
    expect(isSecretLegend({ legend: { test: true } })).to.equal(false)
  })

  it('rejects a legend with a false property', () => {
    expect(isSecretLegend({ legend: { test: false } })).to.equal(false)
  })

  it('rejects a legend with a number property', () => {
    expect(isSecretLegend({ legend: { test: 1 } })).to.equal(false)
  })

  it('accepts a legend with a string property', () => {
    expect(isSecretLegend({ legend: { test } })).to.equal(true)
  })

  it('rejects a legend with an array property', () => {
    expect(isSecretLegend({ legend: { test: test.split('') } })).to.equal(false)
  })

  it('rejects a legend with an object property', () => {
    expect(isSecretLegend({ legend: { test: { test } } })).to.equal(false)
  })

  it('rejects a null label', () => {
    expect(isSecretLegend({ label: null, legend: { test } })).to.equal(false)
  })

  it('accepts an undefined label', () => {
    expect(isSecretLegend({ label: undefined, legend: { test } })).to.equal(true)
  })

  it('rejects a function for a label', () => {
    expect(isSecretLegend({ label: () => {}, legend: { test } })).to.equal(false)
  })

  it('rejects a true label', () => {
    expect(isSecretLegend({ label: true, legend: { test } })).to.equal(false)
  })

  it('rejects a false label', () => {
    expect(isSecretLegend({ label: false, legend: { test } })).to.equal(false)
  })

  it('rejects a numerical label', () => {
    expect(isSecretLegend({ label: 1, legend: { test } })).to.equal(false)
  })

  it('accepts a string label', () => {
    expect(isSecretLegend({ label, legend: { test } })).to.equal(true)
  })

  it('rejects an array for a label', () => {
    expect(isSecretLegend({ label: label.split(''), legend: { test } })).to.equal(false)
  })

  it('rejects an object for a label', () => {
    expect(isSecretLegend({ label: { label }, legend: { test } })).to.equal(false)
  })

  it('rejects a null path', () => {
    expect(isSecretLegend({ path: null, legend: { test } })).to.equal(false)
  })

  it('accepts an undefined path', () => {
    expect(isSecretLegend({ path: undefined, legend: { test } })).to.equal(true)
  })

  it('rejects a function for a path', () => {
    expect(isSecretLegend({ path: () => {}, legend: { test } })).to.equal(false)
  })

  it('rejects a true path', () => {
    expect(isSecretLegend({ path: true, legend: { test } })).to.equal(false)
  })

  it('rejects a false path', () => {
    expect(isSecretLegend({ path: false, legend: { test } })).to.equal(false)
  })

  it('rejects a numerical path', () => {
    expect(isSecretLegend({ path: 1, legend: { test } })).to.equal(false)
  })

  it('rejects a string path', () => {
    expect(isSecretLegend({ path: 'Path / To / Category', legend: { test } })).to.equal(false)
  })

  it('accepts an array for a path', () => {
    expect(isSecretLegend({ path: [], legend: { test } })).to.equal(true)
  })

  it('rejects an array that includes null for a path', () => {
    expect(isSecretLegend({ path: [null], legend: { test } })).to.equal(false)
  })

  it('rejects an array that includes undefined for a path', () => {
    expect(isSecretLegend({ path: [undefined], legend: { test } })).to.equal(false)
  })

  it('rejects an array that includes a function for a path', () => {
    expect(isSecretLegend({ path: [() => {}], legend: { test } })).to.equal(false)
  })

  it('rejects an array that includes a number for a path', () => {
    expect(isSecretLegend({ path: [1], legend: { test } })).to.equal(false)
  })

  it('accepts an array that includes a string for a path', () => {
    expect(isSecretLegend({ path: ['Path', 'To', 'Category'], legend: { test } })).to.equal(true)
  })

  it('rejects an array that includes an object for a path', () => {
    expect(isSecretLegend({ path: [{}], legend: { test } })).to.equal(false)
  })

  it('rejects an object for a path', () => {
    expect(isSecretLegend({ path: {}, legend: { test } })).to.equal(false)
  })

  it('rejects null for children', () => {
    expect(isSecretLegend({ children: null, legend: { test } })).to.equal(false)
  })

  it('accepts undefined for children', () => {
    expect(isSecretLegend({ children: undefined, legend: { test } })).to.equal(true)
  })

  it('rejects true for children', () => {
    expect(isSecretLegend({ children: true, legend: { test } })).to.equal(false)
  })

  it('rejects false for children', () => {
    expect(isSecretLegend({ children: false, legend: { test } })).to.equal(false)
  })

  it('rejects a number for children', () => {
    expect(isSecretLegend({ children: 1, legend: { test } })).to.equal(false)
  })

  it('rejects a string for children', () => {
    expect(isSecretLegend({ children: 'test', legend: { test } })).to.equal(false)
  })

  it('accepts an empty array for children', () => {
    expect(isSecretLegend({ children: [], legend: { test } })).to.equal(true)
  })

  it('rejects an object for children', () => {
    expect(isSecretLegend({ children: {}, legend: { test } })).to.equal(false)
  })

  it('rejects a children array that includes null', () => {
    expect(isSecretLegend({ children: [null], legend: { test } })).to.equal(false)
  })

  it('rejects a children array that includes undefined', () => {
    expect(isSecretLegend({ children: [undefined], legend: { test } })).to.equal(false)
  })

  it('rejects a children array that includes a function', () => {
    expect(isSecretLegend({ children: [() => {}], legend: { test } })).to.equal(false)
  })

  it('rejects a children array that includes numbers', () => {
    expect(isSecretLegend({ children: [1, 2, 3], legend: { test } })).to.equal(false)
  })

  it('rejects a children array that includes strings', () => {
    expect(isSecretLegend({ children: ['a', 'b', 'c'], legend: { test } })).to.equal(false)
  })

  it('rejects a children array that includes arrays', () => {
    expect(isSecretLegend({ children: [[], [], []], legend: { test } })).to.equal(false)
  })

  it('rejects a children array that includes empty objects', () => {
    expect(isSecretLegend({ children: [{}, {}, {}], legend: { test } })).to.equal(false)
  })

  it('accepts a children array that includes SecretLegend objects', () => {
    expect(isSecretLegend({ children: [{ legend: { test } }], legend: { test } })).to.equal(true)
  })
})
