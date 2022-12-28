import { expect } from 'chai'
import calculateModifier from './calculate-modifier.js'

describe('calculateModifier', () => {
  it('returns modifier -3 for a score of 0', () => {
    expect(calculateModifier(0)).to.equal('-3')
  })

  it('returns modifier -3 for a score of 1', () => {
    expect(calculateModifier(1)).to.equal('-3')
  })

  it('returns modifier -3 for a score of 2', () => {
    expect(calculateModifier(2)).to.equal('-3')
  })

  it('returns modifier -3 for a score of 3', () => {
    expect(calculateModifier(3)).to.equal('-3')
  })

  it('returns modifier -2 for a score of 4', () => {
    expect(calculateModifier(4)).to.equal('-2')
  })

  it('returns modifier -2 for a score of 5', () => {
    expect(calculateModifier(5)).to.equal('-2')
  })

  it('returns modifier -1 for a score of 6', () => {
    expect(calculateModifier(6)).to.equal('-1')
  })

  it('returns modifier -1 for a score of 7', () => {
    expect(calculateModifier(7)).to.equal('-1')
  })

  it('returns modifier -1 for a score of 8', () => {
    expect(calculateModifier(8)).to.equal('-1')
  })

  it('returns modifier 0 for a score of 9', () => {
    expect(calculateModifier(9)).to.equal('+0')
  })

  it('returns modifier 0 for a score of 10', () => {
    expect(calculateModifier(10)).to.equal('+0')
  })

  it('returns modifier 0 for a score of 11', () => {
    expect(calculateModifier(11)).to.equal('+0')
  })

  it('returns modifier 0 for a score of 12', () => {
    expect(calculateModifier(12)).to.equal('+0')
  })

  it('returns modifier 1 for a score of 13', () => {
    expect(calculateModifier(13)).to.equal('+1')
  })

  it('returns modifier 1 for a score of 14', () => {
    expect(calculateModifier(14)).to.equal('+1')
  })

  it('returns modifier 1 for a score of 15', () => {
    expect(calculateModifier(15)).to.equal('+1')
  })

  it('returns modifier 2 for a score of 16', () => {
    expect(calculateModifier(16)).to.equal('+2')
  })

  it('returns modifier 2 for a score of 17', () => {
    expect(calculateModifier(17)).to.equal('+2')
  })

  it('returns modifier 3 for a score of 18', () => {
    expect(calculateModifier(18)).to.equal('+3')
  })

  it('returns modifier 3 for a score of 19', () => {
    expect(calculateModifier(19)).to.equal('+3')
  })

  it('returns modifier 3 for a score of 20', () => {
    expect(calculateModifier(20)).to.equal('+3')
  })
})
