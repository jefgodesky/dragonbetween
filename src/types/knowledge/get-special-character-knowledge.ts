import Knowledge from './index.js'
import getAllSecrets from './get-all-secrets.js'

export default async function getSpecialCharacterKnowledge (knows?: 'all' | 'nothing', secrets?: string[]): Promise<Knowledge> {
  const knowledge: Knowledge = {}
  const keys = secrets ?? await getAllSecrets()
  for (const key of keys) {
    knowledge[key] = knows === 'all'
  }
  return knowledge
}
