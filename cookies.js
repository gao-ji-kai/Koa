const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

router.get('/setCookie', async (ctx) => {
  ctx.cookies.set(
    'name',
    'GJK',
    {
      domain: '127.0.0.1',     // Cookie所在的domain(域名)
      expires: new Date('2022-10-01'), // Cookie的失效时间
      httpOnly: false,         // 是否只在HTTP请求中获取
      overwrite: false                // 是否允许重写
    }
  )
  ctx.body = `设置成功`
})

router.get('/getCookie', async (ctx) => {
  const cookie = ctx.cookies.get('id')
  console.log(cookie)
  ctx.body = `cookie为：${cookie}`
})

// 加载路由中间件
app.use(router.routes())

app.listen(4000, () => {
  console.log('server is running, port is 4000')
})