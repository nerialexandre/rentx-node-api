import { Router } from 'express'

import { categoriesRoutes } from './categories.routes'
import { spacificationsRoutes } from './specifications.routes'

const router = Router()

router.use(categoriesRoutes)
router.use(spacificationsRoutes)

export { router }
