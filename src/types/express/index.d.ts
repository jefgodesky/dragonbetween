import Character from '../../interfaces/character/index.js'
import HeadInfo from '../../interfaces/head-info/index.js'

declare global {
  namespace Express {
    interface Request {
      characters?: Character[]
      headInfo?: HeadInfo
    }
  }
}
