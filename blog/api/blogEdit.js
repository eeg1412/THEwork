
const utils = require('../utils/utils');
const BlogUtils = require('../mongodb/utils/blogs');
const chalk = require('chalk');
module.exports = async function (req, res, next) {
    const token = req.header('token');
    const title = String(req.body.title || "");
    const content = String(req.body.content || "");
    const id = String(req.body.id || "")
    const adminInfo = await utils.tokenCheck(token);
    if (!adminInfo) {
        res.send({
            code: 403,
            msg: '管理员验证失败!'
        });
        console.error(
            chalk.yellow('验证失败!')
        );
        return false;
    }
    console.log(adminInfo)
    const params = {
        title: title,
        content: content,
    }
    await BlogUtils.updateOne({ _id: id }, params).catch(() => {
        res.send({
            code: 0,
            msg: '修改失败'
        });
    })
    res.send({
        code: 1,
        msg: 'ok'
    });
};