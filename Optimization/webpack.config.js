const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // entry: {},
  mode: "none",
  output: {
    clean: true,
  },
  optimization: {
    chunkIds: "deterministic",
    // 设置为 true 或者'multiple'会为每个入口添加一个runtimechunk
    runtimeChunk: "multiple",
    sideEffects: true,
    // 告知webpack使用 TerserPlugin进行代码压缩。
    // minimize: true,
    // 提供一个或者多个定制的terserPlugin实例，覆盖默认压缩工具
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       // ecma: 5,
    //       compress: {
    //         // 是否开启默认配置
    //         defaults: false,
    //         booleans: true,
    //         /** 如果arrows为true
    //          *  obj: {
    //          *    foo() { return x }   ->  foo: () => x
    //          *  }
    //          *
    //          */
    //         arrows: true,
    //         dead_code: true,
    //         collapse_vars: false,
    //         // 删除掉console语句
    //         drop_console: true,
    //       },
    //       // 把一些变量名进行丑化
    //       mangle: false,
    //     },
    //   }),
    // ],
    splitChunks: {
      chunks: "all",
    },
  },
};
