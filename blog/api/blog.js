const utils = require('../utils/utils');
const BlogUtils = require('../mongodb/utils/blogs');
const chalk = require('chalk');
module.exports = async function (req, res, next) {
    const token = req.header('token');
    const id = String(req.query.id || "")
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
    const blog = await BlogUtils.findOne({ _id: id }).catch(() => {
        res.send({
            code: 0,
            msg: '获取失败'
        });
    })
    res.send({
        code: 1,
        blog: blog,
        msg: 'ok'
    });
};