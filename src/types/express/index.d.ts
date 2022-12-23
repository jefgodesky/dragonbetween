import Character from '../character.js'
import HeadInfo from '../head-info.js'

declare global {
  namespace Express {
    interface Request {
      characters?: Character[]
      headInfo?: HeadInfo
    }
  }
}
