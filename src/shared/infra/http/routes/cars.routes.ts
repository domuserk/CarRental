import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload';
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ListAvaliableCarsController } from '@modules/cars/useCases/listAvaliableCars/ListAvaliableCarsController'
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCar/CreateCarSpecificationController'
import { UploadCarImagesController } from '@modules/cars/useCases/uploadCarImage/UploadCarImagesController'

const carsRoutes = Router()

let createCarController = new CreateCarController()
let listAvaliableCarsController = new ListAvaliableCarsController()
let createCarSpecificationController = new CreateCarSpecificationController();
let uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload('./tmp/cars'))

carsRoutes.post('/', 
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
)

carsRoutes.get('/avaliable', listAvaliableCarsController.handle )

carsRoutes.post('/specifications/:id',
  ensureAuthenticated, 
  ensureAdmin, 
  createCarSpecificationController.handle
)

carsRoutes.post('/images/:id', 
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarImagesController.handle 
)

export { carsRoutes }