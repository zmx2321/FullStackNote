var workshop = {
    init: function () {
        var me = this;
        me.bind();
        me.render();
        //车间实时产量
        me.fetch("./data/data7.json").then(function (data) {
            me.aliveChartInit(data);
        });
        //质量趋势图
        me.fetch("./data/data8.json").then(function (data) {
            me.trendChartInit(data);
        });
        //设备综合饼图
        me.fetch("./data/data9.json").then(function (data) {
            me.qualityChartInit(data);
        });
        //周生产任务
        me.fetch("./data/data10.json").then(function (data) {
            me.weekProdTask(data);
        });
        //设备故障信息
        me.fetch("./data/data11.json").then(function (data) {
            me.equFaultInfo(data);
        });
    },
    render: function () {
        this.aliveChartEL = document.getElementById('js-alive')
        this.trendChartEL = document.getElementById('js-trend');
        this.proplanChartEL = document.getElementById('js-proplan');
        this.tasksEL = $("#js-tasks");
        this.equfailEL = $("#js-equfail");
    },
    bind: function () {
        var conHeight = $(window).height();
        var divanyHeight = conHeight * 0.5;
        $(".div_any").height(divanyHeight);
        var div_tableHeight = conHeight - 245 - divanyHeight;
        $(".div_table").height(div_tableHeight);

        var height1 = $(".div_any01").height();
        var heightOrder = height1 * 0.06;
        $('.div_any_child_order').css('margin-top', heightOrder);

        var divtableboxHeight = $(".div_table_box").height();
        var divanychildHeight = divtableboxHeight - 25;
        $(".div_any_child_table").height(divanychildHeight);
    },
    timealiveChart: function (chart) {
        var me = this;
        //1小时更细一次数据
        setInterval(function () {
            console.log("激活车间实时产量");
            me.fetch("./data/data7.json").then(function (data) {
                chart.setOption({
                    series: [{
                        data: data.realdatas
                    }]
                });
            });
        }, 60 * 60 * 1000);
    },
    aliveChartInit: function (data) {
        var me = this;
        var aliveChart = echarts.init(me.aliveChartEL);
        var aliveChartOption = {
            color: ["#81b740"],
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].value.join("：")
                },
                axisPointer: {
                    animation: true
                }
            },
            grid: {
                top: '12%',
                left: '5%',
                right: '12%',
                bottom: '5%',
                containLabel: true
            },
            textStyle: {
                color: "#ccc"
            },
            xAxis: [{
                type: "time",
                axisTick: {
                    alignWithLabel: true
                },
                // data: ["2019/01/16", "2019/01/17", "2019/01/18", "2019/01/19", "2019/01/20"]
            }],
            yAxis: {
                type: "value",
                min: 0,
                max: 70,
                // interval: 20,
                // radius: "100%"
                // axisLabel: {
                //     formatter: '{value}%'
                // }
            },
            calculable: true,
            series: [{
                name: "运转率",
                type: "line",
                smooth: true,
                data: data.realdatas,
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                }
            }]
        };
        aliveChart.setOption(aliveChartOption);
        // workshop.aliveChart = aliveChart;
        me.timealiveChart(aliveChart);
    },
    trendChartInit: function (data) {
        var me = this;
        var trendChart = echarts.init(me.trendChartEL);
        var trendChartOption = {
            color: ['#d9a503', '#2551bb', '#81b740', '#da70d6', '#ff7f50'],
            tooltip: {
                trigger: "axis"
            },
            textStyle: {
                color: "#ccc"
            },
            grid: {
                top: "10%",
                left: '5%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
            legend: {
                data: ["冲压", "机加", "定子", "总装", "OD300"],
                x: "center",
                y: "bottom",
                textStyle: {
                    color: "#ccc"
                }
            },
            xAxis: [{
                type: "category",
                axisTick: {
                    alignWithLabel: true
                },
                data: data.xAxis
            }],
            yAxis: {
                type: "value",
                min: 0,
                max: 100,
                interval: 20,
                // radius: "100%"
                axisLabel: {
                    formatter: '{value}%'
                }
            },
            calculable: true,
            series: [{
                    name: "冲压",
                    type: "line",
                    smooth: true,
                    data: data.chongya
                },
                {
                    name: "机加",
                    type: "line",
                    smooth: true,
                    data: data.jijia
                },
                {
                    name: "定子",
                    type: "line",
                    smooth: true,
                    data: data.dingzi
                },
                {
                    name: "总装",
                    type: "line",
                    smooth: true,
                    data: data.zongzhuang
                }, {
                    name: "OD300",
                    type: "line",
                    smooth: true,
                    data: data.od
                }
            ]
        };
        trendChart.setOption(trendChartOption);
    },
    qualityChartInit:function(data){
        var qualityChart = echarts.init(document.getElementById('js-multiple'));
        var option7 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            textStyle: {
                color: '#ccc'
            },
            calculable: true,
            series: [{
                color: ['#81b740', '#da70d6', '#ff7f50'],
                name: '完工质量',
                type: 'pie',
                radius: '80%',
                center: ['50%', '50%'],
                data: data.cake
                //data: function() {
                // var serie = [];
                // return serie;
                // }()
            }]
        };
        qualityChart.setOption(option7);
    },
    weekProdTask: function (data) {
        var me = this;
        var _html = "";
        var data = data.tasks;
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            _html+="<tr><td>"+item.proline+"</td><td>"+item.ordernum+"</td><td>"+item.quantum+"</td></tr>";
        }
        me.tasksEL.html(_html);
    },
    equFaultInfo: function (data) {
        var me = this;
        var _html = "";
        var data = data.failinfos;
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            _html+="<tr><td>"+item.proline+"</td><td>"+item.proname+"</td><td>"+item.fault+"</td><td>"+item.state+"</td></tr>";
        }
        me.equfailEL.html(_html);
    },
    fetch: function (url) {
        return $.ajax({
            url,
            dataType: "json"
        })
    }
}
workshop.init();

//演示实时产量
// setTimeout(function () {
//     workshop.aliveChart.setOption({
//         series: [{
//             data: [{
//                 name: '2019/02/18 4:00',
//                 value: ['2019/02/18 4:00', 55]
//             }]
//         }]
//     });
// }, 1000);


