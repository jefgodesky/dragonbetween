import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

const thisdir = dirname(fileURLToPath(import.meta.url))
dotenv.config()

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', join(thisdir, '../src/views'))

app.get('/', (req: Request, res: Response) => {
  const title = 'The Dragon Between'
  const description = 'Welcome to Eberron.'
  const url = 'https://dragonbetween.net'
  const image = '/images/social.jpg'
  res.render('pages/home', {
    title,
    description,
    twitter: { title, description, image },
    og: { title, description, image, url }
  })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
