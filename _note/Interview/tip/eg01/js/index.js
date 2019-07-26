/**
 * 1、默认隐藏二级菜单
 * 2、挡鼠标移到一级菜单时显示二级菜单
 * 3、鼠标移到二级菜单时，二级菜单背景色变为灰色，色值为#666
 * 4、鼠标从一级菜单、二级菜单移开时，隐藏二级菜单
 */

var util = {
	//选择元素
	/**
	 * [$ 标签选择器]
	 * @param  {[type]} selector [选择器]
	 * @param  {[type]} node     [dom节点]
	 * @return {[type]}          [$('selector')]
	 */
	$: (selector, node) => (node || document).querySelector(selector),
}

!(function(){
	let $ = util.$;

	$('.menu1').addEventListener('mouseover', function(){
		$('.menu2').style.display = "block";
	});

	$('.menu1').addEventListener('mouseout', function(){
		$('.menu2').style.display = "none";
	});

	$('.menu2').addEventListener('mouseover', function(){
		$('.menu2').style.display = "block";
	});

	$('.menu2').addEventListener('mouseout', function(){
		$('.menu2').style.display = "none";
	});
})();