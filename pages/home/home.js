// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 2,
        account: [
          {id:1, type:0, money:-100, detail:"1上衣"},
          {id:2, type:1, money:-100, detail:"2上衣"},
          {id:3, type:2, money:-100, detail:"3上衣"},
          {id:4, type:3, money:-100, detail:"4上衣"},
          {id:5, type:3, money:-100, detail:"5上衣"},
          {id:6, type:2, money:-100, detail:"6上衣"},
          {id:6, type:1, money:-100, detail:"7不是上衣"},
        ],
        money_type:["衣","食","住","行"],
        money_type_color:["#1989fa","#07c160","#ee0a24","#ff976a"],
    },

    onClick(event){
      wx.navigateTo({
        url: '../../pages/add/add',
      });
      wx.showToast({
        title: `点击了按钮？`,
      });
    },

    countMoney(){
      let income = 0,outcome = 0;
      let account = this.data.account;
      for (let index in account) {
        let money = account[index].money;
        if(money >= 0){
          income += money;
        }
        outcome -= money;
       }
       this.setData({
         income:income,
         outcome:outcome
       })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      this.countMoney()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})