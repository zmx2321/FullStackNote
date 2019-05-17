# 讲给前端程序员的后端知识
## Linux重要的常用命令
1. 行编辑器 vi/vim
2. 服务管理命令 systemctl
3. 网络管理命令 ipconfig、ip、router等
4. 命令行下载命令 curl、wget

### ip命令包
- 查看ip地址
`ip addr`
- route命令属于ip命令，route是旧命令
`ip route`

### route命令查看路由
- 如果网络不通，可以用route命令检查
>  * 终端模式敲命令route提示“bash: route: command not found”
> yum install net-tools (这条命令仅限centos系统)
- 第一行是默认的路由
- 还有一行是外网的路由
- 根据网卡去辨认(Iface)
- ip是局域网的ip
- Getway是网关，0.0.0.0 表示允许所有的地址连入互联网

### 查看网卡路径
` cd /etc/sysconfig/network-scripts/ `
> 找到网卡前缀ipcfg-
> 里面的其他配置文件都是管理网络的脚本

### 网络端口命令
1. 查看
- netstat 
- ss
> 最好加上-an，否则他会做机器名称的解析，速度会很慢
2. 筛选
> 如果端口太多，就给他做一个筛选(筛选80端口)
` ss -an | grep 80`
>> | 是管道命令，grep是分组命令，是一个组合命令
>> 使用ss -an查看所有网络端口，并使用管道将这个命令传给grep
>> 将前面命令的输出当做后面命令的输入
3. 查看端口占用
> 查看哪个进程正在占用80端口
`ss -anp | grep 80`
>> users 表示该进程归哪个用户（用户名, 用户的pid，文件的句柄 ）
>> 看被哪个进程占用了主要看pid
>> 有几个括号意味着有几个进程
4. 杀死进程
> 杀死进程，使用kill + pid
> 有多个进程，只需要杀主进程，哪个pid小，哪个就是主进程
> 杀子进程，系统会自动再拉起一个子进程，无法彻底杀除
> kill -9是优先级最高的回收手段，强制杀除进程，有隐患(遇到事务等)
`kill *****`

###  wget、curl
1. wget
- 下载文件(下载百度首页)
`wget http://www.baidu.com`
> 使用wget拿到的时间戳是服务器的时间戳
- 使用wget比较方便，curl功能强大，但复杂，一般就用wget
- 在linux中执行wget命令提示 -bash: wget: command not found 解决方法
`yum -y install wget`
2. curl
- 下载文件
`curl http://www.baidu.com -o index2.html`
- curl http://www.baidu.com只是显示内容
- 加上\-o才是下载，然后再加文件名
- 用curl拿下来的时间戳是刚刚生成的
> 因为拿文件的时候是直接把流写入文件的，写文件的时候拿的是本地的时间戳
- 使用curl可以配置自己的头(http)，详细参照curl -help

### linux最强大的文档
**man**
> 使用的是vi规则，但不能编辑，只能上下滚动
> 按下q退出
- 下载文件的文档
`man wegt`
- 查看linux api
`man setsid`
- 查看常用的命令
`man gcc`

### vi详解
* 

## Linux下常用的快捷键
- ctrl + s  =>  终端锁
- ctrl + d  =>  结束输入或退出
> 按了终端锁之后，使用ctrl + q恢复屏幕输出
- ctrl + c  =>  结束正在运行的程序[ping、telnet]
- ctrl + l  =>  清屏，相当于clear
- ctrl + a/ctrl + e  =>  快速移动光标到行首/行尾

## Linux进程管理相关命令
> 进程：程序运行的时候的一个状态
### top命令详解
- top命令相当于任务管理器（实时刷新）
> 退出使用q

### ps命令详解
- 查看当前系统在跑的进程
`ps aux`
> 列出所有的进程
- 查看某个特定的进程(node占用的进程)
`ps aux | grep node`
> user 进程是以哪一个用户启动的
> pid 是操作系统分辨进程的唯一标识
>> 每一个进程启动都有pid是最重要的
> %cpu cpu占有率
> COMMAND 指出命令所在的路径，和启动参数
>> 在中括号里的归系统(内核)管[系统进程]
>> 带路径和参数没有中括号的可以杀除（除了第一个）
>>> 当操作系统启动的时候首先运行内核，当内核执行完毕，要拉起1号进程(没有中括号)，1号进程是用来协调其他所有进程的(权限)

### pkill命令详解
- 使用文件名(程序名)去杀进程

### 查看登陆命令
- w 查看当前服务器有哪些用户登陆
- last 查看所有的登陆历史
`last -n 10`
> 显示最近的10条
- 登陆失败的记录
`last b`