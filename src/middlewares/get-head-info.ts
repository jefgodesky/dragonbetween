import { Request, Response, NextFunction } from 'express'

export default function getHeadInfo (req: Request, res: Response, next: NextFunction): void {
  const title = 'The Dragon Between'
  const description = 'Welcome to Eberron.'
  const url = req.originalUrl
  const image = 'https://dragonbetween.net/admin/api/files/vk7l0capdm862rn/25theoshrebup0r/social_2wlXVD4cnK.jpg'
  req.headInfo = { title, description, url, image }
  next()
}
