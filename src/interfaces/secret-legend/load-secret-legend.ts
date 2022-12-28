import SecretLegend from './index.js'
import pb from '../../connect.js'

export default async function getAllSecrets (): Promise<SecretLegend> {
  const results = await pb.collection('secrets').getFullList(undefined, { sort: 'key' })
  const legend: SecretLegend = {}
  for (const result of results) {
    legend[result.key] = result.legend
  }
  return legend
}
