import Timeline from './index.js'
import roundNearest from '../../logic/round-fifty.js'
import createTimelineFilter from './create-filter.js'
import pb from '../../connect.js'

const getDate = (yk: number, system: 'YK' | 'YU' | 'YT', circa: boolean = false): string => {
  const yu = yk + 412
  const yt = yk + 787
  const eras = {
    YK: yk < 0 ? 'BYK' : 'YK',
    YU: yu < 0 ? 'BU' : 'YU',
    YT: yt < 0 ? 'BT' : 'YT'
  }
  const date = system === 'YU' ? Math.abs(yu) : system === 'YT' ? Math.abs(yt) : Math.abs(yk)
  const rounded = roundNearest(date, 50)
  const roundedFixed = rounded === 0 ? 1 : rounded
  return circa
    ? `c. ${roundedFixed} ${eras[system]}`
    : `${date} ${eras[system]}`
}

const loadTimeline = async (timeline: Timeline): Promise<string> => {
  const filter = createTimelineFilter(timeline)
  const sort = '+yk'
  const records = await pb.collection('timeline_events').getFullList(undefined, { filter, sort })
  const rows = records.map(record => {
    const { event, secret, yk, circa } = record
    const date = {
      yk: getDate(yk, 'YK', circa),
      yu: getDate(yk, 'YU', circa),
      yt: getDate(yk, 'YT', circa),
    }
    const cells = [
      `<td class="year-kingdom" data-secret="CommonKnowledgeKhorvaire">${date.yk}</td>`,
      `<td class="year-unity" data-secret="CommonKnowledgeSarlona">${date.yu}</td>`,
      `<td class="year-taratai" data-secret="CommonKnowledgeAdar">${date.yt}</td>`,
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
