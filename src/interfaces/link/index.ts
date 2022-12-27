interface Link {
  slug: string
  label: string
}

const isLink = (obj: any): obj is Link => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  const strings = [obj.slug, obj.label]
  return strings.reduce((acc: boolean, curr) => acc && curr !== undefined && typeof curr === 'string', true)
}

export default Link
export { isLink }
