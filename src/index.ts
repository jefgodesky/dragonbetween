import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import pb from './connect.js'
import clear from './logic/clear.js'
import renderText from './logic/renderers/text.js'

import addKnowledge from './middlewares/add-knowledge.js'
import browse from './middlewares/browse.js'
import getCharacters from './middlewares/get-characters.js'
import initViewInfo from './middlewares/init-view-info.js'

const thisdir = dirname(fileURLToPath(import.meta.url))
dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', join(thisdir, '../src/views'))

app.get('/', initViewInfo, getCharacters, (req: Request, res: Response) => {
  res.render('pages/home', req.viewInfo)
})

app.get('/login', initViewInfo, getCharacters, (req: Request, res: Response) => {
  res.render('pages/login', req.viewInfo)
})

app.get('/logout', (req: Request, res: Response) => {
  pb.authStore.clear()
  res.redirect(req.query.returnUrl as string ?? '/')
})

app.get('/lore', initViewInfo, getCharacters, addKnowledge, browse)

app.get('/lore/:slug', initViewInfo, getCharacters, addKnowledge, expressAsyncHandler(async (req: Request, res: Response) => {
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
  res.render('pages/lore', req.viewInfo)
}))

app.get('/categories', initViewInfo, getCharacters, addKnowledge, browse)

app.post('/login', expressAsyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body
  try {
    await pb.collection('users').authWithPassword(username, password)
  } catch (err) {
    console.error(err)
  }
  res.redirect(req.query.returnUrl as string ?? '/')
}))

app.post('/pov', expressAsyncHandler(async (req: Request, res: Response) => {
  const { pov, returnUrl } = req.body
  if (pb.authStore.isValid && pb.authStore.model !== null && (pov !== 'gm' || pb.authStore.model.gm === true)) {
    await pb.collection('users').update(pb.authStore.model.id, { pov })
  }
  res.redirect(returnUrl as string ?? '/')
}))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
