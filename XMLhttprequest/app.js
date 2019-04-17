const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')

const port = process.env.port || 3002

app.use(static(__dirname + '/public'))

app.listen(port,()=>{
  console.log('server started at localhost:' + port)
})
