## 0729

### import maps

+ [WICG/import-maps](https://github.com/WICG/import-maps)
+ [js import maps](https://www.jianshu.com/p/b23d823a183a?open=1)


### 浏览器内置模块 std:kv-storage

https://www.barretlee.com/blog/2019/03/13/first-buildin-module-kv-storage/

### System.js

+ [systemjs](https://github.com/systemjs/systemjs)
+ [JS模块化与systemjs](https://segmentfault.com/a/1190000022278429)

### single-spa

+ [官方文档](https://zh-hans.single-spa.js.org/docs/getting-started-overview)
+ 在无须刷新页面的前提下，同一个页面可使用不同的框架
+ 基于不同框架实现的前端应用可以独立部署
+ 制作新内容时可以使用不同的框架
+ 支持应用内脚本的懒加载

### qiankun

single-spa + sandbox + import-html-entry

**shadow dom**

+ [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)
+ 允许内部代码隐藏起来
+ shadow host
+ shadow root
+ contents

**web components**

+ [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
+ [阮一峰-Web Components 入门实例教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html)
+ [](https://juejin.cn/post/6844904034508226574)

## 0731

+ [style tag in div](https://stackoverflow.com/questions/1385384/style-tag-inside-any-elements-will-still-work)

### IO多路复用（select、poll、epoll）

+ select 通过设置或检查存放fd标志位的数据结构进行下一步处理
+ poll 包含大量文件描述符的数组被整体复制于用户态和内核的地址空间之间，而不论这些文件描述符是否就绪，它的开销随着文件描述符数量的增加而线性增大
+ epoll 非阻塞

### Nginx

+ [优化nginx的worker进程数](https://www.cnblogs.com/architectforest/p/12795040.html)
+ [Linux IO模式及 select、poll、epoll详解](https://segmentfault.com/a/1190000003063859)

### Docker

+ [docker手册](https://yeasy.gitbook.io/docker_practice/)


```sh
# 查看镜像
$ docker image ls -a
# 查看容器
$ docker container ls -a
# 停止容器
$ docker stop webserver
# 删除容器
$ docker rm webserver

# 运行容器
# 1. 进入bash，退出时删除
$ docker run -it --rm [image-name/id] bash
# 2. 守护态运行
$ docker run -d -p 7000:80 --name webserver nginx
# 3. 进入运行中的容器bash
$ docker exec -i [container-id] /bin/sh
```

ctrl + d 退出容器

### docker compose

```sh
# v1
$ docker-compose --version
docker-compose version 1.29.2, build 5becea4c
# v2
$ docker compose
Usage:  docker compose [OPTIONS] COMMAND

Docker Compose

Options:
      --ansi string                Control when to print ANSI control characters ("never"|"always"|"auto") (default "auto")
      --env-file string            Specify an alternate environment file.
  -f, --file stringArray           Compose configuration files
      --profile stringArray        Specify a profile to enable
      --project-directory string   Specify an alternate working directory
                                   (default: the path of the Compose file)
  -p, --project-name string        Project name

Commands:
  build       Build or rebuild services
  convert     Converts the compose file to platform's canonical format
  cp          Copy files/folders between a service container and the local filesystem
  create      Creates containers for a service.
  down        Stop and remove containers, networks
  events      Receive real time events from containers.
  exec        Execute a command in a running container.
  images      List images used by the created containers
  kill        Force stop service containers.
  logs        View output from containers
  ls          List running compose projects
  pause       pause services
  port        Print the public port for a port binding.
  ps          List containers
  pull        Pull service images
  push        Push service images
  restart     Restart containers
  rm          Removes stopped service containers
  run         Run a one-off command on a service.
  start       Start services
  stop        Stop services
  top         Display the running processes
  unpause     unpause services
  up          Create and start containers
```
