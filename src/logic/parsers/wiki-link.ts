import WikiLink from '../../interfaces/wiki-link/index.js'

const wikiLinkRegex = /\[\[(.*?)(\|(.*?))?\]\]/m

export default function parseWikiLink (orig: string): WikiLink | null {
  const elements = orig.match(wikiLinkRegex)
  if (elements === null || elements.length < 4) return null
  const id = (elements[1] ?? '').trim()
  const display = elements[3] === undefined ? id : elements[3].trim()
  return { id, display, orig }
}

export { wikiLinkRegex }
