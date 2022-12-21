//配置文件是运行在nodeJs环境中的，使用的是commonjs规范
// Node.js的核心模块，专门用来处理文件路径
const path = require("path");
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry: "./src/main.js",

    // 输出
    output:{
    path: undefined, //开发环境下不用输出

    // filename: 输出文件名
    filename: "js/main.js", //将js文件输出到 dist/js目录中
    },

    // 加载器
  module: {
    rules: [
        {
            // 用来匹配 .css 结尾的文件
            test: /\.css$/,
            // use 数组里面 Loader 执行顺序是从右到左
            use: [
                "style-loader",  //将js中css通过创建style标签添加到html文件中生效
                "css-loader" //将css资源编译成commonjs的模块到js中
            ],
          },
          {
            test: /\.less$/i,
            use: [
              // compiles Less to CSS
              'style-loader',
              'css-loader',
              'less-loader',
            ],
          },
          {
            test: /\.s[ac]ss$/,
            use: [
              "style-loader", // 将 JS 字符串生成为 style 节点
             "css-loader",    // 将 CSS 转化成 CommonJS 模块
             "sass-loader"   // 将 Sass 编译成 CSS
            ],
          },
          {
            test: /\.styl$/,
            use: ["style-loader", "css-loader", "stylus-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
              }
            },
            generator:{
              // 将图片文件输出到 dist/imgs 目录中
              // 将图片文件命名 [hash:8][ext][query]
              // [hash:8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
              filename: "imgs/[hash:8][ext][query]",
            }
          },
          {
            test: /\.(ttf|woff2?|map3|map4)$/,
            type: "asset/resource",
            generator: {
              filename: "media/[hash:8][ext][query]",
            },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/, // 排除node_modules代码不编译
            loader: "babel-loader",
          },
    ],
  },
   // 插件
   plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    })
   ],
    // 开发服务器:开发服务器不会输出资源，在内存中编译打包的
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3030", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },
   // 模式
   mode: "development", // 开发模式
}