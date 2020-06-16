// ==UserScript==

// @name         百度网盘视频倍速播放(2020/6/16更新）
// @namespace    none
// @version      1.2.0
// @description  简单的倍速播放脚本，小白作品，欢迎提意见
// @github       https://github.com/vikiboss/baidupan-playspeed-control
// @author       vikiboss (https://github.com/vikiboss)
// @grant        none
// @license      MIT
// @include      *://pan.baidu.com/disk/home*
// @include      *://yun.baidu.com/disk/home*
// @include      *://pan.baidu.com/s*
// @include      *://yun.baidu.com/s*
// @include      *://pan.baidu.com/play*

// ==/UserScript==

(function () {
  'use strict';
  window.onload = function () {
    
    // === 按钮设置 ===
    var options = [
      { str: '慢速(x0.5)', rate: 0.5 },
      { str: '较慢(x0.75)', rate: 0.75 },
      { str: '标准(x1.0)', rate: 1.0 },
      { str: '中速(x1.25)', rate: 1.25 },
      { str: '快速(x1.5)', rate: 1.5 },
      { str: '极速(x2.0)', rate: 2.0 },
    ];

    
    // === 生成按钮函数 ===
    var generateBtn = function (rateStr, rate) {
      var btn = document.createElement('a');
      btn.className = 'g-button';
      btn.setAttribute('title', '播放速度');
      btn.onclick = function () {
        window.videojs
          .getPlayers('video-player')
          .html5player.tech_.setPlaybackRate(rate);
      };
      var btnInnerHtml =
        '<span class="g-button-right"><em class="icon icon-speed" title="调节倍速"></em><span class="text" style="width: auto;">' +
        rateStr +
        '</span></span>';
      btn.innerHTML = btnInnerHtml;
      return btn;
    };
    
    // === 去除vip的div框 ===
    var vip = document.getElementsByClassName('privilege-box')[0];
    vip.style.display = 'none';
    
    // === 插入倍速按钮 ===
    var div = document.getElementsByClassName('video-toolbar-buttonbox')[0];
    var btns = options.map(function (option) {
      return generateBtn(option.str, option.rate);
    });
    btns.forEach(function (node) {
      div.append(node);
    });
  };
})();
