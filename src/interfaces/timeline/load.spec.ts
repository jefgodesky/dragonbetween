import { expect } from 'chai'
import loadTimeline from './load.js'

describe('loadTimeline', () => {
  it('loads the timeline', async () => {
    const html = await loadTimeline({ orig: '<timeline />' })
    expect(html).not.to.equal('')
  })
})
