## 0724 

### Webpack 打包原理

> [webpack配置](https://webpack.docschina.org/configuration/)

**1. Library Target（output.library.type）**

配置将库暴露的方式

+ var -> 全局变量
+ module -> es模块
+ assign
+ assign-properties
+ this
+ window -> 挂载到window对象上
+ self
+ global
+ commonjs
+ commonjs2
+ amd -> 暴露给AMD模块
+ amd-require
+ umd -> 暴露为UMD形式
+ umd2
+ jsonp
+ system -> 暴露为一个 `System.register` 模块(Webpack > 4.30)

> (逗号操作符)[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator]

### Webpack模块联邦

> http://www.alloyteam.com/2020/04/14338/#prettyPhoto


### Webpack 插件开发



### Webpack 摇树



### Babel 插件开发

