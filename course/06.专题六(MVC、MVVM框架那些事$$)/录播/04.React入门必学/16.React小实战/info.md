# React简介

## React介绍

### 1. 什么是React：
1. React是Facebook开发的一款用来构建用户界面的JS库
- React可以用到前端，也可以用到nodejs做前后同构，所以它是前后通吃的专门用来构建用户界面的库
- React和其他库不一样，不做数据双向绑定什么的，它只做一个纯粹的view
2. Virtual DOM是一个模拟DOM树的JavaScript对象。React使用Virtual DOM来渲染UI，同时监听上数据的变化并自动迁徙这些变化到UI上
- 我们用react开发的时候，使用Virtual DOM有一个state的概念，整个react都是靠状态来驱动，只要状态变，view就变，view变得时候，Virtual DOM就会有一个算法，来判断这个虚拟的dom和需要你去状态更新的节点有什么区别，来准确更新这个dom
3. 传入属性，构建Virtual DOM，状态对应内容
- 可以使用自定义组件的标签
4. JSX是React定义的一种JavaScript语法扩展，类似于XML。JSX是可选的，我们完全可以使用JavaScript来编写React应用，不过JSX提供了一套更为简便的方式来写React应用
5. Components创建可以复用的UI模块

### 2. React发展
1. 2013.6，Facebook官方发布React
2. 2013.9，React用户量开始激增
3. 2015.3，React Native发布（可以使用这一套去写安卓和ios等客户端）
4. 2016.4，React v15.0.1
