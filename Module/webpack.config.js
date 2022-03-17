const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: {
      import: "./src/index.js",
      runtime: "runtime",
    },
  },
  output: {
    clean: true,
  },
  module: {
    generator: {
      asset: {
        // 自定义asset模块的publicPath
        publicPath: "assets",
        // 可以统一设置通过asset处理的模块的输出路径
        outputPath: "assets/",
      },
      // "asset/inline": {},
    },
    // parser和generator配置类似
    rules: [
      {
        test: /\.png$/,
        type: "asset",
        // 该选项仅与 asset asset/resource 模块类型一同起作用
        generator: {
          filename: "[name][ext]",
          // publicPath
          // outputPath
        },
        parser: {
          dataUrlCondition: {
            // 当处理的资源小于4kb，会被作为一个Base64编码的字符串注入到包中
            maxSize: 4 * 1024,
          },
        },
        // exclude 设置不处理的模块
        // include
      },
      {
        test: /\.css$/,
        // use可以是一个字符串数组，也可以是一个对象数组，也可以是单独一个对象
        // use: ["style-loader", "css-loader"],
        // 当只需要使用一个loader时，同时需要进行配置，可以设置为一个对象
        use: {
          loader: "css-loader",
          options: {},
        },
        // 当规则匹配时，使用第一个匹配的规则
        // oneOf: [
        //   {
        //     use: 'css-loader'
        //   },
        //   {
        //     use: ['style-loader', 'css-loader']
        //   }
        // ],
        // 告诉webpack该模块是否有副作用，用于tree-shaking
        // sideEffects: false,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
