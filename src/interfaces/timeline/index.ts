interface Timeline {
  orig: string
  tags?: string[]
  start?: number
  end?: number
  filter?: string
}

const isTimeline = (obj: any): obj is Timeline => {
  if (obj === null) return false
  if (typeof obj !== 'object') return false
  const { orig, tags, start, end, filter } = obj
  if (typeof orig !== 'string') return false
  if (tags !== undefined) {
    if (!Array.isArray(tags)) return false
    for (const tag of tags) { if (typeof tag !== 'string') return false }
  }
  if (start !== undefined && typeof start !== 'number') return false
  if (end !== undefined && typeof end !== 'number') return false
  if (filter !== undefined && typeof filter !== 'string') return false
  return true
}

export default Timeline
export { isTimeline }
