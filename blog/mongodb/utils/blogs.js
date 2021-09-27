const blogsModel = require('../models/blogs');

exports.save = async function (params) {
    // document作成
    const blogs = new blogsModel(params);
    // document保存
    return await blogs.save();
}


exports.findOne = async function (params) {
    // document查询
    return await blogsModel.findOne(params);
}

exports.updateOne = async function (filters, params) {
    // document查询
    return await blogsModel.updateOne(filters, params);
}

exports.findInPage = async function (params = {}, pageSize_ = 20, page_ = 1, getParams = '', sortData = { '_id': -1 }) {
    // document查询
    let pageSize = pageSize_;
    let page = page_;
    let query = blogsModel.find(params, getParams).populate('author', '_id').populate('author', 'account').sort(sortData);
    let total = await query.countDocuments();
    let data = await query
        .find()
        .skip(pageSize * (page - 1))
        .limit(pageSize);
    let res = {
        total: total,
        data: data
    };
    return res;
}

exports.deleteOne = async function (params) {
    // document查询
    return await blogsModel.deleteOne(params);
}