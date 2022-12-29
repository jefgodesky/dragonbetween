import Dictionary, { isDictionary } from '../dictionary/index.js'

interface NestedDictionary {
  [key: string]: NestedDictionary | Dictionary
}

const isNestedDictionary = (obj: any): obj is NestedDictionary => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  for (const key of Object.keys(obj)) {
    if (!isNestedDictionary(obj[key]) && !isDictionary(obj[key])) return false
  }
  return true
}

export default NestedDictionary
export { isNestedDictionary }
