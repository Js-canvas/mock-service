const {fakerZH_CN: faker} = require('@faker-js/faker')


const infoList = {
    "count": 1,
    "currentPage": 1,
    "data": new Array(10).fill(1).map(_ => ({
        "id": faker.string.uuid(),
        "recommendName": faker.internet.userName(),
        "name": faker.internet.userName(),
        "idCard": faker.number.int(),
        "hasSend": [true, false][Math.floor(Math.random()*2)],
        "protectionTime": new Date().getTime(),
        "certificateType":1,
        "hasvalidate": [1,2][Math.floor(Math.random()*2)],
        "status": [1,2][Math.floor(Math.random()*2)],
    }))
}

const noticeDetail = {
    "appId": "wxf6e5c95bf84101e2",
    "encryptOpenId": "WDtZWS1YB7qgeSljwt6iGINbDfM0+ihlnFNqps8q7aw=",
    "msgContent": "<p>【宁德时代】测试先生/女士：您好，很遗憾地通知您，经综合评估，您不符合录用要求，祝您生活愉快！</p>",
    "msgId": 10,
    "templateId": "Fo1IhEJMGTDpFG6v9sXO-ngTojQWlHqdNu3y3do-Fdc"
}

const userInfo = {
    userName: "张三",
    idCard: "130404199911119929",
    phone: "17612341234"
}


module.exports = {
    infoList,
    noticeDetail,
    userInfo
}