import { Specification } from '../../entities/Specification'
import { ISpecificationsRepository } from '../../repositories/specification/ISpecificationsRepository'

class ListAllSpecificationsUseCase {
  constructor (private specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  async execute (): Promise<Specification[]> {
    const allSpecifications = this.specificationsRepository.all()
    return allSpecifications
  }
}

export { ListAllSpecificationsUseCase }
