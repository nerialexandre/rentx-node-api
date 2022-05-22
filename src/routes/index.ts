import { Router } from 'express'

import { categoriesRoutes } from './categories.routes'
import { spacificationsRoutes } from './specifications.routes'
import LoggerMiddlewere from 'src/middlewares/logger'

const router = Router()

router.use(LoggerMiddlewere)
router.use(categoriesRoutes)
router.use(spacificationsRoutes)

export { router }
