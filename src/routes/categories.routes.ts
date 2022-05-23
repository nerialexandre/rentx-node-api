import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from 'src/modules/cars/useCases/createCategories/CreateCategoryController'
import importCategoriesController from 'src/modules/cars/useCases/importCategories'
import listAllCategoriesController from 'src/modules/cars/useCases/listAllCategories'

const createCategoryController = new CreateCategoryController()
const categoriesRoutes = Router()
const upload = multer({ dest: './tmp' })

categoriesRoutes.route('/categories')
  .post(createCategoryController.handle)
  .get((request, response) => {
    return listAllCategoriesController().handle(request, response)
  })

categoriesRoutes.route('/categories/import').post(
  upload.single('file'),
  (request, response) => {
    importCategoriesController().handle(request, response)
  })

export { categoriesRoutes }
