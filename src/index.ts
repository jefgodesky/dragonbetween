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
import getCharacter from './middlewares/get-character.js'
import getSecretLegend from './middlewares/get-secret-legend.js'
import loadCategory from './middlewares/load-category.js'
import loadLore from './middlewares/load-lore.js'
import initViewInfo from './middlewares/init-view-info.js'

import calculateModifier from './views/helpers/calculate-modifier.js'

const thisdir = dirname(fileURLToPath(import.meta.url))
dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', join(thisdir, '../src/views'))
app.locals.calculateModifier = calculateModifier

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

app.get('/characters', initViewInfo, getCharacters, (req: Request, res: Response) => {
  res.render('pages/characters', req.viewInfo)
})

app.get('/characters/:slug', initViewInfo, getCharacters, getCharacter, getSecretLegend, (req: Request, res: Response) => {
  res.render('pages/character', req.viewInfo)
})

app.post('/characters/:slug', initViewInfo, getCharacters, getCharacter, expressAsyncHandler(async (req: Request, res: Response) => {
  const character = req.viewInfo.character?.id
  if (character !== undefined) {
    // Clear out old knowledge records
    const existing = await pb.collection('knowledge').getFullList(undefined, { character })
    for (const record of existing) await pb.collection('knowledge').delete(record.id)

    // Create new knowledge records
    const keys = Object.keys(req.body)
    for (const key of keys) {
      const secret = await pb.collection('secrets').getFirstListItem(`key = "${key}"`)
      if (secret?.id !== undefined) await pb.collection('knowledge').create({ character, secret: secret.id })
    }
  }
  res.redirect(`/characters/${req.params.slug}`)
}))

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
