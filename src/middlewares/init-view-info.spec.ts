import { expect } from 'chai'
import * as sinon from 'sinon'
import { mockRequest, mockResponse } from 'mock-req-res'
import { isHeadInfo } from '../interfaces/head-info/index.js'
import initViewInfo from './init-view-info.js'

describe('initViewInfo', () => {
  let mockReq = mockRequest()
  let mockRes = mockResponse()
  let mockNext = sinon.spy()

  beforeEach(() => {
    mockReq = mockRequest()
    mockRes = mockResponse()
    mockNext = sinon.spy()
    mockReq.originalUrl = '/test'
  })

  it('sets view info', () => {
    initViewInfo(mockReq, mockRes, mockNext)
    expect(mockReq.viewInfo.authenticated).to.equal(false)
    expect(mockReq.viewInfo.gm).to.equal(false)
    expect(mockReq.viewInfo.pov).to.equal('Outsider')
    expect(isHeadInfo(mockReq.viewInfo.headInfo)).to.equal(true)
    expect(mockReq.viewInfo.headInfo?.title).to.equal('The Dragon Between')
    expect(mockReq.viewInfo.headInfo?.description).to.equal('Welcome to Eberron.')
    expect(mockReq.viewInfo.headInfo?.url).to.equal('https://localhost:3000/test')
    expect(mockReq.viewInfo.headInfo?.image).to.equal('https://dragonbetween.net/admin/api/files/vk7l0capdm862rn/25theoshrebup0r/social_2wlXVD4cnK.jpg')
    expect(mockNext.callCount).to.equal(1)
  })

  it('sets return URL from query if provided', () => {
    const returnUrl = '/test'
    mockReq.query = { returnUrl }
    initViewInfo(mockReq, mockRes, mockNext)
    expect(mockReq.viewInfo.returnUrl).to.equal(returnUrl)
  })
})
