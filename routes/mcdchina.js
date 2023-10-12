const router = require('koa-router')();
const axios = require('axios');

router.prefix('/api/outer/td/td-ats-aggregation')

// 麦当劳试工
router.post('/:orgId/store/check', async (ctx, next) => {
    const { applicationId } = ctx.request.body;
    const res = await axios.post("", JSON.stringify({ applicationId }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.data.code === 0) {
        return res.data.data
    }

    return null
})

module.exports = router