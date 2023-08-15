import app from '@setup/expressMain'
import { log } from '@utils/logs'
import PORT from '@setup/port'

app.listen(PORT, () => log(`🚀 Server listening 👂🏼 on port: http://localhost:${PORT}`))
