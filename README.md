# rap-global-proxy
RAP Global Proxy
rap的全局代理，修改原生XMLHttpRequest对象，对返回数据执行mock操作。

## 安装

`npm install rap-global-proxy --save-dev`

## 使用
```js
var rapproxy = require('rap-global-proxy');
rapproxy.doProxy(123);
//或者
var rapproxy = require('rap-global-proxy');
rapproxy.doProxy('http://rapapi.org/mockjs/', 123);
//或者
var rapproxy = require('rap-global-proxy');
rapproxy.doProxy({ url: 'http://rapapi.org/mockjs/', projectId: 123 });
```

## 说明
执行一次即可进行全局代理。

## 依赖
mockjs