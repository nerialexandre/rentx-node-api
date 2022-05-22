
import { ISpecificationsRepository } from '../../repositories/specification/ISpecificationsRepository'

interface IRequest{
  name: string;
  description:string;
}

class CreateSpecificationService {
  constructor (private specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute ({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw Error('Specification already exists')
    }

    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationService }
