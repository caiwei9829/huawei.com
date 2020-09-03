import $ from './library/jquery.js';
import { cookie } from './library/cookie.js';
import index from './library/index.js';
import product from './library/product.js';
import magnifying from './library/magnifying.js';
import './library/slideshow.js';
//首页
index();
//详情页
product();
//放大镜
magnifying();
// 轮播图
$('.sliders').slider();