import Dictionary, { isDictionary } from '../dictionary/index.js'

interface SecretLegend {
  label?: string
  path?: string[]
  legend: Dictionary
  children?: SecretLegend[]
}

const isSecretLegend = (obj: any): obj is SecretLegend => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  const { label, legend, children } = obj
  if (obj.path === null) return false
  const path = obj.path ?? []
  if (label !== undefined && typeof label !== 'string') return false
  if (!Array.isArray(path)) return false
  for (const elem of path) { if (typeof elem !== 'string') return false }
  if (!isDictionary(legend)) return false
  if (children === undefined) return true
  if (!Array.isArray(children)) return false
  for (const child of children) { if (!isSecretLegend(child)) return false }
  return true
}

export default SecretLegend
export { isSecretLegend }
