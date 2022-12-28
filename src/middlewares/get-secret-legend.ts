import { Request, Response, NextFunction } from 'express'
import expressAsyncHandler from 'express-async-handler'
import loadSecretLegend from '../interfaces/secret-legend/load-secret-legend.js'

const getSecetLegend = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  req.viewInfo.secrets = await loadSecretLegend()
  next()
}

export default expressAsyncHandler(getSecetLegend)
