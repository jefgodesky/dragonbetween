import { Request, Response, NextFunction } from 'express'
import expressAsyncHandler from 'express-async-handler'
import pb from '../connect.js'
import clear from '../logic/clear.js'
import renderText from '../logic/renderers/text.js'

const loadLore = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const knowledge = req.knowledge ?? {}
  const textKey = 'lore_text(topic)'
  const mainKey = 'categories(main)'
  const catKey = 'categorization(topic)'
  const expand = [textKey, mainKey, `${catKey}.category`].join(',')

  const topic = await pb.collection('lore_topics')
    .getFirstListItem(`slug = "${req.params.slug ?? ''}"`, { expand })
  const textExpansion = topic.expand[textKey] === undefined ? [] : topic.expand[textKey]
  const mainExpansion = topic.expand[mainKey] === undefined ? [] : topic.expand[mainKey]
  const catExpansion = topic.expand[catKey] === undefined ? [] : topic.expand[catKey]

  const known = clear(knowledge, topic.secret === '' ? 'true' : topic.secret)
  const texts = textExpansion
    .sort((a: any, b: any) => a.priority - b.priority)
    .filter((text: any) => clear(knowledge, text.secret === '' ? 'true' : text.secret))
  const title = known ? topic.title : 'What&rsquo;s that?'
  const text = known && texts.length > 0
    ? await renderText(texts[0].text, knowledge)
    : '<p>You&rsquo;ve never heard of such a thing.</p>'
  const categories = [
    ...mainExpansion.map((cat: any) => ({ slug: cat.slug, label: cat.name })),
    ...catExpansion.map((cat: any) => cat.expand.category).map((cat: any) => ({ slug: cat.slug, label: cat.name }))
  ]
  req.viewInfo.lore = { title, text, categories }
  next()
}

export default expressAsyncHandler(loadLore)
