import { ACCEPTED_ORIGINS } from '@/setup/acceptedOrigins.ts'
import cors from 'cors'

const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin!)) {
        return callback(null, true)
      }
      if (!origin) {
        return callback(null, true)
      }
      return callback(
        new Error('Not allowed by CORS', {
          cause: 'Not have permission to use the API',
        })
      )
    },
  })

export { corsMiddleware }
export default corsMiddleware
