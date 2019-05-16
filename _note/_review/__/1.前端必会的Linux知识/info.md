# 前端必会的Linux知识
### centos7
* 查看IP地址
* > ifconfig比较古老，使用ip addr（用ip是组合命令）

### window连接centos7
` ssh root@192.168.0.115 `

### 进入盘符 cd 
1.  bin 放系统级的命令
> cmder的终端叫shell(贝壳)，常用的放在shell里面，使用频率比较低的放在bin下
2.  etc 最重要的目录（放配置文件的目录）
#### 解决配置网卡问题
* 虚拟机配置必须桥接， 物理机网卡是否被激活 * 
* 如果安装的时候没有激活，就要在etc下找网卡的配置文件
* cd sysconfig network-scripts
* ll查看，找到网卡的名字ens33（带前缀ifcfg）,即网卡的配置文件
* 查看配置文件  
` cat ifcfg-ens33 `
> * 如果没有激活ONBOOT会显示为no，要用vi改成yes *
* 开启网卡 
` ifup ens33 `
* 关闭网卡 
` ifdown ens33 `

### vi命令（文本编辑器[行]）
* 打开（只读状态）
` vi ifcfg-ens33 `
* 敲一下i变成编辑状态
* 退出
1. 按一下esc 最下角insert不见了
2. 输入:wq保存并退出
> * :q!退出不保存
> * :q!退出不保存

### yum安装软件
* yum是linux软件库 *
#### yum安装nano（文本编辑）
` yum install nano `
1. 继续(y)
2. 确认指纹密钥(y)
3. 输入nano启动文本编辑器

##### nano
* ^ 表示ctrl
* ctrl + o 写入
* ctrl + x 退出

### home
* 管理员的home目录是root
* 普通用户的home目录是home
` cd /home/ `
* 进入当前用户
` cd ~ `
* 查看当前目录
` pwd `

### boot
* boot 是核心文件，不能碰 *
* grub 引导操作系统的菜单
* initramfs linux的内核文件

### 修改密码
* 忘记密码centos要进入单用户模式 *
` passwd `

### 安装nodejs
1. 因为yum中没有nodejs，所以必须引入第三方的nodejs源
` curl -sL https://rpm.nodesource.com/setup_11.x | bash - `
2. 用yum安装nodejs
* y表示一路确定 *
` yum install -y nodejs `
3. 确认安装
` node -v `

### 端口
* http默认端口80
* https默认端口 443
* http 代理端口 8080

### linux服务
* 查看(systemctl) 按ctrl+c退出*
* systemctl status nginx 查看nginx服务状态
> * 如果他在跑，显示active，停止就是dead
* systemctl stop nginx 停止服务
* systemctl start nginx 停止服务
* systemctl restart nginx 重启服务
* nginx -s reload 不停止服务，重新读取一次