const router = require('koa-router')();
const data = require('../data/muyuan');

router.prefix('/api/outer/td/td-ats-aggregation')

router.post('/:orgId/interviewer/page', async (ctx, next) => {
    return data.infoList;
})

router.post('/:orgId/interviewer/detail', async (ctx, next) => {
    return data.detail;
})

router.post('/:orgId/interviewer/import', async (ctx, next) => {
    return null
})

module.exports = router
