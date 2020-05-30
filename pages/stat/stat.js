// pages/stat/stat.js
var wxCharts = require('../../utils/wxcharts.js')

Page({
    data: {
        window_width: 375,
        active: 0,
        checked: false,
    },
    
    onLoad(){
        this.getData(); // 获取数据
    },
    
    drawChart(){
        try {
            this.setData({ window_width: wx.getSystemInfoSync().windowWidth})
        } catch (e) {          
            console.error('getSystemInfoSync failed!');
        }
        this.getColumnChart();
        this.getPieChart();
    },

    getData(){
        const that = this;

        wx.request({
          url: 'https://example.com/ajax/stat',
          dataType: 'json',
          success(res) {
            that.setData({  
                outcome_column_serie: res.data.outcome_column_serie,
                outcome_pie_series: res.data.outcome_pie_series,
                income_column_serie: res.data.income_column_serie,
                income_pie_series: res.data.income_pie_series,
            });
            that.drawChart();
          },  fail(err){
            console.error(err.errMsg);
          }
        })
      },

    onChangeSwitch({ detail }) {
        this.setData({ checked: detail });
    },
    

    onChangeTab() {
        // 留白
    },

    getColumnChart() {      
        let window_width = this.data.window_width;
        let _outcome_column_serie = this.data.outcome_column_serie;
        let _income_column_serie = this.data.income_column_serie;
        console.log(_outcome_column_serie);

        new wxCharts({
            canvasId: 'outcome_column_canvas',
            type: 'column',
            animation: true,
            width: window_width,
            height: window_width,
            categories: Object.keys(_outcome_column_serie),
            series: [
                {
                    name: '每月支出对比',
                    data: Object.values(_outcome_column_serie),
                },
                {
                    name: '每月收入对比',
                    data: Object.values(_income_column_serie),
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
    },

    getPieChart() {      
        let window_width = this.data.window_width;
        let _outcome_pie_series = this.data.outcome_pie_series;
        let _income_pie_series = this.data.income_pie_series;

        new wxCharts({
            animation: true,
            canvasId: 'outcome_pie_canvas',
            type: 'pie',
            width: window_width,
            height: window_width,
            dataLabel: true,
            series: _outcome_pie_series,
        });

        new wxCharts({
            animation: true,
            canvasId: 'income_pie_canvas',
            type: 'pie',
            width: window_width,
            height: window_width,
            dataLabel: true,
            series: _income_pie_series,
        });

    },
})