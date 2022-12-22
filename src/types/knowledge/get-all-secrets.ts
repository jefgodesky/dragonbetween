import pb from '../../connect.js'

export default async function getAllSecrets (): Promise<string[]> {
  const results = await pb.collection('secrets').getFullList(undefined, { sort: 'key' })
  return results.map(result => result.key)
}
