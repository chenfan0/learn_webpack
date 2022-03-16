// entry

module.exports = {
  // 传入一个数组
  // 会将这三个文件挨个进行处理，并打包成一个文件。打包后的文件为main.js
  // entry: ["./src/index.js", "./src/main.js", "./src/foo.js"],

  // 传入一个对象
  // 会对这三个文件进行单独打包，打包后的文件名为[key].js
  // entry: {
  //   // 这里的value同样可以是字符串，字符串数组，或者对象。
  //   foo: "./src/foo.js",
  //   index: ["./src/index.js", "./src/foo.js"],
  //   main: {
  //     import: './src/main.js',
  //     // 这里的filename可以单独设置文件名
  //     filename: 'main.js',
  //     // 当引用了其他模块时，需要一些额外的代码来实现，这些代码就是runtime代码
  //     // 如果设置了runtime: 'runtime'，那么这些代码就会单独抽离出一个文件
  //     runtime: 'runtime'
  //   },
  // },

  entry: {
    // 将axios单独打成一个包
    axios: {
      import: "axios",
      runtime: "runtime",
    },
    dependOn1: {
      // dependOn1依赖axios包，这样dependOn1打包的文件就不会有axios
      import: './src/js/dependOn1',
      dependOn: 'axios'
    },
    // dependOn2没有dependOn axios，所以它打包的文件中，存在axios的代码
    dependOn2: "./src/js/dependOn2.js",
  },
  output: {
    // 每次打包先删除之前打包的文件
    clean: true,
  },
};
