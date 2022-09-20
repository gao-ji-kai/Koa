// app.js
const Koa = require('koa')
const path = require('path')
const fs = require('fs')
const static = require('koa-static')
const Router = require('koa-router')
const koaBody = require('koa-body');
const app = new Koa()
const router = new Router()

const staticPath = './static'

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024 // 设置上传文件的限制, 默认2MB
  }
}));

app.use(static(
  path.join( __dirname,  staticPath)
))

app.use(router.routes())

router.post('/upload', async ( ctx ) => {
  // 获取文件对象
  const file = ctx.request.files.file
  // 读取文件内容
  const data = fs.readFileSync(file.path);
  // 保存到服务端
  fs.writeFileSync(path.join(__dirname, file.name), data);
  ctx.body = { message: '上传成功！' };
})

app.listen(4000, () => {
  console.log('server is running, port is 4000')
})