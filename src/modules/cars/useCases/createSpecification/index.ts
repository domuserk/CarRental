import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'
import { CreateEspecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

const specificationsRepository = new SpecificationsRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
)

const createSpecificationController = new CreateEspecificationController(
  createSpecificationUseCase
)

export { createSpecificationController }
