const router = require('koa-router')();
const axios = require('axios');
const data = require('../data/nd');

router.prefix('/api/outer/td/td-ats-aggregation')
const urlPrefix = ""

router.post('/:orgId/info/list', async (ctx, next) => {
    return data.infoList;
})

router.post('/:orgId/inward/create', async (ctx, next) => {
    return true
})

router.post('/:orgId/catl/queryWxMessageDetail', async (ctx, next) => {
    const { appId, msgId, encryptOpenId } = ctx.request.body;
    const res = await axios.post(`${urlPrefix}/catl/queryWxMessageDetail`, JSON.stringify({ appId, msgId, encryptOpenId }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.data.code === 0) {
        return res.data.data
    }

    return null
})

router.get('/:orgId/wx/auth', async (ctx, next) => {
    return "WDtZWS1YB7qgeSljwt6iGINbDfM0+ihlnFNqps8q7aw="
})

router.post('/:orgId/catl/queryByWxMp', async (ctx, next) => {
    // const { appId, encryptOpenId } = ctx.request.body;
    const appId = 'wx985933f7af1477ed';
    const encryptOpenId = "TuYZWhoL2jGfTMS43CpuIAn61A1fpW90sBJ+22x4r+M=";
    const res = await axios.post(`${urlPrefix}/catl/queryByWxMp`, JSON.stringify({ appId, encryptOpenId }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.data.code === 0) {
        return res.data.data
    }

    return null
})

router.post('/:orgId/catl/registerByWxMp', async (ctx, next) => {
    const { userName, phone, idCard } = ctx.request.body;
    const appId = 'wx985933f7af1477ed';
    const encryptOpenId = "TuYZWhoL2jGfTMS43CpuIAn61A1fpW90sBJ+22x4r+M=";
    const res = await axios.post(`${urlPrefix}/catl/registerByWxMp`, JSON.stringify({
        appId, encryptOpenId, userName, phone, idCard
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.data.code === 0) {
        return res.data.data
    }

    return null
})

router.post('/:orgId/catl/updateByWxMp', async (ctx, next) => {
    const { userName, phone, idCard } = ctx.request.body;
    const appId = 'wx985933f7af1477ed';
    const encryptOpenId = "TuYZWhoL2jGfTMS43CpuIAn61A1fpW90sBJ+22x4r+M=";
    const res = await axios.post(`${urlPrefix}/catl/updateByWxMp`, JSON.stringify({ appId, encryptOpenId, userName, phone, idCard }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.data.code === 0) {
        return res.data.data
    }

    return null
})

router.post('/:orgId/inward/edit/status', async (ctx, next) => {
    return true
})

module.exports = router
