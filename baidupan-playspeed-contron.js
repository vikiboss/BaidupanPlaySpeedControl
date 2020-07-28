// ==UserScript==
// @name         百度网盘视频倍速播放
// @description  简单的倍速播放脚本，小白作品，欢迎提意见
// @version      1.5.1
// @author       Viki (or vikiboss) (https://github.com/vikiboss)
// @create       2020/6/15
// @lastmodified 2020/7/28
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
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert@2.1.2/dist/sweetalert.min.js
// ==/UserScript==

(function () {
  "use strict";
  // === 随窗口加载后调用本方法 ===
  window.onload = function () {
    // === 按钮集 ===
    var options = [
      { str: "x0.5", rate: 0.5 },
      { str: "x1.0", rate: 1.0 },
      { str: "x1.5", rate: 1.5 },
      { str: "x2.0", rate: 2.0 },
      { str: "加速" },
      { str: "减速" },
      { str: "自定义" },
      { str: "设置" },
      { str: "关于" },
    ];
    var player; // 播放区节点
    var label; // 显示倍速label
    var vip_div; // svip提示框
    var btn_div; // 按钮容器
    var settings = { preRate: 1.0, curRate: 1.0, saveRate: true }; // 默认全局配置
    var cur_version = "1.5.1";
    var last_updated = "2020/7/28";

    // === 声明读取配置的函数 ===
    var getSettings = () => {
      settings.preRate = Number(
        localStorage.getItem("preRate") ? localStorage.getItem("preRate") : 1.0
      ).toFixed(1);
      settings.curRate = Number(
        localStorage.getItem("curRate") ? localStorage.getItem("curRate") : 1.0
      ).toFixed(1);
      settings.saveRate = eval(localStorage.getItem("saveRate"));
    };

    // === 页面加载完后读取配置 ===
    if (!localStorage.hasOwnProperty("saveRate")) {
      settings.saveRate = true;
      localStorage.setItem("saveRate", settings.saveRate);
    }
    getSettings();
    if (settings.saveRate) {
      settings.curRate = settings.preRate;
      localStorage.setItem("curRate", settings.preRate);
    } else {
      settings.curRate = 1.0;
    }

    // === 判断倍速是否为有效倍速的函数 ===
    var checkRate = (rate) => {
      if (rate === "" || rate === null) return false;
      rate = Number(rate);
      return rate <= 0 || rate > 5 || isNaN(rate) ? false : true;
    };

    // === 定义修改播放倍速的函数 ===
    var setRate = (rate, player) => {
      if (settings.saveRate) {
        settings.preRate = rate;
        localStorage.setItem("preRate", settings.preRate);
      }
      var curRate = player.playbackRate();
      rate = Number(rate || curRate);
      if (!checkRate(rate)) return false;
      label.innerText = `当前倍速: ${Number(rate).toFixed(1)}`;
      player.setPlaybackRate(rate);
      settings.curRate = rate;
      localStorage.setItem("curRate", settings.curRate);
      return true;
    };

    // === 定时器，定期检查倍速 ===  // 别问我为什么这么写，问就是我太菜了QAQ
    setInterval(() => {
      var player;
      if (window.videojs) {
        player = window.videojs.getPlayers("video-player").html5player;
      }
      if (player) {
        setRate(settings.curRate, player.tech_);
      }
    }, 1000);

    // === 定义生成"倍速按钮"的函数 ===
    var generateBtn = (rateStr, rate) => {
      var btn = $('<a class="g-button" title="调节播放速度"></a>')[0];
      rate = rate || 1.0;
      btn.onclick = () => {
        if (rateStr === "关于") {
          // "关于"弹窗
          var about = $(`<div><a target="_blank" href="https://greasyfork.org/zh-CN/scripts/405388">检查更新🔨</a> |
            <a target="_blank" href="https://github.com/Vikiboss/baidupan-playspeed-control#%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97">更新日志📄</a><br />
            <a target="_blank" href="https://greasyfork.org/zh-CN/scripts/405388/feedback">去GreasyFork反馈🔗</a><br />
            <a target="_blank" href="https://vikiboss.top">作者菜鸡主页🏠</a> | 
            <a target="_blank" href="https://www.notion.so/vikiqaq/Donate-1a125c019f75467d880ceb6cb28b4cf6">支持💰</a>`)[0];
          swal({
            title: "关于",
            text: `当前版本:  ${cur_version}\n更新时间:  ${last_updated}\n脚本作者:  Viki`,
            content: about,
          });
          return;
        }
        if (!window.videojs.getPlayers("video-player").html5player) {
          swal({
            text: "视频控件还未初始化完成哦👀",
            icon: "error",
            buttons: false,
            timer: 1000,
          });
          return;
        }
        player = window.videojs.getPlayers("video-player").html5player.tech_;
        var curRate = player.playbackRate();

        // 判断options提供的字符串并对rate进行相应操作
        if (rateStr === "设置") {
          // "设置"弹窗
          var set = $(
            `<div><input id="saveRate" type="checkbox" ${
              settings.saveRate ? "checked" : ""
            }><span> 记忆历史播放倍速</span></div>`
          )[0];
          swal({
            title: "设置",
            content: set,
            buttons: {
              cancel: "取消",
              save: { text: "保存", value: "save" },
            },
          }).then((btn) => {
            if (btn === "save") {
              settings.saveRate = $("#saveRate")[0].checked;
              localStorage.setItem("saveRate", $("#saveRate")[0].checked);
              settings.preRate = 1.0;
              localStorage.setItem("preRate", 1.0);
              swal({
                text: "保存成功",
                icon: "success",
                buttons: false,
                timer: 1000,
              });
            }
          });
          return;
        } else if (rateStr === "自定义") {
          // "自定义"弹窗
          swal({
            title: "提示",
            content: {
              element: "input",
              attributes: {
                placeholder: "选择一个自定义(0-5)的播放倍速叭(～￣▽￣)～",
                type: "text",
              },
            },
            buttons: ["取消", "确认"],
          }).then((new_rate) => {
            if (checkRate(new_rate)) {
              settings.curRate = new_rate || curRate;
              localStorage.setItem("curRate", settings.curRate);
              swal({
                text: `成功设置播放速度为${Number(new_rate).toFixed(1)}`,
                icon: "success",
                buttons: false,
                timer: 1000,
              });
            } else {
              if (new_rate === null) return;
              swal({
                text: `${
                  new_rate || "你输入的"
                }不是一个指定范围内的有效数字哦＞﹏＜`,
                icon: "error",
                buttons: false,
                timer: 1000,
              });
            }
          });
        } else if (rateStr === "加速") {
          settings.curRate = curRate + 0.1;
        } else if (rateStr === "减速") {
          settings.curRate = curRate - 0.1;
        } else {
          settings.curRate = rate;
          swal({
            text: `成功设置播放速度为${Number(rate).toFixed(1)}`,
            icon: "success",
            buttons: false,
            timer: 1000,
          });
        }
      };

      // === 补充按钮内部文本与样式 ===
      var btnInnerHtml = `<span class="g-button-right">
              <em class="icon icon-speed"></em>
              <span class="text" style="width: auto;">${rateStr}</span>
            </span>`;
      btn.innerHTML = btnInnerHtml;
      btn.style.userSelect = "none";
      return btn;
    };

    // === 插入倍速按钮集 ===
    btn_div = $(".video-toolbar-buttonbox")[0];
    var btns = options.map((option) => generateBtn(option.str, option.rate));
    btn_div.append(...btns);

    // === 加入倍速显示 ===
    if (!settings.saveRate) settings.curRate = 1;
    label = $(
      `<span>当前倍速: ${Number(settings.curRate).toFixed(1)}</span>`
    )[0];
    label.style.color = "#09aaff";
    label.style.fontSize = "18px";
    label.style.display = "inline-block";
    label.style.margin = "5px";
    label.style.fontFamily = "Microsoft YaHei";
    btn_div.append(label);

    // === 去除多余元素 调整布局 ===
    var other_div = $(".video-other-video")[0];
    other_div.style.paddingTop = "50px";
    vip_div = $(".privilege-box")[0];
    vip_div.style.display = "none";
    btn_div.childNodes[1].style.display = "none";
    btn_div.childNodes[2].style.display = "none";
    btn_div.childNodes[3].style.display = "none";
  };
})();
