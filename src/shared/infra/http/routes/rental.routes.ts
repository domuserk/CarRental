import { CreateRentalController } from '@modules/rentals/usecases/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/usecases/devolutionRental/DevolutionRentalController';
import { ListRentalsByUserController } from '@modules/rentals/usecases/listRentalByUser/ListRentalsByUserController';
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController()

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle)
rentalRoutes.post('/devolution/:id', ensureAuthenticated, devolutionRentalController.handle)
rentalRoutes.get('/user', ensureAuthenticated, listRentalsByUserController.handle)

export { rentalRoutes }