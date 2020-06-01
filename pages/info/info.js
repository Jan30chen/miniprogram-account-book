// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item_id: undefined,
        item: { id:1, type:"暂缺", money:"暂缺", detail:"暂缺", date:"暂缺" },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({ item_id: options.item_id });
        this.getData();
    },

    getData(){
        const that = this;
        wx.request({
          url: 'https://example.com/ajax/account',
          dataType: 'json',
          success(res) {
            that.setData({  account: res.data.account });
            that.getItem();
          },  fail(err){
            console.error(err.errMsg);
          }
        })
      },

    getItem(){
      let _account = this.data.account;
        
      for( let i=0; i<_account.length; i++){
          if( _account[i].id==this.data.item_id ){
              this.setData({ item: _account[i] })
              return
          }
      }
    },

    onDel(){
        wx.showToast({
          title: '删除成功！',
          icon: "success",
        })
    },

    onEdit(){
        let _item = JSON.stringify(this.data.item);

        wx.navigateTo({url:`../../pages/edit/edit?item=${ _item }`})
        // wx.navigateTo(`../../pages/add/add?item=${ _item }`)
    }
})