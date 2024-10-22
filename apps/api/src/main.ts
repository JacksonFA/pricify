import { app } from './app'
import { env } from './env'

app.listen({ port: env.PORT || 3000 }, (err) => {
  if (err) {
    app.log.error(`Error starting http server: ${err}`)
    process.exit(1)
  }
})
