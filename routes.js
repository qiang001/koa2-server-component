const Router = require('koa-router')
const v1 = new Router({prefix:'/v1/{{names}}'}) // 业务一级路由用复数
const Controllers = require('./controllers')

v1.get('/sayHello',Controllers.sayHello)

module.exports = v1