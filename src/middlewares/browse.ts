import { Request, Response, NextFunction } from 'express'
import expressAsyncHandler from 'express-async-handler'
import pb from '../connect.js'
import clear from '../logic/clear.js'

const browse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const roots = await pb.collection('categories').getFullList(undefined, { expand: 'category_categories(child)' })
  req.viewInfo.browse = roots
    .filter(cat => JSON.stringify(cat.expand) === '{}')
    .filter(cat => clear(req.knowledge ?? {}, cat.secret))
    .map(cat => ({ url: `/categories/${cat.slug as string ?? ''}`, label: cat.name }))
  res.render('pages/browse', req.viewInfo)
}

export default expressAsyncHandler(browse)
