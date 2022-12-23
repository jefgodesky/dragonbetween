import { expect } from 'chai'
import { isCharacter } from './index.js'

describe('isCharacter', () => {
  const name = 'Joe Average'
  const strength = 10
  const dexterity = 10
  const constitution = 10
  const intelligence = 10
  const wisdom = 10
  const charisma = 10

  it('rejects null', () => {
    expect(isCharacter(null)).to.equal(false)
  })

  it('rejects undefined', () => {
    expect(isCharacter(undefined)).to.equal(false)
  })

  it('rejects a function', () => {
    expect(isCharacter(() => {})).to.equal(false)
  })

  it('rejects true', () => {
    expect(isCharacter(true)).to.equal(false)
  })

  it('rejects false', () => {
    expect(isCharacter(false)).to.equal(false)
  })

  it('rejects a number', () => {
    expect(isCharacter(1)).to.equal(false)
  })

  it('rejects a string', () => {
    expect(isCharacter('Test')).to.equal(false)
  })

  it('rejects an empty array', () => {
    expect(isCharacter([])).to.equal(false)
  })

  it('rejects an empty object', () => {
    expect(isCharacter({})).to.equal(false)
  })

  it('accepts an object with all required fields', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(true)
  })

  it('rejects a character with null for a name', () => {
    const char = { name: null, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for a name', () => {
    const char = { name: undefined, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a function for a name', () => {
    const char = { name: () => {}, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with true for a name', () => {
    const char = { name: true, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with false for a name', () => {
    const char = { name: false, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a number for a name', () => {
    const char = { name: 24601, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an array for a name', () => {
    const char = { name: name.split(''), strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an object for a name', () => {
    const char = { name: { name }, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for a name', () => {
    const char = { name: undefined, strength, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with null for strength', () => {
    const char = { name, strength: null, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for strength', () => {
    const char = { name, strength: undefined, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a function for strength', () => {
    const char = { name, strength: () => {}, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with true for strength', () => {
    const char = { name, strength: true, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with false for strength', () => {
    const char = { name, strength: false, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a string for strength', () => {
    const char = { name, strength: '10', dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an array for strength', () => {
    const char = { name, strength: [10], dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an object for strength', () => {
    const char = { name, strength: { strength }, dexterity, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with null for dexterity', () => {
    const char = { name, strength, dexterity: null, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for dexterity', () => {
    const char = { name, strength, dexterity: undefined, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a function for dexterity', () => {
    const char = { name, strength, dexterity: () => {}, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with true for dexterity', () => {
    const char = { name, strength, dexterity: true, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with false for dexterity', () => {
    const char = { name, strength, dexterity: false, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a string for dexterity', () => {
    const char = { name, strength, dexterity: '10', constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an array for dexterity', () => {
    const char = { name, strength, dexterity: [10], constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an object for dexterity', () => {
    const char = { name, strength, dexterity: { dexterity }, constitution, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with null for constitution', () => {
    const char = { name, strength, dexterity, constitution: null, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for constitution', () => {
    const char = { name, strength, dexterity, constitution: undefined, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a function for constitution', () => {
    const char = { name, strength, dexterity, constitution: () => {}, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with true for constitution', () => {
    const char = { name, strength, dexterity, constitution: true, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with false for constitution', () => {
    const char = { name, strength, dexterity, constitution: false, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a string for constitution', () => {
    const char = { name, strength, dexterity, constitution: '10', intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an array for constitution', () => {
    const char = { name, strength, dexterity, constitution: [10], intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an object for constitution', () => {
    const char = { name, strength, dexterity, constitution: { constitution }, intelligence, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with null for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: null, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: undefined, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a function for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: () => {}, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with true for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: true, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with false for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: false, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a string for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: '10', wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an array for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: [10], wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an object for intelligence', () => {
    const char = { name, strength, dexterity, constitution, intelligence: { intelligence }, wisdom, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with null for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: null, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: undefined, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a function for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: () => {}, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with true for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: true, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with false for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: false, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a string for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: '10', charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an array for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: [10], charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an object for wisdom', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom: { wisdom }, charisma }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with null for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: null }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with undefined for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: undefined }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a function for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: () => {} }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with true for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: true }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with false for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: false }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with a string for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: '10' }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an array for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: [10] }
    expect(isCharacter(char)).to.equal(false)
  })

  it('rejects a character with an object for charisma', () => {
    const char = { name, strength, dexterity, constitution, intelligence, wisdom, charisma: { charisma } }
    expect(isCharacter(char)).to.equal(false)
  })
})
