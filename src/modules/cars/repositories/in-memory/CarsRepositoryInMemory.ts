import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICreateCategoryDTO } from '../ICategoriesRepository';

class CarsRepositoryInMemory implements ICarsRepository {
    create(data: ICreateCategoryDTO): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
export { CarsRepositoryInMemory }