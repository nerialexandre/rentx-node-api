import { categoriesRepository } from '../../repositories'
import { ListAllSpecificationsController } from './listAllSpecificationsController'
import { ListAllSpecificationsUseCase } from './listAllSpecificationsUseCase'

const listAllSpecificationsUseCase = new ListAllSpecificationsUseCase(categoriesRepository)
const listAllSpecificationsController = new ListAllSpecificationsController(listAllSpecificationsUseCase)

export { listAllSpecificationsController }
