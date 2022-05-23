import { specificationsRepository } from '../../repositories'
import { ListAllSpecificationsController } from './listAllSpecificationsController'
import { ListAllSpecificationsUseCase } from './listAllSpecificationsUseCase'

const listAllSpecificationsUseCase = new ListAllSpecificationsUseCase(specificationsRepository)
const listAllSpecificationsController = new ListAllSpecificationsController(listAllSpecificationsUseCase)

export { listAllSpecificationsController }
