## Week06的作业 (Nodejs)

作业：Master/Worker 主从网络处理架构实现
概述：创建一个主从网络架构，Master 接受 Socket 连接，根据负载均衡，分发给 Worker，Worker 处理具体业务。

选做：监听 Worker 状态，如果 Worker 发生异常退出之后，Master 重启一个进程。


> 参考资料：https://www.cnblogs.com/tugenhua0707/p/11141076.html

**使用方法**
```sh
# 启动服务端，提供 socket 服务，端口为 127.0.0.1:8080
$ nvm install node # 安装最新版本的node (16)
$ nvm use v16
$ yarn server
```

```sh
# 启动客户端
$ nvm use v16
$ yarn client
```
