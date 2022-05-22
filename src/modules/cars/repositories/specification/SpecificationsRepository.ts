import { Specification } from '../../models/Specification'
import { ISpecificationsRepository, ICreatespecificationDTO } from './ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor () {
    this.specifications = []
  }

  create ({ name, description }: ICreatespecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date()
    })

    this.specifications.push(specification)
  }

  all (): Specification[] {
    return this.specifications
  }

  findByName (name: string): Specification {
    return this.specifications.find(specification => specification.name === name)
  }
}

export { SpecificationsRepository }
