import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import pb from './connect.js'
import getDefaultHeadInfo from './types/head-info/get-default-head-info.js'

const thisdir = dirname(fileURLToPath(import.meta.url))
dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', join(thisdir, '../src/views'))

app.get('/', (req: Request, res: Response) => {
  const info = getDefaultHeadInfo()
  res.render('pages/home', info)
})

app.get('/login', (req: Request, res: Response) => {
  const info = getDefaultHeadInfo()
  res.render('pages/login', info)
})

app.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body
  await pb.collection('users').authWithPassword(username, password)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
