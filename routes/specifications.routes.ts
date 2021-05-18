import Router from 'express'

import { SpecificationsRepository } from '../src/modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateSpecificationUseCase } from '../src/modules/cars/useCases/createSpecification/CreateSpecificationUseCase'

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationUseCase(
    specificationsRepository
  )
  return res.status(201).send()
})
export { specificationsRoutes }
