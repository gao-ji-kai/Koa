// routers/goods.js
const Router = require('koa-router')
const router = new Router()
// 设置路由前缀
router.prefix('/goods')
router.get('/getInfo', (ctx, next)=>{
  ctx.body = "this is a demo."
})
module.exports = router