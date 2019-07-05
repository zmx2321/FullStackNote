# 前端工程化Linux预备知识

## 概要
<h4> 1. 操作系统概述
<h4> 2. 远程登录Linux系统
<h4> 3. 强调重要Linux命令
<h4> 4. Linux进程与线程（重点）
<h4> 5. Linux网络的坑（重点）
<h4> 6. 免密登录（重点）

---
<br />

### 1.操作系统概述
#### ubuntu、CentOs、redhat、Fedora、Debian等哪个好
CentOs（迷你版五百多兆，节省资源）、Fedora（桌面推荐）

-------
<br />

### 2.远程登录Linux系统
#### 登录方式
- putty
- Xshell
- 在Cmder终端下使用ssh命令（推荐）
- 微软发布Windows Terminal命令行终端工具

#### Linux和macOS系统下
ssh命令

-------
<br />


### 3.强调重要Linux命令
#### 行编辑器vi/vim
必须要知道的是：
- 怎么查看文件
- 怎么创建文件
- 怎么查找关键字，然后跳到关键字那一行上
- 怎么关闭文件
- 怎么保存文件

#### 服务管理命令 systemctl
- 进程的概念和window下是一样的
- linux下也有服务，在window下叫服务，在linux下叫首呼进程，很多linux下的服务都是以首呼进程这种形式来在后台运行的
- window下启动服务，有专门的服务管理器，而在linux下，因为我们基本不使用图形界面，所以基本上就使用systemctl来开启
- systemctl就只有三个基本命令
<br />
<font color="red">**start、stop、status**</font>
- enable：设置下次开机时，后面接的 unit 会被启动。<br />
`systemctl enable httpd`
- disable：设置下次开机时，后面接的 unit 不会被启动。<br />
`systemctl disable httpd`

#### 网络管理命令 ifconfig、ip命令、router
- 查看IP地址<br />
`ip addr`

#### 命令行下载命令curl、wget
- linux装好之后必须要有wget <br />
  wget是命令行的http协议的下载工具
- wget -c url支持断点续传 <br />
  如果网络不好，加上这个命令，下载到一半下次能接着下载
- 一般很少使用curl

#### 怎么查看Linux命令的帮助
- 最重要的是man命令(英文) <br />
  例如 `man wget`

#### 终端下不小心ctrl+s了怎么办
- ctrl + s =>  终端锁(暂停屏幕输出)
- ctrl + q => 恢复屏幕输出
- ctrl + d => 结束输入或退出
- ctrl + c => 结束正在运行的程序[ping、telnet]
- ctrl + l  =>  清屏，相当于clear
- ctrl + a/ctrl + e  =>  快速移动光标到行首/行尾

-------
<br />


### <font color="red">4.Linux进程与线程（重点）</font>
#### top命令详解
top: 查看所有进程 <br />
可以查看谁的cpu占有率比较高，不过查看起来麻烦，默认cup占有率最高，他会显示在最上面

#### ps命令详解
- ps：非root用户只可以查看当前用户以自己的身份运行起来的进程，以系统身份运行起来的进程无法看到
- sudo ps：可以查看所有身份运行的进程，如果以root用户登陆就没必要加
- ps aux | grep nginx <br />
  过滤命令示例：
  `cat package.json | grep version`

#### kill、pill命令及使用注意事项
- kill: 向linux内核发送信号，在后面加pid
- pill: 在后面加进程名
- 强制杀死的话，在后面加-9

#### w命令
查看系统的用户

-------
<br />


### <font color="red">5.Linux网络的坑（重点）</font>
#### 查看和配置网络基本信息
ip命令


#### 重启网卡
1. cd sysconfig network-scripts
2. 开启网卡 ifup ens33
3. 关闭网卡 ifdown ens33

#### 查看路由配置 router

#### 排查网络故障 tracerout

#### 怎样找到占用网络端口的进程
1. ss命令
2. netstat命令
3. lsof

-------
<br />


### <font color="red">6.免密登录（重点）</font>
#### 进程、线程与协程
##### 基本概念
> 敲出来的代码，不能称作是程序，只能叫<font color="red">源代码</font>，编译完之后的文件，\*.exe之类的，叫<font color="red">可执行文件</font>，当代码真正执行起来的时候，跑起来之后就产生了<font color="red">进程</font>，【进程是动态的概念，进程本身就是\*.exe文件的数据，映射到内存，之后cpu又逐条执行内存中的指令，此时才产生了进程】。

> 操作系统可以同时并发的运行其他的程序，操作系统是对硬件资源（cpu、内存）的调度 。在linux中有6个子系统，其中两个最核心的子系统就是，<font color="red">进程调度和内存管理</font>。单核cpu也可以处理多任务，cpu执行指令需要时间，cpu如果要处理多个进程，cpu时间线切成片，跑一会A进程，跑一会B进程，来回切换，就实现了多任务执行，操作系统本身也是占了一部分cpu时间线，即占用率一部分cpu资源，操作系统来分配和调度进程任务。进程是操作系统的调度单位。linux有个名字，叫多任务系统，即可以运行多个进程。

> 当一个进程太大，会产生子进程，就有了主进程和子进程（工作进程），主进程是从可执行文件中来的，一般来说pid比较小，主进程可能性比较大。主进程在甩出子进程的时候，有一个专有的术语，叫fork，将主线程的内存和数据全部复制一遍。

> 这套系统被windows的流氓软件学去之后，流氓软件将自己的主进程（管理进程）隐藏起来【管理进程附加到dll上，再将这个dll注入到service上，360为主】，去派发若干个子进程，当我们杀死一个子进程的时候，主进程又继续进行派发。

- 进程的目的就是担当分配系统资源（cpu时间、内存）的实体
- 线程是操作系统能够进行运算调度的最小单位 <br />
  <font color="#757575" size="2">
    轻量级的调度单位,可执行程序执行起来变成了进程，进程中有自己的小团体(线程)，会共享线程的内存空间，数据和部分的代码空间，消耗的资源就少了。有一个主线程，用来管理进程中的线程。
  </font>
- 协程是一种用户态的轻量级线程，无法利用多核资源 <br />
  <font color="#757575" size="2">
    用户态
  </font>
- IO密集型应用的发展：多进程-> 多线程->事件驱动-> 协程  <br />
  <font color="#757575">
  </font>
- CPU密集型应用的发展：多进程-> 多线程  <br />
  <font color="#757575" size="2">
    计算量比较大的
  </font>
- 调度和切换的时间：进程-> 线程-> 协程 <br />
  <font color="#757575">
  </font>

##### 