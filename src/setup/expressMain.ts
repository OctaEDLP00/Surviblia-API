import express, { json, static as static_ } from 'express'
import { join } from 'node:path'
import { router } from '@router/index'
import { __dirname, staticOptions } from '@utils/setHeaderOnStatic'
import { corsMiddleware } from '@middlewares/cors'

export const publicPath = join(__dirname, '../../public/')

const app = express()
app.use(json())
app.use(static_(publicPath, staticOptions))
app.use(router)
app.use(corsMiddleware())
app.disable('x-powered-by')

export default app
