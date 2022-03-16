const path = require("path");
module.exports = {
  // 这样可以找到入口文件
  // entry: "./src/index.js",

  // context基础目录，必须是绝对路径
  // 会影响到entry的路径
  // 默认使用的是Node.js进程的当前工作目录
  // 这样也可以找到src/index.js文件
  context: path.resolve(__dirname, 'src'),
  entry: "./index.js",
};
