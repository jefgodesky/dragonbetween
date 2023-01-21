import { expect } from 'chai'
import roundNearest from './round-fifty.js'

describe('roundNearest', () => {
  it('can round to the nearest 10', () => {
    expect(roundNearest(23, 10)).to.equal(20)
    expect(roundNearest(37, 10)).to.equal(40)
    expect(roundNearest(104, 10)).to.equal(100)
    expect(roundNearest(151, 10)).to.equal(150)
  })

  it('can round to the nearest 50', () => {
    expect(roundNearest(23, 50)).to.equal(0)
    expect(roundNearest(37, 50)).to.equal(50)
    expect(roundNearest(104, 50)).to.equal(100)
    expect(roundNearest(151, 50)).to.equal(150)
  })

  it('can round to the nearest 100', () => {
    expect(roundNearest(23, 100)).to.equal(0)
    expect(roundNearest(37, 100)).to.equal(0)
    expect(roundNearest(104, 100)).to.equal(100)
    expect(roundNearest(151, 100)).to.equal(200)
  })
})
