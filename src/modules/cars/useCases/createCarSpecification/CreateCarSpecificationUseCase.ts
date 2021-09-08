import { AppError } from './../../../../shared/errors/AppError';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { inject } from "tsyringe"
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationRepository';

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
  //@inject('CarsRepository')
  private carsRepository: ICarsRepository,
  private specificationsrepository: ISpecificationsRepository
  ) {

  }

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if(!carExists) {
      throw new AppError('Car does not exists!')
    }

    const specifications = await this.specificationsrepository.findByIds(specifications_id)

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists)

    console.log(carExists)
  }
}

export { CreateCarSpecificationUseCase }