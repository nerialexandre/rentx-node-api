import fs from 'fs'
import { Category } from '../../entities/Category'
import { parse as csvParse } from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/categories/ICategoriesRepository'

interface ICategories {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {
  constructor (private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async loadCategories (file: Express.Multer.File): Promise<ICategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const parseFile = csvParse()
      stream.pipe(parseFile)

      const categories: ICategories[] = []

      parseFile
        .on('data', async (row: Array<string>) => {
          const newCategory = {
            name: row[0],
            description: row[1]
          }
          categories.push(newCategory)
        })
        .on('end', () => {
          resolve(categories)
        })
        .on('error', (err: Error) => {
          reject(err)
        })

      return categories
    })
  }

  async execute (file: Express.Multer.File): Promise<Category[]> {
    const newCategories = await this.loadCategories(file)

    newCategories.forEach((category: ICategories) => {
      const { name, description } = category
      const existCategory = this.categoriesRepository.findByName(name)

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description
        })
      }
    })

    return this.categoriesRepository.all()
  }
}

export { ImportCategoriesUseCase }
