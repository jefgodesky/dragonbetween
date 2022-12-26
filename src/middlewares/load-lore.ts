import { Request, Response, NextFunction } from 'express'
import expressAsyncHandler from 'express-async-handler'
import pb from '../connect.js'
import clear from '../logic/clear.js'
import renderText from '../logic/renderers/text.js'

const loadLore = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const knowledge = req.knowledge ?? {}
  const topic = await pb.collection('lore_topics')
    .getFirstListItem(`slug = "${req.params.slug ?? ''}"`, { expand: 'lore_text(topic)' })
  const known = clear(knowledge, topic.secret === '' ? 'true' : topic.secret)
  const texts = topic.expand['lore_text(topic)'] === undefined
    ? []
    : topic.expand['lore_text(topic)']
      .sort((a: any, b: any) => a.priority - b.priority)
      .filter((text: any) => clear(knowledge, text.secret === '' ? 'true' : text.secret))
  const title = known ? topic.title : 'What&rsquo;s that?'
  const text = known && texts.length > 0 ? await renderText(texts[0].text, knowledge) : '<p>You&rsquo;ve never heard of such a thing.</p>'
  req.viewInfo.lore = { title, text }
  next()
}

export default expressAsyncHandler(loadLore)
