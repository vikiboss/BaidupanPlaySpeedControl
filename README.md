# 百度网盘视频倍速播放脚本

## 介绍

一个菜鸡写的菜鸡油猴脚本，用于控制百度网盘在线播放视频的速度。欢迎提建议。

## 项目背景

快到期末了，肯定很多小伙伴和本菜鸡一样准备期末“大预习” （当代大学生几乎都是考试周学完本学期所有内容）。

很多小伙伴学习方式就是找网盘的学习资源，在线看网课。

然而百度网盘有限制，电脑端不支持倍速播放，手机端非会员也不能倍速播放。

于是本菜鸡写了一个简单的脚本，用于调节播放速度。

看在本菜鸡造福广大大学生的份上，希望期末对本菜鸡温柔一点，希望人没事 🙏🙏🙏

## 下载 & 使用

### 普通用户

建议使用微软的 [新版 Edge 浏览器][edge] ，然后按照以下步骤操作

1.  到 Microsoft 商店 下载安装 [TamperMonkey][micro-tm] (一个浏览器的扩展程序，脚本依赖于这个扩展程序)
2.  到 [GreasyFork][script] 下载安装脚本

### 能科学上网的用户

建议使用谷歌的 [Chrome 浏览器][chrome] ，然后按照以下步骤操作

1.  到 Chrome 商店下载安装 [TamperMonkey][chrome-tm]
2.  到 [GreasyFork][script] 下载安装脚本

## 反馈

- [Github Issues][issue]

- [GreasyFork Feedback][feedback]

## 特征

### 主界面

![主界面][img1]

### 倍速调节成功

![倍速调节成功][img2]

### 自定义倍速

![自定义倍速][img3]

### 设置页

![设置页][img4]

### 关于页

![关于页][img5]

## 更新日志

### 2020/8/20 1.6.0 版本

- 新增：设置页可勾选是否显示倍速提示的弹窗

- 新增：他人分享页支持倍速播放（意义不大，不保存到自己网盘只能试看）

- 新增：倍速大于 2 时 在倍速显示处提示用户视频可能卡顿

- 新增：[代码仓库][repo]加入 MIT 许可证

- 修改：倍速按钮提示文本对应按钮作用

- 修改：更换关于页失效链接

### 2020/7/28 1.5.1 版本

- 仅将之前失效短链接替换为原有的有效链接

- 关于页微调

### 2020/7/3 1.5 版本

- 新增设置页，可选是否记忆播放倍速

- 引入 SweetAlert 弹窗，优化用户体验

- 引入 Jquery，简化 DOM 操作，优化代码

- 优化界面布局，优化部分细节问题

- 修复上一个版本播放倍速以及倍速显示不及时更新的问题

### 2020/6/19 1.4 版本

- 新增加速、减速按钮

- 新增当前播放倍率显示

- 精简按钮群

- 更好的交互体验

- 细节布局微调

### 2020/6/17 1.3 版本

- 优化交互 添加更多倍速选项

- 支持自定义倍速

- 去除无用 SVIP 提示框以及多余按钮

### 2020/6/16 1.1/1.2 版本

- 优化交互和按钮文字 便于操作

### 2020/6/15 1.0 版本

- 添加基本的四个倍速按钮

- 实现倍速播放

## 感谢以下支持我的小可爱

近期有收到支持打赏，贴个打赏人名单 💕

| ID   | 方式   | 金额    | 时间      | 留言                   |
| ---- | ------ | ------- | --------- | ---------------------- |
| \*生 | 微信   | ￥ 5.00 | 2020/6/16 | 网盘倍速播放不错哦!    |
| l\*k | 微信   | ￥ 2.33 | 2020/6/30 | 脚本好，请你吃糖。     |
| \*船 | 微信   | ￥ 6.66 | 2020/7/10 | 请你冰棍儿，考试顺利。 |
| \*边 | 微信   | ￥ 0.66 | 2020/8/3  | 非常好用!              |
| \*文 | 支付宝 | ￥ 1.75 | 2020/8/13 | （无）                 |

[传送门][donate]

## 关于作者

菜鸡的主页：[Viki's Home][home]

菜鸡的 Notion：[Viki's Notion][notion]

[edge]: https://www.microsoft.com/zh-cn/edge
[micro-tm]: https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN
[script]: https://greasyfork.org/zh-CN/scripts/405388
[chrome]: https://google.com/chrome
[chrome-tm]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[repo]: https://github.com/vikiboss/baidupan-playspeed-control
[donate]: https://www.multmax.top/images/2020/08/20/1.png
[home]: https://vikiboss.top
[notion]: https://www.notion.so/vikiqaq/Viki-a4c5dd3c21a7418fb37212d25ecba3c2
[issue]: https://github.com/Vikiboss/baidupan-playspeed-control/issues
[feedback]: https://greasyfork.org/zh-CN/scripts/405388/feedback
[img1]: https://s1.ax1x.com/2020/08/05/a6Yju8.png
[img2]: https://s1.ax1x.com/2020/08/05/a6tSEQ.png
[img3]: https://s1.ax1x.com/2020/08/05/a6t94s.png
[img4]: https://s1.ax1x.com/2020/08/20/dGBuad.png
[img5]: https://s1.ax1x.com/2020/08/20/dGDAFs.png
