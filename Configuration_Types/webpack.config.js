const path = require("path");

// 导入一个普通对象
// module.exports = {
//   entry: "./src/index.js",
// };

// 导出一个函数
// 在控制台通过 --env development  development就会保存在env对象中
// module.exports = function (env, argv) {
//   return {
//     mode: 'development',
//     entry: "./src/index.js",
//     output: {
//       path: path.resolve(__dirname, 'build')
//     }
//   };
// };

// 当需要异步加载配置变量时，可以导出一个返回一个Promise
module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        entry: "./src/index.js",
        output: {
          path: path.resolve(__dirname, "build"),
        },
      });
    }, 2000);
  });
};
