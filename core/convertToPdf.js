const fs = require('fs');
const Docxtemplater = require('docxtemplater');
const PdfPrinter = require('pdfmake');
const path = require('path')
const { PDFDocument } = require('pdf-lib');
const convertWordToPdf = require('docx-pdf');

let fonts = {
    Roboto: {
        normal: 'node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf',
        bold: 'node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf',
        italics: 'node_modules/roboto-font/fonts/Roboto/roboto-italic-webfont.ttf',
        bolditalics: 'node_modules/roboto-font/fonts/Roboto/roboto-bolditalic-webfont.ttf'
    }
};

const convertToPdf = (wordPath, pdfPath, docxData) => {
    return new Promise(async (resolve, reject) => {
        // 读取Word文档模板
        const templateContent = fs.readFileSync(wordPath, 'binary');
        const PizZip = require("pizzip");
        const zip = new PizZip(templateContent);
        // 创建Docxtemplater实例
        const doc = new Docxtemplater(zip);
        // 设置模板数据
        doc.setData({
            ...docxData,
        });
        // 对模板进行渲染
        doc.render();
        // 将渲染后的内容以Buffer形式输出
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        // convertWordToPdf(wordPath, pdfPath, (err, result) => {
        //     if (err) {
        //       console.error(err);
        //     } else {
        //         resolve(true)
        //       console.log('Word document converted to PDF successfully!');
        //     }
        //   });
    })
};

module.exports = convertToPdf