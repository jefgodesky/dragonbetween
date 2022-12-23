interface Character {
  name: string
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

const isCharacter = (obj: any): obj is Character => {
  if (obj === null || Array.isArray(obj) || typeof obj !== 'object') return false
  const { name, strength, dexterity, constitution, intelligence, wisdom, charisma } = obj
  if (name === undefined || typeof name !== 'string') return false
  const scores = [strength, dexterity, constitution, intelligence, wisdom, charisma]
  return scores.reduce((acc: boolean, curr: boolean) => acc && curr !== undefined && typeof curr === 'number', true)
}

export default Character
export { isCharacter }
