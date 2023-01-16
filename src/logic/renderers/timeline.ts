import parseTimeline from '../parsers/timeline.js'
import loadTimeline from '../../interfaces/timeline/load.js'

const renderTimelines = async (orig: string): Promise<string> => {
  let working = orig
  const timelines = parseTimeline(orig)
  for (const timeline of timelines) {
    const table = await loadTimeline(timeline)
    working = working.replace(timeline.orig, table)
  }
  return working
}

export default renderTimelines
