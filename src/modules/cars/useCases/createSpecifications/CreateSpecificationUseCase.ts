
import { ISpecificationsRepository } from 'src/modules/cars/repositories/specification/ISpecificationsRepository'

interface IRequest{
  name: string;
  description:string;
}

class CreateSpecificationUseCase {
  constructor (private specificationsRepository: ISpecificationsRepository) {
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
