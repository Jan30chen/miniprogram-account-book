// pages/stat/stat.js
var wxCharts = require('../../utils/wxcharts.js')

Page({
    data: {
        window_width: 375,
        active: 0,
        
        outcome_column_serie: { "一月":1, "二月":2, "三月":3.3434, "四月":4, "五月":5, "六月":6 },
        outcome_pie_series: [
            {   name: '衣', data: 15,   }, 
            {   name: '食', data: 35,   }, 
            {   name: '行', data: 35,   }, 
            {   name: '住', data: 78,   }
        ],
        
        income_column_serie: { "一月":1, "二月":2, "三月":3.3434, "四月":4, "五月":5, "六月":6 },
        income_pie_series: [
            {   name: '衣', data: 15,   }, 
            {   name: '食', data: 35,   }, 
            {   name: '行', data: 35,   }, 
            {   name: '住', data: 78,   }
        ],    },

    
    onLoad(){
        try {
            this.setData({ window_width: wx.getSystemInfoSync().windowWidth})
        } catch (e) {          
            console.error('getSystemInfoSync failed!');
        }
    },

    onShow(){
        this.getOutcomeChart();
        this.getIncomeChart();
    },
    

    onChangeTab() {

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
            canvasId: 'outcome_pie_canvas',
            type: 'pie',
            width: window_width,
            height: window_width,
            dataLabel: true,
            series: this.data.outcome_pie_series,
        });

    },
})