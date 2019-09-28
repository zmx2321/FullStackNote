var index = {
    init: function () {
        var me = this;
        me.bind();
        me.render();
        //生成订单详情
        me.fetch("./data/data1.json").then(function (data) {
            me.prochartChartInit(data);
        });
        //生成订单详情2
        me.fetch("./data/data2.json").then(function (data) {
            me.prochartChart2Init(data);
        });
        //生产计划达成率
        me.fetch("./data/data3.json").then(function (data) {
            me.proplanChartInit(data);
        });
        //质量趋势图
        me.fetch("./data/data4.json").then(function (data) {
            me.quatrendChartInit(data);
        });
        //设备稼动率趋势
        me.fetch("./data/data5.json").then(function (data) {
            me.proMobilityChartInit(data);
        });
        //安全日历
        me.fetch("./data/data6.json").then(function (data) {
            //连续生产天数
            $("#js-continuity").html(data.continuity);
            initSecurityChart(data);
            me.safetyCrossInit(data);
        });
    },
    render: function () {
        this.prochartChartEL = document.getElementById('js-prochart');
        this.prochartChartEL2 = document.getElementById('js-prochart2');
        this.proplanChartEL = document.getElementById('js-proplan');
        this.quatrendChartEL = document.getElementById('js-quatrend');
        this.proMobilityChartEL = document.getElementById('js-promobility');
    },
    bind:function(){
        // console.log(dayjs().format('YYYY-MM'))
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
        var secnum = Math.round($("#js-secnum").width() / 4)
        $(".montnNum .cricleColor").css({
            "width": secnum
        });
        $(".month .criclred,.month  .criclrgreen,.month  .cricleorange,.month  .criclegray").css({
            width: secnum * 0.5 / 4,
            height: secnum * 0.5 / 4
        });

        var monthoneHeight = $(".monthone").height();
        $(".cricleColor .monthInfo").css({
            "line-height": monthoneHeight + "px"
        });
        var titleHeight = $(".safeTitle").height();
        $(".safeTitle p").css("height", titleHeight + "px");
    },
    prochartChartInit: function (data) {
        var me = this;
        //生成订单情况表1
        var prochartChart = echarts.init(me.prochartChartEL);
        var prochartoption = {
            color: ['#38b5f4', '#ff7d4e'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ["订单完成", "订单新增"],
                x: "center",
                y: "bottom",
                textStyle: {
                    color: "#ccc"
                }
            },
            textStyle: {
                color: '#ccc'
            },
            dataset: {
                source: [
                    ["product", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月"],
                    ["订单新增"].concat(data.orderadd),
                    ["订单完成"].concat(data.ordercomplete)
                ]
            },
            xAxis: [{
                type: 'category',
                gridIndex: 0
            }],
            grid: {
                top: "15%",
                left: '5%',
                right: '5%',
                bottom: '12%',
                containLabel: true
            },
            calculable: true,
            yAxis: [{
                gridIndex: 0
            }],
            series: [{
                    type: 'bar',
                    seriesLayoutBy: 'row'
                },
                {
                    type: 'bar',
                    seriesLayoutBy: 'row'
                }
            ]
        };
        prochartChart.setOption(prochartoption);
    },
    prochartChart2Init: function (data) {
        var me = this;
        var prochartChart2 = echarts.init(me.prochartChartEL2);
        var option2 = {
            color: ['#7627cb', '#259fd2', '#e26021', '#c7353a', '#f5b91e'],
            grid: {
                top: "15%",
                left: '5%',
                right: '5%',
                bottom: '12%',
                containLabel: true
            },
            legend: {
                data: ['实交', '应交', '准交', "完成率", "准交率"],
                x: "center",
                y: "bottom",
                textStyle: {
                    color: "#ccc"
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            textStyle: {
                color: '#ccc'
            },
            xAxis: [{
                type: 'category',
                data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月'],
                axisPointer: {
                    type: 'shadow'
                }
            }],
            yAxis: [{
                    type: 'value',
                    // name: '数量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    // axisLabel: {
                    //     formatter: '{value} '
                    // }
                },
                {
                    type: 'value',
                    // name: '百分比',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series: [{
                    name: '实交',
                    type: 'bar',
                    data: data.realcross
                },
                {
                    name: '应交',
                    type: 'bar',
                    data: data.shouldhand
                },
                {
                    name: '准交',
                    type: 'bar',
                    data: data.quasicrossing
                },
                {
                    name: '完成率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: data.completion
                },
                {
                    name: '准交率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: data.quasirate
                }
            ]
        };
        prochartChart2.setOption(option2);
    },
    proplanChartInit: function (data) {
        var me = this;
        var proplanChart = echarts.init(me.proplanChartEL);
        var prodrateChartOption = {
            color: ["#7627cb", "#259fd2", "#e26021", "#c7353a", "#f5b91e"],
            grid: {
                top: "15%",
                left: '5%',
                right: '5%',
                bottom: '15%',
                containLabel: true
            },
            tooltip: {
                trigger: "axis"
            },
            textStyle: {
                color: "#ccc"
            },
            legend: {
                data: ["生产一部", "生产二部", "生产三部", "生产四部"],
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
                    name: "生产一部",
                    type: "line",
                    //stack: "总量",
                    smooth: true,
                    data: data.prod1
                },
                {
                    name: "生产二部",
                    type: "line",
                    smooth: true,
                    // stack: "总量",
                    data: data.prod2
                },
                {
                    name: "生产三部",
                    type: "line",
                    smooth: true,
                    // stack: "总量",
                    data: data.prod3
                },
                {
                    name: "生产四部",
                    type: "line",
                    smooth: true,
                    // stack: "总量",
                    data: data.prod4
                }
            ]
        };
        proplanChart.setOption(prodrateChartOption);
    },
    quatrendChartInit: function (data) {
        var me = this;
        var quatrendChart = echarts.init(me.quatrendChartEL);
        var quatrendChartOption = {
            color: ['#d9a503', '#2551bb', '#81b740', '#da70d6', '#ff7f50'],
            tooltip: {
                trigger: "axis"
            },
            textStyle: {
                color: "#ccc"
            },
            grid: {
                top: "15%",
                left: '5%',
                right: '5%',
                bottom: '15%',
                containLabel: true
            },
            legend: {
                data: ["生产一部", "生产二部", "生产三部", "生产四部"],
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
                    name: "生产一部",
                    type: "line",
                    smooth: true,
                    data: data.prod1
                },
                {
                    name: "生产二部",
                    type: "line",
                    smooth: true,
                    data: data.prod2
                },
                {
                    name: "生产三部",
                    type: "line",
                    smooth: true,
                    data: data.prod3
                },
                {
                    name: "生产四部",
                    type: "line",
                    smooth: true,
                    data: data.prod4
                }
            ]
        };
        quatrendChart.setOption(quatrendChartOption);
    },
    proMobilityChartInit: function (data) {
        var me = this;
        var proMobilityChart = echarts.init(me.proMobilityChartEL);
        var option8 = {
            color: ["#81b740"],
            tooltip: {
                trigger: "axis"
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
                name: "运转率",
                type: "line",
                smooth: true,
                data: data.series,
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                }
            }]
        };
        proMobilityChart.setOption(option8);
    },
    safetyCrossInit: function (data) {
        const datas = data.crossgraph;
        //var legends = ['无事故', '一次性医疗事故', '损失工作日事故'];
        var colors = ["#81b740", "#d9a503", "#c7353a", "#ccc"];
        for (var i = 0; i < datas.length; i++) {
            var j = datas[i];
            console.log(j);
            $("#js-crossgraph-"+i).css("background",colors[j]);
        }
    },
    fetch: function (url) {
        return $.ajax({
            url,
            dataType: "json"
        })
    }
}
index.init();


//安全日历
function initSecurityChart(data) {
    var securityChart = echarts.init(document.getElementById('js-security'));
    var cellSize = [($("#js-security").width()) / 10 * 1.2, ($("#js-security").height() / 5) * 0.6];
    var pieRadius = $("#js-security").width() / 10 * 0.08;
    // function randomFrom(lowerValue, upperValue) {
    //     return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    // }
    var legends = ['无事故', '一次性医疗事故', '损失工作日事故', "暂无"];
    var colors = ["#81b740", "#d9a503", "#c7353a", "#ccc"];

    function getVirtulData() {
        var date = +echarts.number.parseDate(dayjs().startOf('month').format('YYYY-MM-DD'));
        var end = +echarts.number.parseDate(dayjs().startOf('month').add(1, 'month').format('YYYY-MM-DD'));
        // var date = +echarts.number.parseDate("2019-12-01");
        // var end = +echarts.number.parseDate("2020-01-01");
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
    }

    function getPieSeries(scatterData, chart) {
        return echarts.util.map(scatterData, function (item, index) {
            var center = chart.convertToPixel('calendar', item);
            var num = 3;
            if (parseInt(dayjs().date()) >= index + 1) {
                var _item = data.calendar[index];
                if(_item != undefined){
                    num = _item;
                }
            }
            return {
                id: index + 'pie',
                type: 'pie',
                center: center,
                color: colors[num],
                label: {
                    normal: {
                        formatter: "", //{c}
                        position: 'inside'
                    }
                },
                radius: pieRadius,
                data: [{
                    name: legends[num],
                    value: 1
                }, ]
            };
        });
    }
    var scatterData = getVirtulData();
    var option = {
        color: ["#81b740", "#d9a503", "#c7353a", "#ccc"],
        tooltip: {},
        textStyle: {
            color: "#ccc"
        },
        legend: {
            data: legends,
            bottom: "-2%",
            textStyle: {
                color: "#ccc"
            }
        },
        calendar: {
            top: 'middle',
            left: 'center',
            orient: 'vertical',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0)',
                    borderWidth: 1,
                    borderColor: '#ccc'
                }
            },
            textStyle: {
                color: "#ccc"
            },
            cellSize: cellSize,
            yearLabel: {
                show: false,
                textStyle: {
                    fontSize: 30,
                    color: "#ccc"
                }
            },
            dayLabel: {
                textStyle: {
                    color: "#ccc"
                },
                margin: 5,
                firstDay: 1,
                nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            monthLabel: {
                show: true,
                textStyle: {
                    color: "#ccc"
                },
                nameMap: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            range: [echarts.format.formatTime('yyyy-MM', new Date())]
            //dayjs().format('YYYY-MM-DD')
        },
        series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        return echarts.format.formatTime('dd', params.value[0]);
                    },
                    offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                    textStyle: {
                        color: '#ccc',
                        fontSize: 14
                    }
                }
            },
            data: scatterData //getPieSeries(scatterData, ss)
        }]
    };
    securityChart.setOption(option);
    setTimeout(function () {
        securityChart.setOption({
            series: getPieSeries(scatterData, securityChart)
        });
    }, 0);
}