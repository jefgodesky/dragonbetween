import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import pb from './connect.js'
import getCharacters from './middlewares/get-characters.js'
import getHeadInfo from './middlewares/get-head-info.js'

const thisdir = dirname(fileURLToPath(import.meta.url))
dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', join(thisdir, '../src/views'))

app.get('/', getCharacters, getHeadInfo, (req: Request, res: Response) => {
  res.render('pages/home', req.headInfo)
})

app.get('/login', getCharacters, getHeadInfo, (req: Request, res: Response) => {
  res.render('pages/login', req.headInfo)
})

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
