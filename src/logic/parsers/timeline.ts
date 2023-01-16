import Timeline from '../../interfaces/timeline/index.js'
import parseKeyValPairs from './key-val-pairs.js'

const parseTimeline = (orig: string): Timeline[] => {
  const regex = /<timeline(.*?)\/>/i
  const instances = orig.match(new RegExp(regex.source, regex.flags + 'g'))
  if (instances === null) return []
  return instances.map(instance => {
    const tl: Timeline = { orig: instance }
    const elems = instance.match(regex)
    const attrs = elems === null || elems.length < 2 ? {} : parseKeyValPairs(elems[1] ?? '')
    const start = attrs.start === undefined ? NaN : parseInt(attrs.start)
    const end = attrs.end === undefined ? NaN : parseInt(attrs.end)
    if (attrs.tags !== undefined) tl.tags = attrs.tags.split(';').map(tag => tag.trim())
    if (!isNaN(start)) tl.start = start
    if (!isNaN(end)) tl.end = end
    return tl
  })
}

export default parseTimeline
