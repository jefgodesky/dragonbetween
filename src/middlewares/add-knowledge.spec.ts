import { expect } from 'chai'
import * as sinon from 'sinon'
import { mockRequest, mockResponse } from 'mock-req-res'
import Knowledge, { isKnowledge } from '../interfaces/knowledge/index.js'
import getAllSecrets from '../interfaces/knowledge/get-all-secrets.js'
import addKnowledge from './add-knowledge.js'

describe('addKnowledge', () => {
  let mockReq = mockRequest()
  let mockRes = mockResponse()
  let mockNext = sinon.spy()

  beforeEach(async () => {
    mockReq = mockRequest()
    mockRes = mockResponse()
    mockNext = sinon.spy()

    const all = await getAllSecrets()
    const nothing: Knowledge = {}
    for (const key of all) { nothing[key] = false }
    const scores = { strength: 10, dexterity: 10, constitution: 10, intelligence: 10, wisdom: 10, charisma: 10 }
    mockReq.viewInfo = {
      authenticated: false,
      gm: false,
      pov: 'khorvairian',
      returnUrl: '/',
      characters: [
        Object.assign({}, scores, { id: 'khorvairian', name: 'Khorvairian', knowledge: Object.assign({}, nothing, { CommonKnowledgeKhorvaire: true }) }),
        Object.assign({}, scores, { id: 'sarlonan', name: 'Sarlonan', knowledge: Object.assign({}, nothing, { CommonKnowledgeSarlona: true }) })
      ],
      headInfo: {
        title: 'The Dragon Between',
        description: 'Welcome to Eberron.',
        url: 'http://localhost:3000/',
        image: '/test.jpg'
      }
    }
  })

  it('adds a character\'s knowledge', async () => {
    mockReq.viewInfo.authenticated = true
    mockReq.viewInfo.pov = 'khorvairian'
    await addKnowledge(mockReq, mockRes, mockNext)
    expect(isKnowledge(mockReq.knowledge)).to.equal(true)
    expect(mockReq.knowledge?.Dhakaan).to.equal(false)
    expect(mockReq.knowledge?.CommonKnowledgeSarlona).to.equal(false)
    expect(mockReq.knowledge?.CommonKnowledgeKhorvaire).to.equal(true)
    expect(mockReq.knowledge?.ThisIsNotActuallyARealSecretKey).to.equal(undefined)
    expect(mockNext.callCount).to.equal(1)
  })

  it('adds an outsider\'s knowledge', async () => {
    mockReq.viewInfo.pov = 'Outsider'
    await addKnowledge(mockReq, mockRes, mockNext)
    expect(isKnowledge(mockReq.knowledge)).to.equal(true)
    expect(mockReq.knowledge?.Dhakaan).to.equal(false)
    expect(mockReq.knowledge?.CommonKnowledgeSarlona).to.equal(false)
    expect(mockReq.knowledge?.CommonKnowledgeKhorvaire).to.equal(false)
    expect(mockReq.knowledge?.ThisIsNotActuallyARealSecretKey).to.equal(undefined)
    expect(mockNext.callCount).to.equal(1)
  })

  it('adds a game master\'s knowledge', async () => {
    mockReq.viewInfo.authenticated = true
    mockReq.viewInfo.gm = true
    mockReq.viewInfo.pov = 'gm'
    await addKnowledge(mockReq, mockRes, mockNext)
    expect(isKnowledge(mockReq.knowledge)).to.equal(true)
    expect(mockReq.knowledge?.Dhakaan).to.equal(true)
    expect(mockReq.knowledge?.CommonKnowledgeSarlona).to.equal(true)
    expect(mockReq.knowledge?.CommonKnowledgeKhorvaire).to.equal(true)
    expect(mockReq.knowledge?.ThisIsNotActuallyARealSecretKey).to.equal(undefined)
    expect(mockNext.callCount).to.equal(1)
  })
})
