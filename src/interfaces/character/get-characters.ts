import { Record } from 'pocketbase'
import slugify from 'slugify'
import Character from './index.js'
import getKnowledge from '../knowledge/get-knowledge.js'
import pb from '../../connect.js'

export default async function getCharacters (): Promise<Character[]> {
  const { model, isValid } = pb.authStore
  const sort = 'name'
  const filter = `player = "${model?.id ?? ''}"`
  const expand = 'knowledge(character).secret'
  const records = isValid && model?.gm === true
    ? await pb.collection('characters').getFullList(undefined, { sort, expand })
    : await pb.collection('characters').getFullList(undefined, { filter, sort, expand })
  const characters: Character[] = []
  for (const record of records) {
    const knowledgeRecords = record.expand['knowledge(character)']
    const secrets = knowledgeRecords === undefined ? [] : knowledgeRecords.map((record: Record) => record.expand.secret).map((record: Record) => record.key)
    const knowledge = await getKnowledge(...secrets)
    const { id, name, strength, dexterity, constitution, intelligence, wisdom, charisma } = record
    const slug = slugify(name).toLowerCase()
    characters.push({ id, name, slug, knowledge, strength, dexterity, constitution, intelligence, wisdom, charisma })
  }
  return characters
}
