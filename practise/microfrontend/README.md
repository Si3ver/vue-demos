# 微前端

## 打开方式一：分别启动子应用 & 主应用

```sh
# 安装依赖
$ yarn
# 启动子应用1(7501端口)
$ yarn start:sub-vue
```

```sh
# 启动子应用2(7502端口)
$ yarn start:sub-react
```


```sh
# 启动主应用(8080端口)
$ yarn start:main
```

## 打开方式二：全部启动

```sh
$ yarn start
# 然后浏览器打开 localhost:8080 (主应用)
```

## 记录

1. 同时激活多个子应用 https://github.com/umijs/qiankun/issues/487
2. 子应用通信 https://github.com/umijs/qiankun/issues/39
  - main app vuex ❌
  - [qiankun-initGlobalState](https://qiankun.umijs.org/zh/api#initglobalstatestate)
