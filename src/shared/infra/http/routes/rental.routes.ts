import { CreateRentalController } from '@modules/rentals/usecases/CreateRentalController';
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController()

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle)

export { rentalRoutes }