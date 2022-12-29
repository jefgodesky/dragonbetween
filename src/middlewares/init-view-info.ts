import { Request, Response, NextFunction } from 'express'
import pb from '../connect.js'

export default function initViewInfo (req: Request, res: Response, next: NextFunction): void {
  const { protocol, originalUrl } = req
  const host = req.get('host')
  const authenticated = pb.authStore.isValid
  const gm = authenticated && pb.authStore.model?.gm === true
  const pov = pb.authStore.model?.pov ?? 'Outsider'
  const returnUrl = typeof req.query.returnUrl === 'string' ? req.query.returnUrl : originalUrl
  const title = 'The Dragon Between'
  const description = 'Welcome to Eberron.'
  const url = `${protocol}://${host ?? 'localhost:3000'}${originalUrl}`
  const image = 'https://dragonbetween.net/admin/api/files/vk7l0capdm862rn/25theoshrebup0r/social_2wlXVD4cnK.jpg'

  const headInfo = { title, description, url, image }
  req.viewInfo = { authenticated, gm, pov, returnUrl, headInfo }
  next()
}
