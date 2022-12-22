interface HeadInfo {
  title?: string
  description?: string
  url?: string
  image?: string
}

const isHeadInfo = (obj: any): obj is HeadInfo => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  const { title, description, url, image } = obj
  const arr = [title, description, url, image]
  for (const elem of arr) {
    if (elem !== undefined && typeof elem !== 'string') return false
  }
  return true
}

export default HeadInfo
export { isHeadInfo }
