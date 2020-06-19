// ==UserScript==
// @name         百度网盘视频倍速播放
// @description  简单的倍速播放脚本，小白作品，欢迎提意见
// @version      1.4.0
// @author       vikiboss (https://github.com/vikiboss)
// @create       2020/6/15
// @lastmodified 2020/6/19
// @feedback-url https://github.com/Vikiboss/baidupan-playspeed-control/issues
// @icon         https://i.loli.net/2020/06/19/eWDyG1RhCBkTINl.png
// @homepageURL  https://greasyfork.org/zh-CN/scripts/405388
// @github       https://github.com/vikiboss/baidupan-playspeed-control
// @namespace    baidupan-playspeed-control
// @license      MIT
// @run-at       document-end
// @grant        none
// @include      *://pan.baidu.com/s*
// @include      *://pan.baidu.com/play*
// @include      *://pan.baidu.com/disk/home*
// @include      *://yun.baidu.com/s*
// @include      *://yun.baidu.com/disk/home*
// ==/UserScript==

(function () {
  'use strict';
  // === 随窗口加载后调用本方法 ===
  window.onload = function () {
    // === 按钮集 ===
    var options = [
      { str: 'x0.5', rate: 0.5 },
      { str: 'x1.0', rate: 1.0 },
      { str: 'x1.5', rate: 1.5 },
      { str: 'x2.0', rate: 2.0 },
      { str: '加速' },
      { str: '减速' },
      { str: '自定义' },
    ];
    let player; // 播放区节点
    var label; // 显示倍速label
    var vip_div; // svip提示框
    var btn_div; // 按钮容器

    // === 定义生成"倍速按钮"的函数 ===
    var generateBtn = (rateStr, rate) => {
      var btn = document.createElement('a');
      btn.className = 'g-button'; // 加上类
      btn.setAttribute('title', '调节播放速度');
      rate = rate || 1.0;
      btn.onclick = () => {
        player = window.videojs.getPlayers('video-player').html5player.tech_;
        var curRate = player.playbackRate();
        // 判断options提供的字符串并对rate进行相应操作
        switch (rateStr) {
          case '自定义':
            rate = prompt('请输入0-5的播放速率:') || curRate;
            rate = rate <= 0 || rate > 5 ? curRate : rate;
            break;
          case '加速':
            rate = curRate <= 0 ? 0.1 : curRate + 0.1;
            break;
          case '减速':
            rate = curRate <= 0 ? 0.1 : curRate - 0.1;
        }
        player.setPlaybackRate(rate);
        label.innerText = `当前倍速: ${Number(rate).toFixed(1)}`;
      };
      // 补充按钮内部文本与样式
      var btnInnerHtml = `<span class="g-button-right">
          <em class="icon icon-speed"></em>
          <span class="text" style="width: auto;">${rateStr}</span>
        </span>`;
      btn.innerHTML = btnInnerHtml;
      btn.style.userSelect = 'none';
      return btn;
    };

    // === 插入倍速按钮集 ===
    btn_div = document.getElementsByClassName('video-toolbar-buttonbox')[0];
    var btns = options.map((option) => generateBtn(option.str, option.rate));
    btn_div.append(...btns);

    // === 加入倍速显示 ===
    label = document.createElement('span');
    label.innerText = `当前倍速: 1.0`;
    label.style.color = '#09aaff';
    label.style.fontSize = '18px';
    label.style.display = 'inline-block';
    label.style.margin = '5px';
    label.style.fontFamily = 'Microsoft YaHei';
    var br = document.createElement('br');
    btn_div.append(br);
    btn_div.append(label);

    // === 去除多余元素 调整布局 ===
    var other_div = document.getElementsByClassName('video-other-video')[0];
    other_div.style.paddingTop = '50px';
    vip_div = document.getElementsByClassName('privilege-box')[0];
    vip_div.style.display = 'none';
    btn_div.childNodes[1].style.display = 'none';
    btn_div.childNodes[2].style.display = 'none';
    btn_div.childNodes[3].style.display = 'none';
  };
})();
