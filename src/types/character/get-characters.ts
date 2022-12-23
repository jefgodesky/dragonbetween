import Character from './index.js'
import pb from '../../connect.js'

export default async function getCharacters (): Promise<Array<Character>> {
  const { model, isValid } = pb.authStore
  const sort = 'name'
  const filter = `player = "${model?.id ?? ''}"`
  return isValid && model?.username === undefined
    ? await pb.collection('characters').getFullList<Character>(undefined, { sort })
    : await pb.collection('characters').getFullList<Character>(undefined, { sort, filter })
}
