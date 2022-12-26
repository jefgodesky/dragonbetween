import WikiLink from '../../interfaces/wiki-link/index.js'

export default function renderWikiLinks (orig: string, links: WikiLink[]): string {
  let working = orig
  for (const link of links) {
    if (link.orig !== undefined) {
      const replacement = link.slug !== undefined ? `<a href="/lore/${link.slug}">${link.display}</a>` : link.display
      working = working.replace(link.orig, replacement)
    }
  }
  return working
}
