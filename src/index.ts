import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import pb from './connect.js'

import addKnowledge from './middlewares/add-knowledge.js'
import browse from './middlewares/browse.js'
import getCharacters from './middlewares/get-characters.js'
import loadCategory from './middlewares/load-category.js'
import loadLore from './middlewares/load-lore.js'
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

app.get('/lore/:slug', initViewInfo, getCharacters, addKnowledge, loadLore, (req: Request, res: Response) => {
  res.render('pages/lore', req.viewInfo)
})

app.get('/categories', initViewInfo, getCharacters, addKnowledge, browse)

app.get('/categories/:slug', initViewInfo, getCharacters, addKnowledge, loadCategory, (req: Request, res: Response) => {
  res.render('pages/category', req.viewInfo)
})

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
