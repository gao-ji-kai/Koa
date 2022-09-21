// routers/user.js
const Router = require('koa-router')
const router = new Router()
router.prefix('/user')
router.get('/getInfo', (ctx, next)=>{
  ctx.body = "my name is gaojikai."
})
module.exports = router