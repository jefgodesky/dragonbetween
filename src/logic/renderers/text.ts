import Knowledge from '../../interfaces/knowledge/index.js'
import parseWikiLinks from '../parsers/wiki-links.js'
import populateWikiLinks from '../../interfaces/wiki-link/populate-wiki-links.js'
import renderWikiLinks from './wiki-links.js'
import renderMarkdown from './markdown.js'

export default async function renderText(orig: string, knowledge: Knowledge = {}): Promise<string> {
  const links = parseWikiLinks(orig)
  const populated = await populateWikiLinks(links, knowledge)
  const linked = renderWikiLinks(orig, populated)
  return renderMarkdown(linked, knowledge)
}
