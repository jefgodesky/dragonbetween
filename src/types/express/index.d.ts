import HeadInfo from '../head-info'

declare global {
  namespace Express {
    interface Request {
      headInfo?: HeadInfo
    }
  }
}
