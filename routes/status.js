const router = require('koa-router')();

router.prefix('/api/outer/td/td-ats-aggregation')

// 移动到待入职
router.post('/:orgId/status/move/bring-in', async (ctx, next) => {
  return true
})





module.exports = router
