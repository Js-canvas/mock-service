const {fakerZH_CN: faker} = require('@faker-js/faker')

const detailItem =
{
    "academicDegree": "本科",//学历
    "applicationId": 1000089022,//候选人申请id
    "certificateType": 1,//证件类型
    "citizenId": "45454584",//证件号码
    "departmentCode": "部门code",
    "departmentName": "部门名称",
    "email": "23051036229@mockhr.com",//邮箱
    "gender": "男",//性别
    "graduateSchool": "清华大学公共管理学院",//毕业院校
    "jobTitle": "60688aac-80ac-4a7f-8f9f-cc0fe047f699",//职位名称
    "lastCompany": "水电费",//最近工作单位
    "name": "尹赣",//姓名
    "offerStatus": 1,//offer状态
    "phone": "14579063657",//电话
    "stageName": "沟通offer",//阶段名称
    "salary": 10000,
    "probation": 5,
    "bonusMonth": 1000,
    "offerValidDate": "2023-05-20T16:00:00.000Z",
    "hcId": 1030056,
    "templateId": "1000025256",
    "attachmentTemplate": 410002509,
    "attachmentsUrl": "https://staging-16.mockhr.com/api/outer/ats-offer/offer/offers/getOfferPdf?offerId=1000019821",
    "attachmentName": "附件1.pdf"
}

const interviewesData = [
    {
        "busyHourList": [
            {
                "interviewerEndTimeHour": "09:30",
                "interviewerStartTimeHour": "09:00",
                "isCurrentPlan": true,
                interviewers: [
                    {
                        interviewerUserId: 1234,
                        interviewerName: "张三",
                        interviewerEmail: "zhangsan@mockhr.com"
                    },
                    {
                        interviewerUserId: 2345,
                        interviewerName: "李四",
                        interviewerEmail: "lisi@mockhr.com"
                    },{
                        interviewerUserId: 2335,
                        interviewerName: "王五",
                        interviewerEmail: "lisi@mockhr.com"
                    }
                ],
                // "colList": [{
                //     seq: 0,
                //     isBusy: true,
                //     isCurrentPlan: false,
                //     interviewLocationId: -10000,
                //     "interviewerEndTimeHour": "09:05",
                //     "interviewerStartTimeHour": "09:00",
                // }, {
                //     seq: 1,
                //     isBusy: false,
                //     isCurrentPlan: true,
                //     "interviewerEndTimeHour": "09:10",
                //     "interviewerStartTimeHour": "09:05",
                // }, {
                //     seq: 2,
                //     isBusy: false,
                //     isCurrentPlan: false,
                //     interviewLocationId: -10000,
                //     "interviewerEndTimeHour": "09:15",
                //     "interviewerStartTimeHour": "09:10",
                // }]
            },
            {
                "interviewerEndTimeHour": "10:15",
                "interviewerStartTimeHour": "09:45",
                "isBusy": false,
                "isCurrentPlan": false,
                interviewLocationId:-10000,
                // "colList": [{
                //     seq: 0,
                //     isBusy: true,
                //     isCurrentPlan: false, 
                //     interviewLocationId: -10000,
                // }, {
                //     seq: 1,
                //     isBusy: false,
                //     isCurrentPlan: true, 
                //     interviewLocationId: -10000,
                // }, {
                //     seq: 2,
                //     isBusy: false,
                //     isCurrentPlan: false, 
                //     interviewLocationId: -10000,
                // }]
            },
            {
                "interviewerEndTimeHour": "11:00",
                "interviewerStartTimeHour": "10:30",
                "isBusy": true,
                "isCurrentPlan": false,
                interviewers: [
                    {
                        interviewerUserId: 1234,
                        interviewerName: "张三",
                        interviewerEmail: "zhangsan@mockhr.com"
                    },
                    {
                        interviewerUserId: 2345,
                        interviewerName: "李四",
                        interviewerEmail: "lisi@mockhr.com"
                    }
                ]
            },
            {
                "interviewerEndTimeHour": "11:45",
                "interviewerStartTimeHour": "11:15",
                "isBusy": true,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "13:30",
                "interviewerStartTimeHour": "13:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "14:15",
                "interviewerStartTimeHour": "13:45",
                "isBusy": false,
                "isCurrentPlan": false,
                interviewers: [
                    {
                        interviewerUserId: 1234,
                        interviewerName: "张三",
                        interviewerEmail: "zhangsan@mockhr.com"
                    },
                    {
                        interviewerUserId: 2345,
                        interviewerName: "李四",
                        interviewerEmail: "lisi@mockhr.com"
                    },{
                        interviewerUserId: 2335,
                        interviewerName: "王五",
                        interviewerEmail: "lisi@mockhr.com"
                    }
                ],
            },
            {
                "interviewerEndTimeHour": "15:00",
                "interviewerStartTimeHour": "14:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:45",
                "interviewerStartTimeHour": "15:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "16:30",
                "interviewerStartTimeHour": "16:00",
                "isBusy": false,
                "isCurrentPlan": false
            }
        ],
        "interviewerTimeDay": "2023-08-25"
    },
    {
        "busyHourList": [
            {
                "interviewerEndTimeHour": "09:30",
                "interviewerStartTimeHour": "09:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "10:15",
                "interviewerStartTimeHour": "09:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:00",
                "interviewerStartTimeHour": "10:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:45",
                "interviewerStartTimeHour": "11:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "13:30",
                "interviewerStartTimeHour": "13:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "14:15",
                "interviewerStartTimeHour": "13:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:00",
                "interviewerStartTimeHour": "14:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:45",
                "interviewerStartTimeHour": "15:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "16:30",
                "interviewerStartTimeHour": "16:00",
                "isBusy": false,
                "isCurrentPlan": false
            }
        ],
        "interviewerTimeDay": "2023-08-26"
    },
    {
        "busyHourList": [
            {
                "interviewerEndTimeHour": "09:30",
                "interviewerStartTimeHour": "09:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "10:15",
                "interviewerStartTimeHour": "09:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:00",
                "interviewerStartTimeHour": "10:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:45",
                "interviewerStartTimeHour": "11:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "13:30",
                "interviewerStartTimeHour": "13:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "14:15",
                "interviewerStartTimeHour": "13:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:00",
                "interviewerStartTimeHour": "14:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:45",
                "interviewerStartTimeHour": "15:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "16:30",
                "interviewerStartTimeHour": "16:00",
                "isBusy": false,
                "isCurrentPlan": false
            }
        ],
        "interviewerTimeDay": "2023-08-27"
    },
    {
        "busyHourList": [
            {
                "interviewerEndTimeHour": "09:30",
                "interviewerStartTimeHour": "09:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "10:15",
                "interviewerStartTimeHour": "09:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:00",
                "interviewerStartTimeHour": "10:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:45",
                "interviewerStartTimeHour": "11:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "13:30",
                "interviewerStartTimeHour": "13:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "14:15",
                "interviewerStartTimeHour": "13:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:00",
                "interviewerStartTimeHour": "14:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:45",
                "interviewerStartTimeHour": "15:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "16:30",
                "interviewerStartTimeHour": "16:00",
                "isBusy": false,
                "isCurrentPlan": false
            }
        ],
        "interviewerTimeDay": "2023-08-28"
    },
    {
        "busyHourList": [
            {
                "interviewerEndTimeHour": "09:30",
                "interviewerStartTimeHour": "09:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "10:15",
                "interviewerStartTimeHour": "09:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:00",
                "interviewerStartTimeHour": "10:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:45",
                "interviewerStartTimeHour": "11:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "13:30",
                "interviewerStartTimeHour": "13:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "14:15",
                "interviewerStartTimeHour": "13:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:00",
                "interviewerStartTimeHour": "14:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:45",
                "interviewerStartTimeHour": "15:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "16:30",
                "interviewerStartTimeHour": "16:00",
                "isBusy": false,
                "isCurrentPlan": false
            }
        ],
        "interviewerTimeDay": "2023-08-29"
    },
    {
        "busyHourList": [
            {
                "interviewerEndTimeHour": "09:30",
                "interviewerStartTimeHour": "09:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "10:15",
                "interviewerStartTimeHour": "09:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:00",
                "interviewerStartTimeHour": "10:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:45",
                "interviewerStartTimeHour": "11:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "13:30",
                "interviewerStartTimeHour": "13:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "14:15",
                "interviewerStartTimeHour": "13:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:00",
                "interviewerStartTimeHour": "14:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:45",
                "interviewerStartTimeHour": "15:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "16:30",
                "interviewerStartTimeHour": "16:00",
                "isBusy": false,
                "isCurrentPlan": false
            }
        ],
        "interviewerTimeDay": "2023-08-30"
    },
    {
        "busyHourList": [
            {
                "interviewerEndTimeHour": "09:30",
                "interviewerStartTimeHour": "09:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "10:15",
                "interviewerStartTimeHour": "09:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:00",
                "interviewerStartTimeHour": "10:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "11:45",
                "interviewerStartTimeHour": "11:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "13:30",
                "interviewerStartTimeHour": "13:00",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "14:15",
                "interviewerStartTimeHour": "13:45",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:00",
                "interviewerStartTimeHour": "14:30",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "15:45",
                "interviewerStartTimeHour": "15:15",
                "isBusy": false,
                "isCurrentPlan": false
            },
            {
                "interviewerEndTimeHour": "16:30",
                "interviewerStartTimeHour": "16:00",
                "isBusy": false,
                "isCurrentPlan": false
            }
        ],
        "interviewerTimeDay": "2023-08-31"
    }
]

const interviewPlans = new Array(10).fill(1).map(_ => ({
    id: faker.string.uuid(),
    name: faker.internet.userName(),
}))

module.exports = {
    detailItem,
    interviewesData,
    interviewPlans
}