// ==UserScript==
// @name         百度网盘视频倍速播放
// @namespace    baidupan-playspeed-control
// @version      1.3.0
// @update       2020/6/17
// @description  简单的倍速播放脚本，小白作品，欢迎提意见
// @github       https://github.com/vikiboss/baidupan-playspeed-control
// @author       vikiboss (https://github.com/vikiboss)
// @grant        none
// @license      MIT
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
    // === 按钮界面选项(可根据你的需要自行按照格式修改) ===
    var options = [
      { str: '慢速(x0.5)', rate: 0.5 },
      { str: '较慢(x0.75)', rate: 0.75 },
      { str: '标准(x1.0)', rate: 1.0 },
      { str: '中速(x1.25)', rate: 1.25 },
      { str: '快速(x1.5)', rate: 1.5 },
      { str: '极速(x2.0)', rate: 2.0 },
      { str: '自定义' },
    ];

    // === 定义生成"倍速按钮"的函数 ===
    var generateBtn = function (rateStr, rate) {
      var btn = document.createElement('a');
      btn.className = 'g-button';
      btn.setAttribute('title', '调节播放速度');
      rate = rate || 1.0;
      btn.onclick = function () {
        var DOMrate = window.videojs.getPlayers('video-player').html5player
          .tech_;
        if (rateStr === '自定义') {
          rate = prompt('请输入介于0-5的播放倍速:');
          rate = rate <= 0 || rate > 5 ? DOMrate.playbackRate : rate;
        }
        DOMrate.setPlaybackRate(rate);
      };

      var btnInnerHtml = `<span class="g-button-right">
          <em class="icon icon-speed"></em>
          <span class="text" style="width: auto;">${rateStr}</span>
        </span>`;
      btn.innerHTML = btnInnerHtml;
      return btn;
    };

    // === 去除带有"开通SVIP"提示且会除遮挡按钮的div框 ===
    var vip = document.getElementsByClassName('privilege-box')[0];
    vip.style.display = 'none';

    // === 在原网页的DOM中插入定义了的倍速按钮 ===
    var div = document.getElementsByClassName('video-toolbar-buttonbox')[0];
    var btns = options.map(function (option) {
      return generateBtn(option.str, option.rate);
    });
    btns.forEach(function (node) {
      div.append(node);
    });

    // === 去除多余按钮 ===
    div.childNodes[2].style.display = 'none';
    div.childNodes[3].style.display = 'none';
  };
})();
