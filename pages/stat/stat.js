// pages/stat/stat.js
var wxCharts = require('../../utils/wxcharts.js')

Page({
    data: {
        window_width: 375,
        active: 0,
        checked: false,
        
        outcome_column_serie: { "一月":11123, "二月":2000, "三月":323, "四月":4333, "五月":5000 },
        outcome_pie_series: [
            {   name: '衣', data: 15,   }, 
            {   name: '食', data: 35,   }, 
            {   name: '行', data: 35,   }, 
            {   name: '住', data: 78,   }
        ],
        
        
        income_column_serie: { "一月":20000, "二月":20000, "三月":20000, "四月":20000, "五月":20000 },
        income_pie_series: [
            {   name: '收入1', data: 234,   }, 
            {   name: '收入2', data: 323,   }, 
            {   name: '收入3', data: 3534,   }, 
            {   name: '收入4', data: 1565,   }
        ],    },

    
    onLoad(){
        try {
            this.setData({ window_width: wx.getSystemInfoSync().windowWidth})
        } catch (e) {          
            console.error('getSystemInfoSync failed!');
        }
    },

    onShow(){
        this.getIncomeChart();
        this.getOutcomeChart();
    },

    onChangeSwitch({ detail }) {
        // 需要手动对 checked 状态进行更新
        this.setData({ checked: detail });
    },
    

    onChangeTab() {
        // 留白
    },

    getOutcomeChart() {      
        let column_serie = this.data.outcome_column_serie;
        let window_width = this.data.window_width;

        new wxCharts({
            canvasId: 'outcome_column_canvas',
            type: 'column',
            animation: true,
            width: window_width,
            height: window_width,
            categories: Object.keys(column_serie),
            series: [
                {
                    name: '每月支出对比',
                    data: Object.values(this.data.outcome_column_serie),
                },
                {
                    name: '每月收入对比',
                    data: Object.values(this.data.income_column_serie),
                    // format: function (val) {
                    //     return val.toFixed(2);
                    // }
                }
            ],
            yAxis: {
                min: 0
            },
            xAxis: {
                disableGrid: false,
            },
            extra: {
                column: {
                    width: 15
                }
            },
        });


        new wxCharts({
            animation: true,
            canvasId: 'outcome_pie_canvas',
            type: 'pie',
            width: window_width,
            height: window_width,
            dataLabel: true,
            series: this.data.outcome_pie_series,
        });

    },

    getIncomeChart() {      
        let column_serie = this.data.income_column_serie;
        let window_width = this.data.window_width;

        new wxCharts({
            canvasId: 'income_column_canvas',
            type: 'column',
            animation: true,
            width: window_width,
            height: window_width,
            categories: Object.keys(column_serie),
            series: [{
                name: '每月支出对比',
                data: Object.values(column_serie),
                // format: function (val) {
                //     return val.toFixed(2);
                // }
            }],
            yAxis: {
                min: 0
            },
            xAxis: {
                disableGrid: false,
            },
        });


        new wxCharts({
            animation: true,
            canvasId: 'income_pie_canvas',
            type: 'pie',
            width: window_width,
            height: window_width,
            dataLabel: true,
            series: this.data.income_pie_series,
        });

    },
})