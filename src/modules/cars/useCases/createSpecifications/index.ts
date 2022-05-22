import { categoriesRepository } from '../../repositories'
import { CreateSpecificationController } from './CreateSpecificationController'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

const createSpecificationUseCase = new CreateSpecificationUseCase(categoriesRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }
