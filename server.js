const app = require('./modules/app/app')
const port = 8000

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`)
})
