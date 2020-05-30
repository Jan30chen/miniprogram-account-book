// pages/home/home.js
Page({

    data: {
        active: 2,
        account: undefined,
        money_type: ["衣","食","住","行","收入1","收入2","收入3","收入4"],
        money_type_color:  ["#8dbb25","#008f5a","#0595b8","#2b71ad","#f3e500","#fcc60c","#f28e1c","#e7621f"],
    },

    onLoad(options) {
      this.getData()
    },

    onClick(event){
      wx.navigateTo({
        url: '../../pages/add/add',
      });
    },

    getData(){
      const that = this;
      wx.request({
        url: 'https://example.com/ajax/account',
        dataType: 'json',
        success(res) {
          that.setData({  account: res.data.account });
          that.countMoney()
        },  fail(err){
          console.error(err.errMsg);
        }
      })
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
    
})