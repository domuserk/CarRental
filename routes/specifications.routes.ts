import Router from 'express'

import { SpecificationsRepository } from '../src/modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../src/modules/cars/services/CreateSpecificationService'

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  )
  return res.status(201).send()
})
export { specificationsRoutes }
