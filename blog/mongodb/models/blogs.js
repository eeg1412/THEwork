var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema
var blogs = new Schema({
    title: { type: String, default: "" },//标题
    content: { type: String, default: "" },//内容
    author: { type: Schema.Types.ObjectId, ref: 'users' },//作者
    creatDate: {
        type: Date,
        default: Date.now
    },//录入时间
});

module.exports = mongoose.model('blogs', blogs);