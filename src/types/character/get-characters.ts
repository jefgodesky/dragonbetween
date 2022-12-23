import Character from './index.js'
import pb from '../../connect.js'

export default async function getCharacters (): Promise<Character[]> {
  const { model, isValid } = pb.authStore
  const sort = 'name'
  const filter = `player = "${model?.id ?? ''}"`
  const records = isValid && model?.username === undefined
    ? await pb.collection('characters').getFullList(undefined, { sort })
    : await pb.collection('characters').getFullList(undefined, { sort, filter })
  console.log(records)
  return []
}
