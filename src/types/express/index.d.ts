import Character from '../../interfaces/character/index.js'
import HeadInfo from '../../interfaces/head-info/index.js'

declare global {
  namespace Express {
    interface Request {
      viewInfo: {
        authenticated: boolean
        gm: boolean
        characters?: Character[]
        headInfo: HeadInfo
      }
    }
  }
}
