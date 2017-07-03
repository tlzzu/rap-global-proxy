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
//或者,arr为如果返回的mock json是数组的话，使用mockjs构造的数组数量
var rapproxy = require('rap-global-proxy');
rapproxy.doProxy({ url: 'http://rapapi.org/mockjs/', projectId: 123,arr:'2-20' });

//以上代码最好在main.js中执行，之后即可在项目全局中的axios中代理全局对象
//即正常使用 axios 的相关操作。
```

## 说明
执行一次即可进行全局代理。

## 依赖
mockjs