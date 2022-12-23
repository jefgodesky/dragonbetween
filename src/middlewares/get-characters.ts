import { Request, Response, NextFunction } from 'express'
import expressAsyncHandler from 'express-async-handler'
import getCharacters from '../types/character/get-characters.js'

const getCharactersMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  req.characters = await getCharacters()
  next()
}

export default expressAsyncHandler(getCharactersMiddleware)
