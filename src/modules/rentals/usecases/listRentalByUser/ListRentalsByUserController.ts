import { container } from 'tsyringe';
import { Response, Request } from 'express';
import { ListRentalsByUserUseCase } from './ListRentalsByUserUseCase';

 class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.user;
  
      const listRentalsByUserUseCase = container.resolve(ListRentalsByUserUseCase)
      
      const rentals = await listRentalsByUserUseCase.execute(id)
  
     return response.json(rentals)
  }
}

export { ListRentalsByUserController  }