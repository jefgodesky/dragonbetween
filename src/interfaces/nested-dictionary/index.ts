interface NestedDictionary {
  [key: string]: NestedDictionary
}

const isNestedDictionary = (obj: any): obj is NestedDictionary => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  for (const key of Object.keys(obj)) if (!isNestedDictionary(obj[key])) return false
  return true
}

export default NestedDictionary
export { isNestedDictionary }
