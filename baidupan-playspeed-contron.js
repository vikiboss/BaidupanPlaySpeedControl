// ==UserScript==
// @name         百度网盘视频倍速播放(2020/6/15更新）
// @namespace    none
// @version      1.0.0
// @description  简单的倍速播放脚本，小白作品，欢迎提意见
// @homme        https://github.com/vikiboss/baidupan-playspeed-control
// @author       vikiboss (https://github.com/vikiboss)
// @grant        none
// @license      MIT
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @require      https://code.jquery.com/jquery-latest.js
// @include      *://pan.baidu.com/disk/home*
// @include      *://yun.baidu.com/disk/home*
// @include      *://pan.baidu.com/s*
// @include      *://yun.baidu.com/s*
// @include      *://pan.baidu.com/play*

// ==/UserScript==

(function () {
  'use strict';
  window.onload = function () {
    var options = [
      { str: '慢速', rate: 1.0 },
      { str: '中速', rate: 1.5 },
      { str: '快速', rate: 2 },
      { str: '极速', rate: 3 },
    ];
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
    var div = document.getElementsByClassName('video-toolbar-buttonbox')[0];
    var btns = options.map(function (option) {
      return generateBtn(option.str, option.rate);
    });
    btns.forEach(function (node) {
      div.append(node);
    });
  };
})();
