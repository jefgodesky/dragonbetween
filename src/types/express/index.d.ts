import Character from '../../interfaces/character/index.js'
import HeadInfo from '../../interfaces/head-info/index.js'
import Knowledge from '../../interfaces/knowledge/index.js'
import Link from '../../interfaces/link/index.js'

declare global {
  namespace Express {
    interface Request {
      knowledge?: Knowledge
      viewInfo: {
        authenticated: boolean
        gm: boolean
        pov: string
        returnUrl: string
        characters?: Character[]
        headInfo: HeadInfo
        browse?: Array<{ url: string, label: string }>
        lore?: {
          title: string
          text: string
          categories: Link[]
        },
        category?: {
          title: string
          description?: string
          main?: Link
          categories: Link[]
          subcategories: Link[]
          lore: Link[]
        }
      }
    }
  }
}
