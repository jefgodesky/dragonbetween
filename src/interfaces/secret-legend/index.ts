interface SecretLegend {
  [key: string]: string
}

const isSecretLegend = (obj: any): obj is SecretLegend => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'string') return false
  }
  return true
}

export default SecretLegend
export { isSecretLegend }
