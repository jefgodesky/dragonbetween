import { expect } from 'chai'
import renderMarkdown from './markdown.js'

describe('renderMarkdown', () => {
  it('renders Markdown into HTML', async () => {
    const html = await renderMarkdown('*emphasis* and **strong**')
    expect(html).to.equal('\n<p><em>emphasis</em> and <strong>strong</strong></p>\n')
  })

  it('allows basic HTML', async () => {
    const html = await renderMarkdown('<span class="test">This is a test.</span>')
    expect(html).to.equal('\n<p><span class="test">This is a test.</span></p>\n')
  })

  it('sanitizes dangerous HTML', async () => {
    const html = await renderMarkdown('<script>This is a test.</script>')
    expect(html).to.equal('')
  })

  it('allows divs', async () => {
    const html = await renderMarkdown('<div class="test">This is a test.</div>')
    expect(html).to.equal('\n<div class="test">This is a test.</div>\n')
  })

  it('allows blockquotes', async () => {
    const html = await renderMarkdown('<blockquote>This is a test.</blockquote>')
    expect(html).to.equal('\n<blockquote>This is a test.</blockquote>\n')
  })

  it('allows figures', async () => {
    const html = await renderMarkdown('<figure><figcaption>This is a test.</figcaption></figure>')
    expect(html).to.equal('\n<figure>\n  <figcaption>This is a test.</figcaption>\n</figure>\n')
  })

  it('allows asides', async () => {
    const html = await renderMarkdown('<aside>This is a test.</aside>')
    expect(html).to.equal('\n<aside>This is a test.</aside>\n')
  })

  it('allows sections', async () => {
    const html = await renderMarkdown('<section>This is a test.</section>')
    expect(html).to.equal('\n<section>This is a test.</section>\n')
  })

  it('allows headers', async () => {
    const html = await renderMarkdown('<header>This is a test.</header>')
    expect(html).to.equal('\n<header>This is a test.</header>\n')
  })

  it('allows footers', async () => {
    const html = await renderMarkdown('<footer>This is a test.</footer>')
    expect(html).to.equal('\n<footer>This is a test.</footer>\n')
  })

  it('adds ID\'s to headings', async () => {
    const html = await renderMarkdown('## Test Heading\n\nHello, world!')
    expect(html).to.equal('\n<h2 id="test-heading">Test Heading</h2>\n<p>Hello, world!</p>\n')
  })

  it('removes secrets you don\'t know', async () => {
    const html = await renderMarkdown('<p>Not secret.</p><p data-secret="secret"><em>Shhh!</em></p>', { secret: false })
    expect(html).to.equal('\n<p>Not secret.</p>\n')
  })

  it('shows secrets you know', async () => {
    const html = await renderMarkdown('<p>Not secret.</p><p data-secret="secret"><em>Shhh!</em></p>', { secret: true })
    expect(html).to.equal('\n<p>Not secret.</p>\n<p><em>Shhh!</em></p>\n')
  })
})
