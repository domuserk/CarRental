import { AppError } from './../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory : CarsRepositoryInMemory

describe ("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    })
    it("Should be create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: 'Name Car',
            description: 'Description Car',
            daily_rate: 100,
            license_plate: 'ABC-1234',
            fine_amount: 60,
            brand: 'Brand', 
            category_id: '1234'
        })
        expect(car).toHaveProperty('id');
     })
     it('should not be able to create a car with exists license_plate',() => {
         expect(async () => {
            await createCarUseCase.execute({
                name: 'Name Car',
                description: 'Description Car',
                daily_rate: 100,
                license_plate: 'ABC-1234',
                fine_amount: 60,
                brand: 'Brand', 
                category_id: '1234'
            })
            await createCarUseCase.execute({
                name: 'Name Car2',
                description: 'Description Car',
                daily_rate: 100,
                license_plate: 'ABC-1234',
                fine_amount: 60,
                brand: 'Brand', 
                category_id: '1234'
            })
         }).rejects.toBeInstanceOf(AppError)
     })
     it('should not be able to create a car with available true by default', async () => {
       const car = await createCarUseCase.execute({
        name: 'Car Available',
        description: 'Description Car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand', 
        category_id: '1234'
       })
       expect(car.available).toBe(true)
    })
})