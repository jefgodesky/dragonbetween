import { expect } from 'chai'
import getDefaultHeadInfo from './get-default-head-info.js'

describe('getDefaultHeadInfo', () => {
  it('returns default head info', () => {
    const info = getDefaultHeadInfo()
    expect(JSON.stringify(info)).to.equal('{"title":"The Dragon Between","description":"Welcome to Eberron.","url":"https://dragonbetween.net","image":"https://dragonbetween.net/admin/api/files/vk7l0capdm862rn/25theoshrebup0r/social_2wlXVD4cnK.jpg"}')
  })
})
