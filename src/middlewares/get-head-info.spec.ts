import { expect } from 'chai'
import * as sinon from 'sinon'
import { mockRequest, mockResponse } from 'mock-req-res'
import { isHeadInfo } from '../interfaces/head-info/index.js'
import getHeadInfo from './get-head-info.js'

describe('getHeadInfo', () => {
  let mockReq = mockRequest()
  let mockRes = mockResponse()
  let mockNext = sinon.spy()
  const testURL = 'https://dragonbetween.net/test'

  beforeEach(() => {
    mockReq = mockRequest()
    mockRes = mockResponse()
    mockNext = sinon.spy()
    mockReq.originalUrl = testURL
  })

  it('sets default head info', () => {
    getHeadInfo(mockReq, mockRes, mockNext)
    expect(isHeadInfo(mockReq.headInfo)).to.equal(true)
    expect(mockReq.headInfo?.title).to.equal('The Dragon Between')
    expect(mockReq.headInfo?.description).to.equal('Welcome to Eberron.')
    expect(mockReq.headInfo?.url).to.equal(testURL)
    expect(mockReq.headInfo?.image).to.equal('https://dragonbetween.net/admin/api/files/vk7l0capdm862rn/25theoshrebup0r/social_2wlXVD4cnK.jpg')
    expect(mockNext.callCount).to.equal(1)
  })
})
