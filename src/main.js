import count from "./js/count.js";
import sum from "./js/sum.js";

//想要webpack打包资源，必须引入该资源
import "./css/iconfont.css"
import "./css/index.css"
import "./less/index.less"
import "./sass/index.sass"
import "./styl/index.styl"

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));