
const utils = require('../utils/utils');
const BlogUtils = require('../mongodb/utils/blogs');
const chalk = require('chalk');
module.exports = async function (req, res, next) {
    const token = req.header('token');
    const size = Number(req.query.size || 1)
    const page = Number(req.query.page || 1)
    const list = await BlogUtils.findInPage({}, size, page,)
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
    res.send({
        code: 1,
        list: list.data,
        total: list.total,
        msg: 'ok'
    });
};