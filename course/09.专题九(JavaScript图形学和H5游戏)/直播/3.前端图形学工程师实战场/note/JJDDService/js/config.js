//自定义配置区域

/**
 * highlightArr 只有添加进里的模型id才会高亮 格式   ,"控制台上的ID"
 * 1._2491 屋顶
 * 2._3468 _3471 外墙
 * 3._2394 厂房整体区域
 * 4._3476 厂房顶部防水区域
 * 5._3470 _3465厂房外围
 */
var highlightArr = [
  '_2491',
  '_3468',
  '_3471',
  '_2382',
  '_2394',
  '_3476',
  '_3470',
  '_3465',
];

/**
 * hideArr 被添加到配置的容器会被隐藏 格式   ,"控制台上的ID"
 * 1._2491 屋顶
 */
var hideArr = ['_2491'];
//配合获取产品线编号 发布订阅者架构设计
function result(url, uid) {
  $.subscribe(uid, function(e, data) {
    pronumArr[uid].desc = data;
  });
  $.ajax({
    url: url,
    dataType: 'json',
    success: function(data) {
      $.publish(uid, [data.ordernum]);
      $.unsubscribe(uid);
    },
    error: function() {
      $.publish(uid, ['获取产线编号失败']);
      $.unsubscribe(uid);
    },
  });
}
/**
 * pronumArr 被添加进的产线编号会有气泡弹出 格式
 * 1.如不需要展示小圆圈直接将页面   pinShown: true,设置成false就行了
 * 2."控制台上的ID" :{
 *      glyph:"气泡短文本",
 *      title:"气泡上的标题",
 *      desc:"气泡上的内容"
 * }
 * 3._2491 屋顶
 */
//默认的loading
var desc = '系统处理中,请稍后<i class="l"></i>';
var pronumArr = {
  _2491: {
    glyph: '1',
    title: '气泡标题',
    // desc:
    //   '屋顶气泡测试弹出点击x可以关闭,<br/>打开控制器即可得到图层的ID,只有配置的选项才会产生气泡',
    desc,
  },
  _2558: {
    glyph: '1',
    title: '气泡标题',
    desc:"不需要发起请求的生产编号❗️",
  },
};
//对_2491气泡发请求 参数1是请求地址 参数2是气泡id
result('./data/data12.json', '_2491');
//demo
//result('./data/data13.json', '_2558');
