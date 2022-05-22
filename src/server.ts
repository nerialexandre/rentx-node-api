import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { router } from './routes'
import swaggerFile from './swagger.json'
import './database/index'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(3333, () => console.log('🚀 Server is running in port 3333'))

// AppDataSource.initialize().then(async () => {
//   console.log('Postgress Conected')
// }).catch(error => console.log(error))
