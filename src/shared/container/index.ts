import { IRentalsRepository } from '@modules/rentals/repositories/IRentalRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { container } from 'tsyringe'
import "@shared/container/providers"

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationRepository'
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { ICarsImagesRepository } from '@modules/cars/repositories/in-memory/ICarsImagesRepository';
import { CarsImageRepository } from '@modules/cars/infra/typeorm/repositories/CarsImagesRepository';
import { RentalsRepository } from '@modules/rentals/infra/typeorm/repositories/RentalsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ICarsRepository>(
  'CarsRepository',
  CarsRepository
)

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
   CarsImageRepository
)

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
   RentalsRepository
)