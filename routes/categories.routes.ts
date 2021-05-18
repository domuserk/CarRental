import { Router } from 'express'

import { createCategoryController } from '../src/modules/cars/useCases/createCategory'
import { listCategoriesController } from '../src/modules/cars/useCases/listCategorys'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

export { categoriesRoutes }
