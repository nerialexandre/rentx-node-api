
import { ICategoriesRepository } from 'src/modules/cars/repositories/categories/ICategoriesRepository'

interface IRequest{
  name: string;
  description:string;
}

class CreateSpecificationUseCase {
  constructor (private specificationsRepository: ICategoriesRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute ({ name, description }: IRequest) {
    const categoryAlreadyExists = this.specificationsRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw Error('Specification already exists')
    }

    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
