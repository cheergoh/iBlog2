var path = require('path');

var config = {
debug: true,
app: '/blog',
name: 'Gcp\'s Blog',//项目名称
description: 'Gcp的博客',
keywords: '',
timeout: 10000,
host: 'hcood.com',
// mongodb 配置
db: 'mongodb://127.0.0.1/blogsession',//mongodb 地址 wap_dev是数据库名称
db_name: 'blogsession',
session_secret: 'node_blog_secret',
auth_cookie_name: 'node_blog',

//程序运行端口
port: 3000,
};

module.exports = config;
