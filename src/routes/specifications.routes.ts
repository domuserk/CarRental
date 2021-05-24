import Router from 'express'

import { CreateEspecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const specificationsRoutes = Router()

const createSpecificationController = new CreateEspecificationController()

specificationsRoutes.post('/', createSpecificationController.handle)

export { specificationsRoutes }
