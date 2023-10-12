const router = require('koa-router')();
const path = require('path')
const fixWord = require('../core/fixWord')
const convertToPdf = require('../core/convertToPdf')

// 移动到待入职
router.get('/word', async (ctx, next) => {
    const result = await fixWord({
        jobTitle: 'web',
        name: '章三',
        date: '2023-09-12',
        time: 23,
      },'./file/temp.docx')
    return result
})

router.get('/wordPdf', async (ctx, next) => {
    const wordFilePath = path.resolve('./file/temp.docx');
    const pdfFilePath = path.resolve('./file/temp.pdf');
    const result = await convertToPdf(wordFilePath, pdfFilePath, {
        jobTitle: 'web',
        name: '章三',
        date: '2023-09-12',
        time: 23,
      })
    console.log('result', result)
    // ctx.body = result;
    return result
})

module.exports = router
