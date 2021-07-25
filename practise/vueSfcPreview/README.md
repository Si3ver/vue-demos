# 使用方法

功能：渲染 `Vue` 单文件组件

## 启动服务端

```sh
# terminal2
cd practise/vueSfcPreview/server
yarn
yarn server
```

主要功能：
1. localhost:3000 端口，接收 HTTP 请求，产生副作用（修改源码）
2. localhost:3001 端口提供HTTP服务，渲染页面

## 启动客户端

```sh
# terminal1
cd practise/vueSfcPreview/client
yarn
yarn client
```

主要功能：
1. localhost: 8080 端口，提供HTTP服务，渲染编辑器
