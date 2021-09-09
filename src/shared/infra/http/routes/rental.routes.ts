import { CreateRentalController } from '@modules/rentals/usecases/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/usecases/devolutionRental/DevolutionRentalController';
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle)
rentalRoutes.post('/devolution/:id', ensureAuthenticated, devolutionRentalController.handle)

export { rentalRoutes }