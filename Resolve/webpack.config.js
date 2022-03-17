const path = require("path");

module.exports = {
  // 配置模块如何解析路径
  resolve: {
    // 配置别名
    alias: {
      // 在路径中使用@ ，就能找到src目录
      "@": path.resolve(__dirname, "./src/"),
      // 在路径中使用js，可以找到 src/js目录
      js: path.resolve(__dirname, "./src/js/"),
    },
    // 设置可以省略的后缀名，默认为['.js', '.json', '.wasm']
    // 如果手动设置，会覆盖默认设置，如果只是想添加，可以通过'...'保存默认的扩展 ['.ts', '...']
    extensions: ['.ts', '...'],

    // 设置从npm包中导入模块时，使用package.json的哪个字段导入，会根据webpack的target不同而不同
    // mainFields

    // 告诉webpack解析模块时应该搜索的目录
    modules: ['node_modules']

  },
};
