import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListAvaliableCarsUseCase } from "./ListAvaliableCarsUseCase"

let listAvaliableCarsUseCase: ListAvaliableCarsUseCase;
let carsRepositoryinMemory: CarsRepositoryInMemory;

describe('List Cars', () => {

  beforeEach(() => {
    carsRepositoryinMemory = new CarsRepositoryInMemory()
    listAvaliableCarsUseCase = new ListAvaliableCarsUseCase(carsRepositoryinMemory)
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

    const cars = await listAvaliableCarsUseCase.execute({})

    expect(cars).toEqual([car])
  })

  it('should be able to list all avaliable car by brand', async () => {
    const car = await carsRepositoryinMemory.create({
      name: "Car2", 
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12345",
      fine_amount: 40,
      brand: "Car_brand_test", 
      category_id : "category_id"
    })

    const cars = await listAvaliableCarsUseCase.execute({
      brand: 'Car_brand_test'
    })

    expect(cars).toEqual([car])
  })

  it('should be able to list all avaliable car by name', async () => {
    const car = await carsRepositoryinMemory.create({
      name: "Car3", 
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12345",
      fine_amount: 40,
      brand: "Car_brand_test", 
      category_id : "category_id"
    })

    const cars = await listAvaliableCarsUseCase.execute({
      name: 'Car3'
    })

    expect(cars).toEqual([car])
  })

  it('should be able to list all avaliable car by category', async () => {
    const car = await carsRepositoryinMemory.create({
      name: "Car3", 
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-12345",
      fine_amount: 40,
      brand: "Car_brand_test", 
      category_id : "12345"
    })

    const cars = await listAvaliableCarsUseCase.execute({
      category_id: '12345'
    })

    expect(cars).toEqual([car])
  })
})