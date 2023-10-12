const router = require('koa-router')();
const data = require('../data/offer');

router.prefix('/api/outer/td/td-ats-aggregation')

// 创建offer
router.post('/:orgId/offer/create', async (ctx, next) => {
  return true;
})

// 编辑offer
router.post('/:orgId/offer/update', async (ctx, next) => {
  return true;
})

// 删除offer
router.post('/:orgId/offer/delete', async (ctx, next) => {
  return true;
})

// offer详情
router.post('/:orgId/offer/detail', async (ctx, next) => {
  return data.detailItem;
})

// 发送offer
router.post('/:orgId/offer/send', async (ctx, next) => {
  return true;
})

// 确认offer
router.post('/:orgId/offer/confirm', async (ctx, next) => {
  return true;
})

// 放弃offer
router.post('/:orgId/offer/abandon', async (ctx, next) => {
  return true;
})

// 候选人确认offer
router.post('/:orgId/offer/candidate/accept', async (ctx, next) => {
  return true
})

// 候选人拒绝offer
router.post('/:orgId/offer/candidate/reject', async (ctx, next) => {
  return true
})

router.post('/:orgId/interview_plan/listInterviewerBusyTimeByUserId', async (ctx, next) => {
  return {
    "data": data.interviewesData,
    "locations": [
      {
        "id": -10000,
        "isSelect": true,
        "name": "远程办公"
      },
      {
        "id": 1000010066,
        "isSelect": false,
        "name": "校招-知春路领航科技大厦mock"
      }
    ]
  }
})

router.post('/:orgId/common/job/getJobInterviewRound', async (ctx, next) => {
  return {
    jobId: "12345",
    interviewRounds: [...data.interviewPlans, {id: 1, name: "一面"}]
  }
})

router.post('/:orgId/common/job/getJobInterviewDesign', async (ctx, next) => {
  return {
    jobInterviewDesignMap: {
      "721c3f16-fa9c-432b-b538-f6b45af6d596": [{ id: 1, name: "a" }],
      "79999484-4ee1-4caa-ac28-ed0d67a431dc": [{ id: 2, name: "b" }],
      "b162293b-b490-4a0c-94f6-f21901f1f549": [{ id: 1, name: "a" }],
    }
  }
})

module.exports = router
