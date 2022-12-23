import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import pb from './connect.js'
import getDefaultHeadInfo from './types/head-info/get-default-head-info.js'
import selectAuthUrlFromMethods from './logic/selectors/auth-url-from-methods.js'
import getCharacters from './middlewares/get-characters.js'

const thisdir = dirname(fileURLToPath(import.meta.url))
dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', join(thisdir, '../src/views'))

app.get('/', getCharacters, (req: Request, res: Response) => {
  const info = getDefaultHeadInfo()
  res.render('pages/home', info)
})

app.get('/login', getCharacters, expressAsyncHandler(async (req: Request, res: Response) => {
  const info = getDefaultHeadInfo()
  const authMethods = await pb.collection('users').listAuthMethods()
  res.render('pages/login', Object.assign({}, info, {
    google: selectAuthUrlFromMethods(authMethods, 'google'),
    discord: selectAuthUrlFromMethods(authMethods, 'discord')
  }))
}))

app.get('/logout', (req: Request, res: Response) => {
  pb.authStore.clear()
  res.redirect('/login')
})

app.post('/login', expressAsyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body
  try {
    await pb.collection('users').authWithPassword(username, password)
  } catch (err: any) {
    if (err.status === 400) {
      try {
        await pb.admins.authWithPassword(username, password)
      } catch (err) {
        console.error(err)
      }
    }
  }
  res.redirect('/')
}))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
