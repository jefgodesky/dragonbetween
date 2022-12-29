import SecretLegend from './index.js'
import Dictionary from '../dictionary/index.js'
import NestedDictionary from '../nested-dictionary/index.js'
import pb from '../../connect.js'

const identifyCategories = (legends: SecretLegend[]): NestedDictionary => {
  const categories: NestedDictionary = {}
  for (const legend of legends) {
    let index = categories
    if (legend.path === undefined) continue
    for (const item of legend.path) {
      if (index[item] === undefined) index[item] = {}
      index = index[item] as NestedDictionary
    }
  }
  return categories
}

const organizeLegends = (legends: SecretLegend[], category: NestedDictionary, path: string[] = []): SecretLegend[] => {
  return Object.keys(category).map(key => {
    let legend: Dictionary = {}
    for (const record of legends) {
      if ((record.path ?? []).join(' ') === [...path, key].join(' ')) legend = Object.assign(legend, record.legend)
    }
    return {
      label: key,
      legend,
      children: organizeLegends(legends, category[key] as NestedDictionary, [...path, key])
    }
  })
}

export default async function loadSecretLegend (): Promise<SecretLegend[]> {
  const results = await pb.collection('secrets').getFullList(undefined, { sort: 'key' })
  const flat = results.map(result => {
    const path = result.category.split('/').map((el: string) => el.trim())
    const legend: { [key: string]: string } = {}
    legend[result.key] = result.legend
    return { path, legend }
  })
  return organizeLegends(flat, identifyCategories(flat))
}

export { identifyCategories, organizeLegends }
