import { Request, Response, NextFunction } from 'express'
import expressAsyncHandler from 'express-async-handler'
import pb from '../connect.js'
import clear from '../logic/clear.js'
import renderText from '../logic/renderers/text.js'

const loadCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const knowledge = req.knowledge ?? {}
  const mainKey = 'main'
  const membersKey = 'lore_categories(category)'
  const parentsKey = 'category_categories(child)'
  const childrenKey = 'category_categories(parent)'
  const expand = [mainKey, `${membersKey}.topic`, `${parentsKey}.parent`, `${childrenKey}.child`].join(',')

  const category = await pb.collection('categories')
    .getFirstListItem(`slug = "${req.params.slug ?? ''}"`, { expand })
  const mainExpansion = category.expand[mainKey] === undefined || Array.isArray(category.expand[mainKey]) ? undefined : category.expand[mainKey]
  const membersExpansion = category.expand[membersKey] === undefined ? [] : category.expand[membersKey]
  const parentsExpansion = category.expand[parentsKey] === undefined ? [] : category.expand[parentsKey]
  const childrenExpansion = category.expand[childrenKey] === undefined ? [] : category.expand[childrenKey]

  const known = clear(knowledge, category.secret === '' ? 'true' : category.secret)
  const title = known ? category.name : 'What&rsquo;s that?'
  const description = known && category.description !== undefined && category.description.length > 0
    ? await renderText(category.description, knowledge)
    : undefined
  const main = known && mainExpansion !== undefined ? { slug: mainExpansion.slug, label: mainExpansion.title } : undefined
  const subcategories = childrenExpansion
    .filter((category: any) => clear(knowledge, category.secret))
    .map((category: any) => category.expand.child)
    .filter((category: any) => clear(knowledge, category.secret))
    .map((category: any) => ({ slug: category.slug, label: category.name }))
  const lore = membersExpansion
    .filter((lore: any) => clear(knowledge, lore.secret))
    .map((lore: any) => lore.expand.topic)
    .filter((lore: any) => clear(knowledge, lore.secret))
    .map((lore: any) => ({ slug: lore.slug, label: lore.title }))
  const categories = parentsExpansion
    .filter((category: any) => clear(knowledge, category.secret))
    .map((category: any) => category.expand.parent)
    .filter((category: any) => clear(knowledge, category.secret))
    .map((category: any) => ({ slug: category.slug, label: category.name }))
  req.viewInfo.category = { title, description, main, categories, subcategories, lore }
  next()
}

export default expressAsyncHandler(loadCategory)
