import { AppError } from './../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"
import { SpecificationRepositoryInMemory } from '@modules/cars/infra/typeorm/repositories/SpecificationRepositoryInMemory';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create Car Specification', () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    specificationsRepositoryInMemory =  new SpecificationRepositoryInMemory()
    createCarSpecificationUseCase =  new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    )
  })

  it('should be able o add a new specification to a now existent car', async () => {
    expect(async () => {
      const car_id = '1234'
      const specifications_id = ['12345']
  
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id
      });
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should be able o add a new specification to the car', async () => {

    const car = await carsRepositoryInMemory.create({
      name: "Name Car", 
      description: "Description Car",
      daily_rate: 110.00,
      license_plate: "ABC-1234",
      fine_amount: 40,
      brand: "Brand", 
      category_id : "category"
    })

    const specification = await specificationsRepositoryInMemory.create({
      description: 'test',
      name: 'test'
    })

    const specifications_id = [specification.id]

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id
    });

    expect(specificationsCars).toHaveProperty('specifications')
    expect(specificationsCars.specifications.length).toBe(1)
  })
})
