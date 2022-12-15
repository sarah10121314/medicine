// import Router from '@koa/router'
// import jwt from 'jsonwebtoken'
const Router = require('koa-router');
const jwt = require('jsonwebtoken')

const router = new Router();

router.get('/login', async ctx => {
    console.log('222222')
    let { userName, password } = ctx.request.body;
    const person = {
        userName: 'zhangsan',
        password: '123456',
        userId: 'fei2fe93vmvd'
    }
    const token = jwt.sign({id: person.userId }, {expiresIn: '365d' });
    if(userName == person.userName && password == person.password) {
        ctx.body = {
            rtnCode: 0,
            rtnMsg : '登录成功',
            token
        }
    } else {
        ctx.body = {
            rtnCode: 1,
            rtnMsg : '参数错误'
        }
    }
})


module.exports = router;