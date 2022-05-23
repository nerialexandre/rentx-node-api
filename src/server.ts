import connectDB from './database'
import './shared/container/index'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

connectDB().then(() => {
  console.info('PostgreSQL connected!')
  app.listen(3333, () => console.info('🚀 Server is running in port 3333'))
})
