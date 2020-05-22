// pages/add/add.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        date: undefined,
        money: undefined,
        detail: undefined,
        kind: undefined,

        show_cale: false,
        min_date: Number(new Date(2020, 0, 1)),
        max_date: Number(new Date()),

        show_action_sheet: false,
        outcome_actions: [
            { name: '衣' },
            { name: '食' },
            { name: '住' },
            { name: '行' },
        ],
        income_actions: [
            { name: '收入1' },
            { name: '收入2' },
            { name: '收入3' },
            { name: '收入4' },
        ],
    },
    // 上拉菜单相关函数
    onDisplayeActionSheet(){
        this.setData({ show_action_sheet: true });
    },
    onCloseActionSheet() {
        this.setData({ show_action_sheet: false });
      },
    onSelectActionSheet(event) {
        this.setData({ kind:event.detail.name })
        console.log(event.detail);
    },
    // 日历相关函数
    onDisplayCale() {
        console.log("display!");
        this.setData({ show_cale: true });
    },
    onCloseCale() {
        this.setData({ show_cale: false });
    },
    onConfirmCale(event) {
        this.setData({
            show_cale: false,
            date: this.formatDate(event.detail),
        });
    },
    formatDate(date) {
        date = new Date(date);
        return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    
    onBlur(event){
        // let money_str = event.detail.value;
        // let money = Number( money_str.slice(0, money_str.indexOf('.')+3) );
        let money = Math.round(event.detail.value * 100) / 100;
        if(money !== NaN){
            this.setData({ money: money })
        }
    },
    // 标签页切换
    onChangeTabs(event){
        this.setData({
            date: null,
            money: null,
            detail: null,
            kind: null,
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

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // this.setData(({ kind:this.data.actions[0].name }))
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