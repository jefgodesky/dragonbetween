import SqlString from 'sqlstring'
import Timeline from './index.js'
const createTimelineFilter = (timeline: Timeline): string => {
  const { tags, start, end } = timeline
  const clauses: string[] = []

  if (tags !== undefined && tags.length > 0) {
    const tagClauses = tags.map(tag => `topics ~ ${SqlString.escape(tag)}`)
    clauses.push(`(${tagClauses.join(' || ')})`)
  }

  if (start !== undefined) clauses.push(`yk >= ${start}`)
  if (end !== undefined) clauses.push(`yk <= ${end}`)

  return clauses.join(' && ')
}

export default createTimelineFilter
