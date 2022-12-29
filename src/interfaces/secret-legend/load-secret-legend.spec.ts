import { expect } from 'chai'
import SecretLegend from './index.js'
import loadSecretLegend, { identifyCategories, organizeLegends } from './load-secret-legend.js'

describe('identifyCategories', () => {
  it('identifies categories', () => {
    const actual = identifyCategories([
      { label: 'Khorvairian', legend: {}, path: ['Languages', 'Mortal languages', 'Khorvairian'] },
      { label: 'Riedran', legend: {}, path: ['Languages', 'Mortal languages', 'Riedran'] },
      { label: 'Planar concepts', legend: {}, path: ['Planes', 'Planar concepts'] }
    ]) as any
    expect(JSON.stringify(actual.Languages['Mortal languages'].Khorvairian)).to.equal('{}')
    expect(JSON.stringify(actual.Languages['Mortal languages'].Riedran)).to.equal('{}')
    expect(JSON.stringify(actual.Planes['Planar concepts'])).to.equal('{}')
  })
})

describe('organizeLegends', () => {
  it('organizes secret legends', () => {
    const categories = { Languages: { 'Mortal languages': { Khorvairian: {} } }, Planes: { 'Planar concepts': {} } }
    const legends: SecretLegend[] = [
      { legend: { 'KhorvairianFluency': 'Fluent in Khorvairian.' }, path: ['Languages', 'Mortal languages', 'Khorvairian'] },
      { legend: { 'PlanarConceptRisia': 'Risia is about preservation.' }, path: ['Planes', 'Planar concepts'] }
    ]
    const actual = organizeLegends(legends, categories) as any
    expect(actual[0].label).to.equal('Languages')
    expect(actual[0].children[0].label).to.equal('Mortal languages')
    expect(actual[0].children[0].children[0].label).to.equal('Khorvairian')
    expect(actual[0].children[0].children[0].legend.KhorvairianFluency).to.equal('Fluent in Khorvairian.')
    expect(actual[1].label).to.equal('Planes')
    expect(actual[1].children[0].label).to.equal('Planar concepts')
    expect(actual[1].children[0].legend.PlanarConceptRisia).to.equal('Risia is about preservation.')
  })
})

describe('loadSecretLegend', () => {
  it('loads and organizes secret legends from the database', async () => {
    const actual = await loadSecretLegend() as any
    const labels = actual.map((cat: SecretLegend) => cat.label)
    expect(labels).to.include('Languages')
    expect(labels).to.include('Common knowledge')
    expect(labels).to.include('Creatures')
  })
})
