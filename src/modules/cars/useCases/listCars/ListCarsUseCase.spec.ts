import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryinMemory: CarsRepositoryInMemory;

describe('List Cars', () => {

  beforeEach(() => {
    carsRepositoryinMemory = new CarsRepositoryInMemory()
    listCarsUseCase = new ListCarsUseCase(carsRepositoryinMemory)
  })

  it('should be able to list all avaliable cars', async () => {
    const car = await carsRepositoryinMemory.create({
      name: "Car1", 
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12345",
      fine_amount: 40,
      brand: "Car_brand", 
      category_id : "category_id"
    })

    const cars = await listCarsUseCase.execute({})

    expect(cars).toEqual([car])
  })

  it('should be able to list all avaliable car by name', async () => {
    const car = await carsRepositoryinMemory.create({
      name: "Car2", 
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12345",
      fine_amount: 40,
      brand: "Car_brand_test", 
      category_id : "category_id"
    })

    const cars = await listCarsUseCase.execute({
      brand: 'Car_brand'
    })

    console.log(cars)

    expect(cars).toEqual([car])
  })
})