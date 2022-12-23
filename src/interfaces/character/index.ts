import Knowledge, { isKnowledge } from '../knowledge/index.js'

interface Character {
  name: string
  knowledge: Knowledge
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

const isCharacter = (obj: any): obj is Character => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  const { name, knowledge, strength, dexterity, constitution, intelligence, wisdom, charisma } = obj
  if (name === undefined || typeof name !== 'string') return false
  if (!isKnowledge(knowledge)) return false
  const scores = [strength, dexterity, constitution, intelligence, wisdom, charisma]
  return scores.reduce((acc: boolean, curr: boolean) => acc && curr !== undefined && typeof curr === 'number', true)
}

export default Character
export { isCharacter }
