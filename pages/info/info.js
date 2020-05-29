// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item_id: undefined,
        item: { id:1, type:"暂缺", money:"暂缺", detail:"暂缺", date:"暂缺" },
        account: [
            { id:1, type:4, money:100, detail:"打工", date:"2020.1.4" },
            { id:2, type:1, money:-23, detail:"吃饭", date:"2020.1.4"  },
            { id:4, type:3, money:-300, detail:"玩", date:"2020.1.4"  },
            { id:5, type:3, money:-500, detail:"买衣服", date:"2020.1.4"  },
            { id:6, type:6, money:1000, detail:"打工", date:"2020.1.4"  },
            { id:6, type:1, money:-230, detail:"聚餐", date:"2020.1.4"  },
        ],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({ item_id: options.item_id });
        let _account = this.data.account;
        
        for( let i=0; i<_account.length; i++){
            if( _account[i].id==options.item_id ){
                this.setData({ item: _account[i] })
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