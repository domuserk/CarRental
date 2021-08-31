import { resolve } from 'path';
import { Response, Request } from 'express';
import { CreateCarUseCase } from './CreateCarUseCase';
import { container } from 'tsyringe';
class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { 
      name, 
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand, 
      category_id
    } =  request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase)

    const car =  await createCarUseCase.execute({
      name, 
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand, 
      category_id
    })

    return response.status(201).json(car)
  }
}

export { CreateCarController }