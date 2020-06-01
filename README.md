# 记账小程序

记账小程序-[miniprogram-account-book](https://github.com/Jan30chen/miniprogram-account-book)

小程序实现的记账小程序前台界面，后台使用Mock模拟获取，未使用云开发数据库

## 实现技术

+ 基础：微信小程序
+ UI组件：使用[vant-weapp](https://github.com/youzan/vant-weapp)提供的丰富组件
+ 后台数据：使用[Mock](https://github.com/nuysoft/Mock)进行模拟获取
+ 统计图制作：使用[wx-charts](https://github.com/xiaolin3303/wx-charts)提供的接口

## 程序界面

### 账本

+ Home页面：
  + 展示后台数据，上方区域统计本月支出收入概略；下方区域使用单元格展示记录；
  + 每条记录包括日期、金额和日期等信息，使用不同颜色的标签区分支出和收入，标注明细类型，更加直观和美观；
  + 点击记录可进入Info页面，查询账单明细
  + 点击加号按钮进入Add页面，添加新账单
+ Info页面：
  + 上方区域展示某条账单的详细信息
  + 下方区域提供删除与编辑两项功能按钮
    + 编辑：点击进入Edit页面
    + ~~删除：暂无~~
+ Edit页面：提供对某条记录的展示，大致布局同Add页面
+ Add页面：
  + 上方选择账单类型，选择支出与收入
  + 中间为账单信息录入
    + 【金额】一栏，点击弹出数字输入键盘
    + 【日期】一栏，点击“选择日期”，弹出日历选择器
    + 【类型】一栏，点击“选择类型”，弹出下拉菜单
  + 下方提交功能
    + 【提交】提交并返回
    + 【继续提交】提交后不回首页，以便继续提交

### 统计

+ Stat页面：
  + 【占比】页面：提供各类型账单的统计总数与占比，通过按钮切换支出与收入的显示
  + 【统计】页面：提供半年范围内的收入支出的柱状统计图

## 部分预览

<img src=".\img\Home.png" style="zoom:60%;" /><img src=".\img\Info.png" style="zoom:60%;" /><img src=".\img\stat1.png" style="zoom:60%;" />



