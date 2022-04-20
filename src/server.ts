import app from './app'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJson from './swagger.json'

app.listen(3000)
app.use(express.static('upload'))
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson))
