// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 2,
        account: undefined,
        money_type: ["衣","食","住","行","收入1","收入2","收入3","收入4"],
        money_type_color:  ["#1989fa","#07c160","#ee0a24","#ff976a","#1989fa","#07c160","#ee0a24","#ff976a"],
    },

    onClick(event){
      wx.navigateTo({
        url: '../../pages/add/add',
      });
    },

    getData(){
      let _account = [
        { id:1, type:4, money:100, detail:"打工", date:"2020.1.4" },
        { id:2, type:1, money:-23, detail:"吃饭", date:"2020.1.4"  },
        { id:4, type:3, money:-300, detail:"玩", date:"2020.1.4"  },
        { id:5, type:3, money:-500, detail:"买衣服", date:"2020.1.4"  },
        { id:6, type:6, money:1000, detail:"打工", date:"2020.1.4"  },
        { id:6, type:1, money:-230, detail:"聚餐", date:"2020.1.4"  },
      ];

      this.setData({ account:_account });
    },

    countMoney(){
      let income = 0,outcome = 0;
      let account = this.data.account;
      for (let index in account) {
        let money = account[index].money;
        if(money >= 0){
          income += money;
        } else{
          outcome += money;
        }
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
      this.getData()
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