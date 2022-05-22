import { Category } from '../../models/Category'
import { ISpecificationsRepository } from '../../repositories/specification/ISpecificationsRepository'

class ListAllSpecificationsUseCase {
  constructor (private specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  async execute (): Promise<Category[]> {
    const allSpecifications = this.specificationsRepository.all()
    return allSpecifications
  }
}

export { ListAllSpecificationsUseCase }
