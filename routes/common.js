const router = require('koa-router')();
const data = require('../data/common');

router.prefix('/api/outer/td/td-ats-aggregation')

// 获取候选人列表
router.post('/:orgId/common/candidate/list', async (ctx, next) => {
  return data.candidateList
})

// 获取人才库列表
router.post('/:orgId/common/talent-pool/list', async (ctx, next) => {
  return data.talentPoolList
})

// 获取归档原因列表
router.post('/:orgId/common/archive-reason/list', async (ctx, next) => {
  return data.archiveReasonList
})

// 移入人才库
router.post('/:orgId/common/talent-pool/move', async (ctx, next) => {
  return true
})

// 获取招聘需求列表
router.post('/:orgId/common/demand/list', async (ctx, next) => {
  return data.demandList
})

// 获取附件模板列表
router.post('/:orgId/common/attachmentTemplates', async (ctx, next) => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 30000)
})
  return data.attachmentTemplatesList;
})

// 获取附件模板列表
router.post('/:orgId/common/send/record', async (ctx, next) => {
  await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000)
  })
  return data.sendRecord;
})



module.exports = router
