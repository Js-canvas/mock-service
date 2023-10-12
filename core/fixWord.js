const Docxtemplater = require('docxtemplater')
const PizZip = require("pizzip");
const mammoth = require('mammoth')
const fs = require('fs');
const path = require('path')

const getCurrentWord = async (docxData, wordBuffer) => {
    // 图片处理开始
    try {
        const zip = new PizZip(wordBuffer);
        var doc = new Docxtemplater(zip);
        //获取数据
        doc.setData({
            ...docxData,
        });
        doc.render();
        var out = doc.getZip().generate({
            type: 'nodebuffer',
        });
        return await showWord(out);
    } catch (error) {
        throw error;
    }
};

const showWord = (file) => {
    // 将Word文档转换为HTML
    return new Promise((r, j) => {
        mammoth
            .convertToHtml(file)
            .then((result) => {
                const html = result.value;
                // 在页面上显示HTML内容
                r(html.toString())
            })
            .catch((error) => {
                console.error('转换出错:', error);
            });
    })
};


const fixWord = async (fixData, pathStr) => {
    const filePath = path.resolve(pathStr);
    // const fileStream = fs.createReadStream(filePath);
    const fileStream = fs.readFileSync(filePath, 'binary')
    return await getCurrentWord(fixData, fileStream)
}

module.exports = fixWord