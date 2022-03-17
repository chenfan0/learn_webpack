module.exports = {
  output: {
    // 设置asset 模块打包后的名字，比如图片，字体图标这种资源打包后的名字
    assetModuleFilename: "[name:6][ext]",
    // 当通过异步导入例如import函数，设置要不要将异步导入的代码单独打包成一个chunk，默认为true
    asyncChunks: true,
    // 告诉webpack为HTML的<script>标签添加 charset='utf-8'的标识
    charset: true,
    // 设置打包后chunk的名称, 也可以是一个函数
    chunkFilename: "[name].js",
    // 设置每个输出bundle的名称
    filename: 'index.js',
    // 告诉webpack添加IIFE外层包裹生成的代码
    iife: true,
    // 设置html代码引入文件的前缀
    publicPath: '/',
    // 设置每次打包前，删除之前打包的文件
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset",
      },
    ],
  },
};
