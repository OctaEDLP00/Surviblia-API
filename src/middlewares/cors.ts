import cors from 'cors'
import { ACCEPTED_ORIGINS } from '@setup/acceptedOrigins'

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin!)) callback(null, true)
    if (!origin) callback(null, true)
    callback(new Error('Not allowed by CORS'))
  }
})
