// pages/add/add.js
import Toast from '../../dist/toast/toast';

Page({
    data: {
        date: undefined,
        money: undefined,
        detail: undefined,
        type: "其他",

        show_cale: false,
        min_date: new Date(2020, 0, 1).getTime(),
        max_date: new Date().getTime(),

        show_action_sheet: false,
        outcome_actions: [
            { name: '其他' },
            { name: '衣' },
            { name: '食' },
            { name: '住' },
            { name: '行' },
        ],
        income_actions: [
            { name: '其他' },
            { name: '收入1' },
            { name: '收入2' },
            { name: '收入3' },
            { name: '收入4' },
        ],
    },

    onLoad(option){
        let _item = JSON.parse(option.item)
        this.setData({
            date: _item.date,
            money: _item.money,
            detail: _item.detail,
            type: _item.type
        })

    },

    // 上拉菜单相关函数
    onDisplayeActionSheet(){
        this.setData({ show_action_sheet: true });
    },
    onCloseActionSheet() {
        this.setData({ show_action_sheet: false });
      },
    onSelectActionSheet(event) {
        this.setData({ type: event.detail.name })
        // console.log(event.detail);
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
            date: (function(date){
                date = new Date(date);
                return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
            })(event.detail),
        });
    },
    
    // 输入框失焦
    onBlur(event){
        // let money_str = event.detail.value;
        // let money = Number( money_str.slice(0, money_str.indexOf('.')+3) );
        let _money = Math.round(event.detail.value * 100) / 100;
        if( _money !== NaN ){
            this.setData({ money: _money })
        }
    },


    // 提交数据
    canSubmit(){
        if( !this.data.money ){
            Toast.fail("金额不能为0")
            return false;
        } else if( !this.data.date ){
            Toast.fail('日期未填写！');
            return false;
        } else{
            Toast.success('提交成功！');
            return true
        }
    },
    onSubmit(){
        if(this.canSubmit())
            wx.navigateBack();
    },
    // onContinueSubmit(){
    //     if(this.canSubmit()){
    //         this.setData({
    //             date: null,
    //             money: null,
    //             detail: null,
    //             type: "其他",
    //         })
    //     }
    // }
})