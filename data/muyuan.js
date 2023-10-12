const {fakerZH_CN: faker} = require('@faker-js/faker')

const infoList = {
    "total": 10,
    "pageNum": 1,
    "pageSize": 30,
    "list": new Array(10).fill(1).map(_ => ({
        "id": faker.string.uuid(),
        "interviewer_id": faker.string.uuid(),
        "position": faker.internet.userName(),
        "interviewer_name": faker.internet.userName(),
        "available_interview_info": faker.number.int(),
    }))
}

const detail = {
    "id": faker.string.uuid(),
    "interviewer_id": faker.string.uuid(),
    "position": faker.internet.userName(),
    "interviewer_name": faker.internet.userName(),
    "available_interview_info": faker.number.int(),
}


module.exports = {
    infoList,
    detail
}
