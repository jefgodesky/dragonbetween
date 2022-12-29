import { Request, Response, NextFunction } from 'express'

export default function getCharacter (req: Request, res: Response, next: NextFunction): void {
  const longlist = req.viewInfo.characters === undefined ? [] : req.viewInfo.characters
  const shortlist = longlist.filter(char => char.slug === req.params.slug)
  req.viewInfo.character = shortlist.length > 0 ? shortlist[0] : undefined
  next()
}
