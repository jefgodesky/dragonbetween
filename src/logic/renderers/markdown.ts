import deepmerge from 'deepmerge'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

const schema = deepmerge(defaultSchema, {
  tagNames: ['header', 'section', 'aside', 'footer'],
  attributes: { '*': ['className', 'style'] }
})

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSanitize, schema)
  .use(rehypeSlug)
  .use(rehypeStringify)

export default async function renderMarkdown (markdown: string): Promise<string> {
  const markup = await processor.process(markdown)
  return markup.toString()
}
