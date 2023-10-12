const router = require('koa-router')();
const axios = require('axios');

router.get('/getNum', async (ctx, next) => {
    const { id } = ctx.query;
    const res = await axios.get(`https://fundgz.1234567.com.cn/js/${id}.js?rt=1589463125600`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.data) {
        return res.data
    }

    return null
})

router.get('/getDlt', async (ctx, next) => {
    const res = await axios.get(`https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=50&isVerify=1&pageNo=1`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.data) {
        return res.data.value.list
    }

    return null
})


module.exports = router
