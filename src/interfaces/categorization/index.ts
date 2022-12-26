interface Categorization {
  slug: string
  label: string
}

const isCategorization = (obj: any): obj is Categorization => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  const strings = [obj.slug, obj.label]
  return strings.reduce((acc: boolean, curr) => acc && curr !== undefined && typeof curr === 'string', true)
}

export default Categorization
export { isCategorization }
