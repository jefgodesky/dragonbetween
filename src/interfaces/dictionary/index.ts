import NestedDictionary from "../nested-dictionary";

interface Dictionary {
  [key: string]: string
}

const isDictionary = (obj: any): obj is Dictionary => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  for (const key of Object.keys(obj)) if (typeof obj[key] !== 'string') return false
  return true
}

export default Dictionary
export { isDictionary }
