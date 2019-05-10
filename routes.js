const Router = require('koa-router')
const router = new Router({prefix:'/{{names}}'}) // 业务一级路由用复数
const Controllers = require('./controllers')

router.get('/port1',Controllers.port1)

module.exports = router