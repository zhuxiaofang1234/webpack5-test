//配置文件是运行在nodeJs环境中的，使用的是commonjs规范
// Node.js的核心模块，专门用来处理文件路径
const path = require("path");
module.exports = {
    //入口
    entry: "./src/main.js",

    // 输出
    output:{
     // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "main.js",
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
            }
          },

    ],
  },
   // 插件
   plugins: [],
   // 模式
   mode: "development", // 开发模式
}