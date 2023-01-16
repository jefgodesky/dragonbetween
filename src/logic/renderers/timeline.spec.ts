import { expect } from 'chai'
import renderTimelines from './timeline.js'

describe('renderTimelines', () => {
  it('renders a timeline', async () => {
    const test = 'Something before.\n\n## Timeline\n\n<timeline start="0" end="1" />\n\nSomething after.'
    const actual = await renderTimelines(test)
    console.log(actual)
    expect(actual.startsWith('Something before.')).to.equal(true)
    expect(actual.endsWith('Something after.')).to.equal(true)
    expect(actual.includes('<table class="timeline">')).to.equal(true)
  })
})
