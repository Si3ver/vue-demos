## 0805

### 自动化测试

#### Jest

#### puppeteer、cypress

+ [cypress](https://docs.cypress.io/)

### 前端监控

**ostrichsdk**
+ ErrorMonitor 错误监控
  1. 普通error 👉 `window.onerror`
  2. 资源加载错误 👉 `http`状态码
  3. Promise Error 👉 `unhandledrejection`
  4. Fetch Error 👉 重写`window.fetch`，封装错误处理逻辑，上报`!res.ok`的请求
  5. XMLHttpRequest Error 👉 重写`xhr.open`和`xhr.send`方法，上报`readyState != 4`，错误码非`2xx`的请求
  6. 跨域error 👉 重写`document.createElement`自动为`script`添加`crossorigin="anonymous"`,参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/crossorigin)
  7. 框架error（vue为例）👉 为`Vue.config.errorHandler`添加回调
+ performanceMonitor 性能监控 [performance](https://caniuse.com/?search=performance)
  1. 重定向时间
  2. DNS查询耗时
  3. DNS缓存耗时
  4. TCP连接耗时
  5. TTFB首字节时间
  6. 下载时间
  7. 解析DOM树耗时
  8. 白屏时间
  9. domready时间
  10. onload时间
+ reporter 埋点数据
  1. [navigator.sendBeacon](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)
  2. [错误堆栈解析](https://github.com/stacktracejs/error-stack-parser)

**ostrich**
+ 文件结构
  - menu // 主应用: 8080端口
  - error // 子应用1: 异常监控 8788端口
  - event // 子应用2: 埋点数据 8789端口
  - performance // 子应用3: 性能监控 8777端口


**sentry**
> [转转商业前端错误监控系统(Sentry)策略升级](https://juejin.cn/post/6844904088866390024#heading-15)

+ [sentry(js)](https://docs.sentry.io/platforms/javascript/)
+ [@sentry/webpack-plugin](https://github.com/getsentry/sentry-webpack-plugin)
+ [getsentry/onpremise](https://github.com/getsentry/onpremise)
+ [Navigator.sendBeacon](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)

**数据上报**
+ MySQL
+ [MongoDB](https://docs.mongodb.com/guides/)
+ [Apache CouchDB](https://github.com/apache/couchdb)
+ [LevelDB](https://github.com/google/leveldb)

## 0807

### SourceMap原理

+ [VLQ编码](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
