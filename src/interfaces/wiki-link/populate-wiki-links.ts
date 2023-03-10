import rfdc from 'rfdc'
import SqlString from 'sqlstring'
import Knowledge from '../knowledge/index.js'
import WikiLink from './index.js'
import pb from '../../connect.js'
import clear from '../../logic/clear.js'

const clone = rfdc()

export default async function populateWikiLinks (links: WikiLink[], knowledge: Knowledge = {}): Promise<WikiLink[]> {
  const working = clone(links)
  for (const link of working) {
    try {
      const topic = await pb.collection('lore_topics')
        .getFirstListItem(`title ~ ${SqlString.escape(`%${link.id}%`)} || slug = ${SqlString.escape(link.id.substring(1))}`)
      const known = clear(knowledge, topic.secret)
      if (known) link.slug = topic.slug
    } catch (err: any) {
      if (err.status !== 404) console.error(err)
    }
  }
  return working
}
