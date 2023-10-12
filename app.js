const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const multer = require('@koa/multer');
const static = require('koa-static');

const common = require('./routes/common')
const offer = require('./routes/offer')
const status = require('./routes/status')
const nd = require('./routes/nd')
const leek = require('./routes/leek')
const muyuan = require('./routes/muyuan')
const mcdchina = require('./routes/mcdchina')
const chatgpt = require('./routes/chatgpt')
// const word = require('./routes/word')

const apiReback = require('./middleware/routeReturn')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// 指定静态文件路径
const staticPath = './file';
// 使用koa-static中间件暴露静态文件
app.use(static(staticPath));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.use(cors());
app.use(apiReback());

const upload = multer(); // 创建 multer 实例

app.use(upload.any()); // 使用 multer 中间件解析上传的文件

// routes
app.use(offer.routes(), offer.allowedMethods())
app.use(common.routes(), common.allowedMethods())
app.use(status.routes(), status.allowedMethods())
app.use(nd.routes(), nd.allowedMethods())
app.use(leek.routes(), leek.allowedMethods())
app.use(muyuan.routes(), muyuan.allowedMethods())
app.use(mcdchina.routes(), mcdchina.allowedMethods())
app.use(chatgpt.routes(), chatgpt.allowedMethods())
// app.use(word.routes(), word.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
 
