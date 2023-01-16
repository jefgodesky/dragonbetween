import Dictionary from '../../interfaces/dictionary/index.js'

const parseKeyValPairs = (str: string): Dictionary => {
  const data: Dictionary = {}
  const regex = /([a-zA-Z0-9]+?)="(.*?)"/
  const instances = str.match(new RegExp(regex.source, regex.flags + 'g'))
  if (instances === null) return data
  for (const instance of instances) {
    const elems = instance.match(regex)
    if (elems === null || elems.length < 3) continue
    const key: string = typeof elems[1] === 'string' ? elems[1] : 'unknown'
    data[key] = elems[2] ?? ''
  }
  return data
}

export default parseKeyValPairs
