import Knowledge from './index.js'
import getAllSecrets from './get-all-secrets.js'

export default async function getKnowledge (...known: string[]): Promise<Knowledge> {
  const all = await getAllSecrets()
  const knowledge: Knowledge = {}
  for (const key of all) {
    knowledge[key] = known.includes(key)
  }
  return knowledge
}
