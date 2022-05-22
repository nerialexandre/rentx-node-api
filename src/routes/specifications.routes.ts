import { Router } from 'express'

import { createSpecificationController } from 'src/modules/cars/useCases/createSpecifications'
import { listAllSpecificationsController } from 'src/modules/cars/useCases/listAllSpecifications'

const spacificationsRoutes = Router()

spacificationsRoutes.route('/specifications').post((request, response) => {
  return createSpecificationController.handle(request, response)
})

spacificationsRoutes.route('/specifications').get((request, response) => {
  return listAllSpecificationsController.handle(request, response)
})

export { spacificationsRoutes }
