interface Knowledge {
  [key: string]: boolean
}

const isKnowledge = (obj: any): obj is Knowledge => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'boolean') return false
  }
  return true
}

export default Knowledge
export { isKnowledge }
