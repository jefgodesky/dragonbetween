import Knowledge from '../../interfaces/knowledge/index.js'
import parseWikiLinks from '../parsers/wiki-links.js'
import populateWikiLinks from '../../interfaces/wiki-link/populate-wiki-links.js'
import renderTimelines from './timeline.js'
import renderWikiLinks from './wiki-links.js'
import renderMarkdown from './markdown.js'

export default async function renderText (orig: string, knowledge: Knowledge = {}): Promise<string> {
  const timelined = await renderTimelines(orig)
  const links = parseWikiLinks(timelined)
  const populated = await populateWikiLinks(links, knowledge)
  const linked = renderWikiLinks(orig, populated)
  return await renderMarkdown(linked, knowledge)
}
