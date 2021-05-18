import { Router } from 'express'
import multer from 'multer'

import { createCategoryController } from '../src/modules/cars/useCases/createCategory'
import { importCategoryController } from '../src/modules/cars/useCases/importCategory'
import { listCategoriesController } from '../src/modules/cars/useCases/listCategorys'

const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp',
})

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res)
})

export { categoriesRoutes }
