import { expect } from 'chai'
import createTimelineFilter from './create-filter.js'

describe('createTimelineFilter', () => {
  it('creates a filter for start', () => {
    const test = { orig: '<timeline start="400" />', start: 400 }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('yk >= 400')
  })

  it('creates a filter for end', () => {
    const test = { orig: '<timeline end="500" />', end: 500 }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('yk <= 500')
  })

  it('can combine start and end parameters', () => {
    const test = { orig: '<timeline start="400" end="500" />', start: 400, end: 500 }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('yk >= 400 && yk <= 500')
  })

  it('creates a filter for a single tag', () => {
    const test = { orig: '<timeline tags="Test Category" />', tags: ['Test Category'] }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('(topics ~ \'Test Category\')')
  })

  it('creates a filter for multiple tags', () => {
    const test = { orig: '<timeline tags="Test One; Test Two; Test Three" />', tags: ['Test One', 'Test Two', 'Test Three'] }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('(topics ~ \'Test One\' || topics ~ \'Test Two\' || topics ~ \'Test Three\')')
  })

  it('creates a filter for multiple tags and a start', () => {
    const test = { orig: '<timeline start="400" tags="Test One; Test Two; Test Three" />', tags: ['Test One', 'Test Two', 'Test Three'], start: 400 }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('(topics ~ \'Test One\' || topics ~ \'Test Two\' || topics ~ \'Test Three\') && yk >= 400')
  })

  it('creates a filter for multiple tags and an end', () => {
    const test = { orig: '<timeline end="500" tags="Test One; Test Two; Test Three" />', tags: ['Test One', 'Test Two', 'Test Three'], end: 500 }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('(topics ~ \'Test One\' || topics ~ \'Test Two\' || topics ~ \'Test Three\') && yk <= 500')
  })

  it('creates a filter for multiple tags, a start, and an end', () => {
    const test = { orig: '<timeline start="400" end="500" tags="Test One; Test Two; Test Three" />', tags: ['Test One', 'Test Two', 'Test Three'], start: 400, end: 500 }
    const actual = createTimelineFilter(test)
    expect(actual).to.equal('(topics ~ \'Test One\' || topics ~ \'Test Two\' || topics ~ \'Test Three\') && yk >= 400 && yk <= 500')
  })
})
