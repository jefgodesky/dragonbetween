import { Request, Response, NextFunction } from 'express'
import expressAsyncHandler from 'express-async-handler'
import getSpecialCharacterKnowledge from '../interfaces/knowledge/get-special-character-knowledge.js'

const addKnowledge = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { pov, characters } = req.viewInfo
  const matches = characters === undefined ? [] : characters.filter(char => char.id === pov)
  if (matches[0] !== undefined) {
    req.knowledge = matches[0].knowledge
  } else if (pov === 'gm') {
    req.knowledge = await getSpecialCharacterKnowledge('all')
  } else {
    req.knowledge = await getSpecialCharacterKnowledge()
  }
  next()
}

export default expressAsyncHandler(addKnowledge)
