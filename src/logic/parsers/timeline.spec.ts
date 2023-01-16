import { expect } from 'chai'
import { isTimeline } from '../../interfaces/timeline/index.js'
import parseTimeline from './timeline.js'

describe('parseTimeline', () => {
  it('parses timelines from text', () => {
    const test = '<timeline tags="test" />\n\n<timeline/>\n\n<timeline start="400" end="500" tags="test" />'
    const timelines = parseTimeline(test)
    expect(timelines).to.have.lengthOf(3)
    for (const timeline of timelines) { expect(isTimeline(timeline)).to.equal(true) }
  })

  it('can parse tags', () => {
    const test = '<timeline tags="test1 test2 test3" />'
    const timelines = parseTimeline(test)
    expect(timelines[0]?.tags).to.have.lengthOf(3)
    expect(timelines[0]?.tags?.join(' ')).to.equal('test1 test2 test3')
  })

  it('can parse start and end attributes', () => {
    const test = '<timeline start="400" end="500" />'
    const timelines = parseTimeline(test)
    expect(timelines[0]?.start).to.equal(400)
    expect(timelines[0]?.end).to.equal(500)
  })

  it('can disregards non-numerical start and end attributes', () => {
    const test = '<timeline start="four hundred" end="nevar" />'
    const timelines = parseTimeline(test)
    expect(timelines[0]?.start).to.equal(undefined)
    expect(timelines[0]?.end).to.equal(undefined)
  })
})
