
const apiReback = () => async (ctx, next) => {
    try {
        const data = await next()
        ctx.body = { 
            code: 0,
            codeType: 0,
            data,
            msg: "成功",
            success: true,
        }
    } catch (error) {
        ctx.body = {
            code: -1,
            codeType: 0,
            data,
            msg: "失败",
            success: false,
        }
    }
}

module.exports = apiReback;