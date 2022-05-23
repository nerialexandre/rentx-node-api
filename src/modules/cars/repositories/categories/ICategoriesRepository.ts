import { Category } from 'src/modules/cars/entities/Category'

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category> | undefined;
  create(categoryData: ICreateCategoryDTO): Promise<Category> | any;
  all(): Promise<Category[]>;
}

export { ICategoriesRepository, ICreateCategoryDTO }
