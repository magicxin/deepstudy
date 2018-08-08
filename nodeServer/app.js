const Koa = require('koa')
const app = new Koa()
const path = require('path')
const static = require('koa-static')
const port = process.env.port || 8081

app.use(static(__dirname + '/public'))
console.log(static)
app.listen(port)
console.info('server started on port: ', port)
