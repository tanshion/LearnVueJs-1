// 1.使用commonjs模块化规范
const {add, mul} = require('./js/mathUtils.js');

console.log(add(20, 20));
console.log(mul(20, 20));

// 2.使用ES6模块化规范
import {name, height, age} from './js/info';
console.log(name);
console.log(height);
console.log(age);

// 3.依赖css文件
require('./css/normal.css');

// 4.依赖less文件
require('./css/special.less');
document.writeln('你好啊, 李银河!');