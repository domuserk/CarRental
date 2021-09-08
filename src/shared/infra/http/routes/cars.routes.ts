import { Router } from 'express'
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ListAvaliableCarsController } from '@modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController'

const carsRoutes = Router()

let createCarController = new CreateCarController()
let listAvaliableCarsController = new ListAvaliableCarsController()

carsRoutes.post('/', 
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
)

carsRoutes.get('/avaliable', listAvaliableCarsController.handle )

export { carsRoutes }