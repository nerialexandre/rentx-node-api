import { Router } from 'express'
import multer from 'multer'

import createCategoryController from 'src/modules/cars/useCases/createCategories'
import importCategoriesController from 'src/modules/cars/useCases/importCategories'
import listAllCategoriesController from 'src/modules/cars/useCases/listAllCategories'

const categoriesRoutes = Router()
const upload = multer({ dest: './tmp' })

categoriesRoutes.route('/categories')
  .post((request, response) => {
    return createCategoryController().handle(request, response)
  })
  .get((request, response) => {
    return listAllCategoriesController().handle(request, response)
  })

categoriesRoutes.route('/categories/import').post(
  upload.single('file'),
  (request, response) => {
    importCategoriesController().handle(request, response)
  })

export { categoriesRoutes }
