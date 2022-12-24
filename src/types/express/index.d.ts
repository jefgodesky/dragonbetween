import Character from '../../interfaces/character/index.js'
import HeadInfo from '../../interfaces/head-info/index.js'
import Knowledge from '../../interfaces/knowledge/index.js'

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
      }
    }
  }
}
