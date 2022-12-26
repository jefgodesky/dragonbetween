import WikiLink from '../../interfaces/wiki-link/index.js'
import parseWikiLink, { wikiLinkRegex } from './wiki-link.js'

export default function parseWikiLinks (orig: string): WikiLink[] {
  const links: WikiLink[] = []
  const regex = new RegExp(wikiLinkRegex.source, wikiLinkRegex.flags + 'g')
  for (const instance of orig.match(regex) ?? []) {
    const link = parseWikiLink(instance)
    if (link !== null) links.push(link)
  }
  return links
}
