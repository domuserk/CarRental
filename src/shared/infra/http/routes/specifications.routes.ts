import Router from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate'
import { CreateEspecificationController } from '../../../../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ensureAdmin } from '../middlewares/ensureAdmin'

const specificationsRoutes = Router()

const createSpecificationController = new CreateEspecificationController()

specificationsRoutes.post('/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
)

export { specificationsRoutes }
