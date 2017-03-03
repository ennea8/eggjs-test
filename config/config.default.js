'use strict';
// const path = require('path');

// module.exports = appInfo => {
//   const config = {};
//
//   // should change to your own
//   config.keys = appInfo.name + '123456';
//
//
//   config.view = {
//     defaultExtension: '.tpl',
//     defaultViewEngine: 'nunjucks',
//     mapping: {
//       '.tpl': 'nunjucks',
//       '.ejs': 'ejs',
//     },
//     root: [
//       path.join(appInfo.baseDir, 'app/view'),
//     ].join(',')
//   };
//
//   return config;
// };

exports.keys =  '123456';
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};