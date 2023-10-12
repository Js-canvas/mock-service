const {fakerZH_CN: faker} = require('@faker-js/faker')

const candidateList = {
    "count": 1,
    "currentPage": 1,
    "data": new Array(10).fill(1).map(_ => ({
        "applicationId": faker.string.uuid(),
        "name": faker.internet.userName(),
        "phone": faker.phone.number(),
        "email": faker.internet.email(),
        "gender": ("男女")[Math.floor(Math.random()*2)],
        "citizenId": faker.number.int(),
        "academicDegree": "本科",
        "certificateType":1,
        "graduateSchool": "清华大学",
        "lastCompany": faker.person.jobArea(),
        "jobId":faker.string.uuid(),
        "jobTitle": faker.person.jobTitle(),
        "stageId": (["offer","pend"])[Math.floor(Math.random()*2)],
        "stage": faker.string.uuid(),
        "offerStatus": [1,2,3,4,6][Math.floor(Math.random()*5)],
        "departmentName": faker.commerce.department()
    }))
}

const talentPoolList = {
    "data": [
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 1,
            "id": 1000010515,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统入职人才库",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 1,
            "updatedAt": 1666668238000,
            "version": "1.0"
        },
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 1,
            "id": 1000010516,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统公共人才库",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 0,
            "updatedAt": 1666668238000,
            "version": "1.0"
        },
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 1,
            "id": 1000010517,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统黑名单",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 3,
            "updatedAt": 1666668238000,
            "version": "1.0"
        },
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 2,
            "id": 1000010518,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统入职人才库",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 1,
            "updatedAt": 1666668238000,
            "version": "1.0"
        },
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 2,
            "id": 1000010519,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统公共人才库",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 0,
            "updatedAt": 1666668238000,
            "version": "1.0"
        },
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 2,
            "id": 1000010520,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统黑名单",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 3,
            "updatedAt": 1666668238000,
            "version": "1.0"
        },
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 1,
            "id": 1000010521,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统离职人才库",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 2,
            "updatedAt": 1666668238000,
            "version": "1.0"
        },
        {
            "createdAt": 1666668238000,
            "description": "",
            "hireMode": 2,
            "id": 1000010522,
            "isBuiltin": true,
            "isPrivate": false,
            "isQiaodaEnabled": false,
            "name": "系统离职人才库",
            "orgId": "shenpi",
            "parent": 0,
            "talentPoolRoleType": 0,
            "type": 2,
            "updatedAt": 1666668238000,
            "version": "1.0"
        }
    ],
    "version": "1.0"
}

const archiveReasonList = {
    "checkOutReasons": [
        {
            "hidden": false,
            "id": 1000010609,
            "modifiable": false,
            "name": "已离职",
            "outerName": "",
            "reasonId": "1000010609",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 5,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010610,
            "modifiable": false,
            "name": "主动离职",
            "outerName": "",
            "reasonId": "1000010610",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 5,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010611,
            "modifiable": false,
            "name": "被动离职",
            "outerName": "",
            "reasonId": "1000010611",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 5,
            "version": "1.0"
        }
    ],
    "hireReasons": [
        {
            "hidden": false,
            "id": 1000010597,
            "modifiable": false,
            "name": "已录用",
            "outerName": "",
            "reasonId": "1000010597",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 3,
            "version": "1.0"
        }
    ],
    "rejectCandidate": [
        {
            "hidden": false,
            "id": 1000010585,
            "modifiable": false,
            "name": "福利待遇不满足",
            "outerName": "",
            "reasonId": "1000010585",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 1,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010586,
            "modifiable": false,
            "name": "工作地点较远",
            "outerName": "",
            "reasonId": "1000010586",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 1,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010587,
            "modifiable": false,
            "name": "有更好的机会",
            "outerName": "",
            "reasonId": "1000010587",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 1,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010588,
            "modifiable": false,
            "name": "对公司业务不感兴趣",
            "outerName": "",
            "reasonId": "1000010588",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 1,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010589,
            "modifiable": false,
            "name": "其他",
            "outerName": "",
            "reasonId": "1000010589",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 1,
            "version": "1.0"
        }
    ],
    "rejectUS": [
        {
            "hidden": false,
            "id": 1000010590,
            "modifiable": false,
            "name": "胜任力不足",
            "outerName": "",
            "reasonId": "1000010590",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 2,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010591,
            "modifiable": false,
            "name": "没有回应",
            "outerName": "",
            "reasonId": "1000010591",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 2,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010592,
            "modifiable": false,
            "name": "招聘需求变更",
            "outerName": "",
            "reasonId": "1000010592",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 2,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010593,
            "modifiable": false,
            "name": "福利待遇不匹配",
            "outerName": "",
            "reasonId": "1000010593",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 2,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010594,
            "modifiable": false,
            "name": "与公司文化不符",
            "outerName": "",
            "reasonId": "1000010594",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 2,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010595,
            "modifiable": false,
            "name": "淘汰",
            "outerName": "",
            "reasonId": "1000010595",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 2,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010596,
            "modifiable": false,
            "name": "其他",
            "outerName": "",
            "reasonId": "1000010596",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 2,
            "version": "1.0"
        }
    ],
    "systemReasons": [
        {
            "hidden": false,
            "id": 1000010598,
            "modifiable": false,
            "name": "上传直接归档",
            "outerName": "",
            "reasonId": "1000010598",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010599,
            "modifiable": false,
            "name": "为候选人推荐了新职位",
            "outerName": "",
            "reasonId": "1000010599",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010600,
            "modifiable": false,
            "name": "职位关闭自动归档",
            "outerName": "",
            "reasonId": "1000010600",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010601,
            "modifiable": false,
            "name": "重复投递",
            "outerName": "",
            "reasonId": "1000010601",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010602,
            "modifiable": false,
            "name": "职位自动筛选淘汰",
            "outerName": "",
            "reasonId": "1000010602",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010603,
            "modifiable": false,
            "name": "加入黑名单",
            "outerName": "",
            "reasonId": "1000010603",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010604,
            "modifiable": false,
            "name": "长时间未处理自动淘汰",
            "outerName": "",
            "reasonId": "1000010604",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010605,
            "modifiable": false,
            "name": "候选人在其他职位入职",
            "outerName": "",
            "reasonId": "1000010605",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010606,
            "modifiable": false,
            "name": "面试官不满意自动淘汰",
            "outerName": "",
            "reasonId": "1000010606",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010607,
            "modifiable": false,
            "name": "AI自动初筛淘汰",
            "outerName": "",
            "reasonId": "1000010607",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        },
        {
            "hidden": false,
            "id": 1000010608,
            "modifiable": false,
            "name": "已被流转至其他申请流程",
            "outerName": "",
            "reasonId": "1000010608",
            "reasonType": 0,
            "sort": 1000000000,
            "type": 4,
            "version": "1.0"
        }
    ],
    "version": "1.0"
}

const demandList = [
    {
        "approvalStatus": 2,
        "campusInProcessOfferNumber": 0,
        "campusUsedNumber": 0,
        "commitment": "fulltime",
        "completeDate": "2023-04-29",
        "createdAt": 1679571594000,
        "creator": {
            "buId": 0,
            "email": "jinqiang@mockhr.com",
            "hireMode": 1,
            "id": 2978095,
            "name": "靳强",
            "orgId": "officialqa",
            "phone": "17349851993",
            "role": 50
        },
        "customData": {
            "132222": "A",
            "49530": "21145",
            "157285": "审批"
        },
        "department": {
            "id": 991201,
            "name": "AAA1",
            "namePath": "AAA1"
        },
        "education": "",
        "hireMode": 1,
        "id": 1030056,
        "inProcessOfferNumber": 0,
        "jobName": "测试审批啊啊啊",
        "linkedNumber": 0,
        "location": {
            "address": "北京海淀",
            "cityId": 820102,
            "country": "中国",
            "id": 358542
        },
        "managers": [
            {
                "buId": 0,
                "email": "jinqiang@mockhr.com",
                "hireMode": 1,
                "id": 2978095,
                "name": "靳强",
                "orgId": "officialqa",
                "phone": "17349851993",
                "role": 50
            }
        ],
        "maxSalary": 0,
        "minSalary": 0,
        "needNumber": 2,
        "number": "HC000422",
        "orgId": "officialqa",
        "owner": {

        },
        "realCompleteDate": "",
        "remainNumber": 2,
        "remainOfferNumber": 2,
        "socialInProcessNumber": 0,
        "socialUsedNumber": 0,
        "startDate": "2023-04-22",
        "status": "timeout",
        "type": "planned",
        "usedNumber": 0
    }
]

const attachmentTemplatesList = [
    {
        "creatorName": "刘阳",
        "draftTemplateId": 410002422,
        "id": 410002509,
        "isDefault": true,
        "isOptimizedDeptIds": true,
        "label": "1666668238131",
        "screenshot": "https://mock-test-public.oss-cn-beijing.aliyuncs.com/shenpi/cc6335b660924648935ad396f02ab4d2.png?Expires=1684318851&OSSAccessKeyId=LTAI5tBgSyttQYpne6XoQCpt&Signature=3Mg8cxClxkFDYruYUEkyJQwiUEw%3D×tamp=1684315251607",
        "templateName": "系统默认Offer附件模板",
        "templateType": 0,
        "version": "1.0"
    },
    {
        "creatorName": "刘阳",
        "id": 410002492,
        "isDefault": false,
        "isOptimizedDeptIds": true,
        "label": "1669692281954",
        "officeTemplateId": 410002107,
        "screenshot": "/images/file_types/doc.svg",
        "templateName": "刘模版",
        "templateType": 0,
        "version": "1.0"
    },
    {
        "creatorName": "高伟",
        "id": 410002504,
        "isDefault": false,
        "isOptimizedDeptIds": true,
        "label": "1669880286837",
        "officeTemplateId": 410002110,
        "screenshot": "/images/file_types/doc.svg",
        "templateName": "GTest-1201",
        "templateType": 0,
        "version": "1.0"
    }
]

const sendRecord = [
    {
        notifyEmail: true,
        notifySms: false,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "invalid",
    }, {
        notifyEmail: true,
        notifySms: false,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "accepted" ,
    },{
        notifyEmail: true,
        notifySms: true,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "pending",
    },{
        notifyEmail: false,
        notifySms: true,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "rejected",
    },{
        notifyEmail: true,
        notifySms: false,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "invalid",
    },{
        notifyEmail: true,
        notifySms: false,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "accepted" ,
    },{
        notifyEmail: true,
        notifySms: true,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "pending",
    },{
        notifyEmail: false,
        notifySms: true,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "rejected",
    },{
        notifyEmail: false,
        notifySms: false,
        offerId: 123112412,
        sentAt: 1685095285231,
        status: "invalid",
    }
]




module.exports = {
    candidateList,
    talentPoolList,
    archiveReasonList,
    attachmentTemplatesList,
    demandList,
    sendRecord
}