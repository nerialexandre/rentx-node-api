
import { ICategoriesRepository } from 'src/modules/cars/repositories/categories/ICategoriesRepository'

interface IRequest{
  name: string;
  description:string;
}

class CreateCategoryUseCase {
  constructor (private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute ({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw Error('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
