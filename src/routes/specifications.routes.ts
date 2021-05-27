import Router from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate'

import { CreateEspecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const specificationsRoutes = Router()

const createSpecificationController = new CreateEspecificationController()
specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post('/', createSpecificationController.handle)

export { specificationsRoutes }
