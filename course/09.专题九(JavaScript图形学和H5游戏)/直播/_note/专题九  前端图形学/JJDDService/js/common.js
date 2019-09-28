var common = {
  init: function() {
    this.timeInit();
    this.watcherInit();
  },
  weatherInit: function() {
    // $.ajax({
    //     url:"http://www.weather.com.cn/data/sk/101121001.html",
    //     dataType:"jsonp",
    //     success:function(data){
    //         consoole.log(data);
    //     }
    // })
  },
  watcherInit: function() {
    //全局发布订阅模式
    var o = $({});
    $.subscribe = function() {
      o.on.apply(o, arguments);
    };
    $.unsubscribe = function() {
      o.off.apply(o, arguments);
    };
    $.publish = function() {
      o.trigger.apply(o, arguments);
    };
  },
  week: function() {
    let s = ' ';
    let x = new Array('星期日', '星期一', '星期二');
    x = x.concat('星期三', '星期四', '星期五');
    x = x.concat('星期六');
    const d = new Date();
    const day = d.getDay();
    return (s += x[day]);
  },
  timeInit: function() {
    const today = new Date();
    let str = today.toLocaleDateString();
    str += '  ' + this.week();
    str += '  ' + today.toLocaleTimeString();
    $('#js-time').html(str);
    setTimeout(this.timeInit.bind(this), 1000);
  },
};

common.init();
