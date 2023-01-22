import { Root, Element, RootContent } from 'hast'
import Knowledge from '../../interfaces/knowledge/index.js'
import deepmerge from 'deepmerge'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeRaw from 'rehype-raw'
import rehypeRewrite from 'rehype-rewrite'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import clear from '../clear.js'

const schema = deepmerge(defaultSchema, {
  tagNames: ['header', 'section', 'aside', 'nav', 'footer'],
  attributes: { '*': ['className', 'style'] }
})

export default async function renderMarkdown (markdown: string, knowledge: Knowledge = {}): Promise<string> {
  const render = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeRewrite, {
      rewrite: (node: Root | RootContent, index: number | null, parent: Root | Element | null): void => {
        if (parent !== null && node.type === 'element' && node.properties?.dataSecret !== undefined && !clear(knowledge, node.properties.dataSecret?.toString())) {
          parent.children = parent.children.filter(child => {
            if (child.position === undefined) return true
            return JSON.stringify(child.position) !== JSON.stringify(node.position)
          })
        }
      }
    })
    .use(rehypeSanitize, schema)
    .use(rehypeSlug)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown)
  return render.toString()
}
