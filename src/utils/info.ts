// 用来打印最新的油猴函数注释, 便于编写完后赋值并手动添加

const now = new Date();
const [year, month, day] = [
  now.getFullYear(),
  now.getMonth() + 1,
  now.getDate(),
];

const VERSION = '1.6.3';
const DATE = `${year}/${month}/${day}`;

const logInfo = () =>
  console.log(`
// ==UserScript==
// @name         百度网盘视频倍速播放
// @description  简单的倍速播放脚本，小白作品，欢迎提意见
// @version      ${VERSION}
// @author       Viki (or vikiboss) (https://github.com/vikiboss)
// @create       2020/6/15
// @lastmodified ${DATE}
// @feedback-url https://github.com/Vikiboss/baidupan-playspeed-control/issues
// @icon         https://i.loli.net/2020/06/19/eWDyG1RhCBkTINl.png
// @homepageURL  https://greasyfork.org/zh-CN/scripts/405388
// @github       https://github.com/vikiboss/baidupan-playspeed-control
// @namespace    baidupan-playspeed-control
// @license      MIT
// @run-at       document-end
// @grant        none
// @include      *://pan.baidu.com/mbox*
// @include      *://pan.baidu.com/play*
// @include      *://pan.baidu.com/disk/home*
// @require      https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert/dist/sweetalert.min.js
// ==/UserScript==
`);

logInfo();
