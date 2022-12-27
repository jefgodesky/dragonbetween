import Knowledge from '../interfaces/knowledge/index.js'
import { evaluate } from '@bluemarblepayroll/logicality'

export default function clear (knowledge: Knowledge, secret?: string): boolean {
  return evaluate(secret === undefined || secret === '' ? 'true' : secret, knowledge)
}
