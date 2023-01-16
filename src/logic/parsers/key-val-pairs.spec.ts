import { expect } from 'chai'
import parseKeyValPairs from './key-val-pairs.js'

describe('parseKeyValPairs', () => {
  it('parses key/value pairs from a string', () => {
    const input = '    test1="Hello, world!"  test2="Test" test3="42"  '
    const actual = parseKeyValPairs(input)
    expect(Object.keys(actual)).to.have.lengthOf(3)
    expect(Object.keys(actual).join(' ')).to.equal('test1 test2 test3')
    expect(Object.values(actual).join(' ')).to.equal('Hello, world! Test 42')
  })
})
