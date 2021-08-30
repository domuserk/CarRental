import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ICarsRepository {
   create(data: ICreateCategoryDTO): Promise<void>
}

export { ICarsRepository }