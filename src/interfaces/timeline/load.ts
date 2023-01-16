import Timeline from './index.js'
import createTimelineFilter from './create-filter.js'
import pb from '../../connect.js'

const loadTimeline = async (timeline: Timeline): Promise<string> => {
  const filter = createTimelineFilter(timeline)
  const sort = '+yk'
  const records = await pb.collection('timeline_events').getFullList(undefined, { filter, sort })
  const rows = records.map(record => {
    const { event, secret, yk } = record
    const yu = yk + 412
    const yt = yk + 787
    const readable = {
      yk: yk < 0 ? `${yk * -1} BYK` : `${yk} YK`,
      yu: yu < 0 ? `${yu * -1} BU` : `${yu} YU`,
      yt: yt < 0 ? `${yt * -1} BT` : `${yt} YT`
    }
    const cells = [
      `<td class="year-kingdom" data-secret="CommonKnowledgeKhorvaire">${readable.yk}</td>`,
      `<td class="year-unity" data-secret="CommonKnowledgeSarlona">${readable.yu}</td>`,
      `<td class="year-taratai" data-secret="CommonKnowledgeAdar">${readable.yt}</td>`,
      `<td>${event}</td>`
    ]
    const interior = '\n  ' + cells.join('\n  ') + '\n'
    return secret === undefined || secret.length < 1
      ? `<tr>${interior}</tr>`
      : `<tr data-secret="${secret}">${interior}</tr>`
  })

  const headers = [
    '<th class="year-kingdom" data-secret="CommonKnowledgeKhorvaire"><abbr title="Year of the Kingdom">YK</abbr></th>',
    '<th class="year-unity" data-secret="CommonKnowledgeSarlona"><abbr title="Year of Unity">YU</abbr></th>',
    '<th class="year-taratai" data-secret="CommonKnowledgeAdar"><abbr title="Year of Taratai">YT</abbr></th>',
    '<th>Event</th>'
  ]

  return `<table class="timeline">\n<thead>\n<tr>\n${headers.join('\n')}\n</tr></thead><tbody>\n${rows.join('\n')}\n</tbody>\n</table>`
}

export default loadTimeline
