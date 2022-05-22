import { Category } from 'src/modules/cars/models/Category'

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category | undefined;
  create(categoryData: ICreateCategoryDTO): void;
  all(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO }