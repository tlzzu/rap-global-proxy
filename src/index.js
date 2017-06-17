'use strict';
var mockjs = require('mockjs');

var rapglobalproxy = {
    doProxy() {
        if (!arguments[0]) {
            console.error('参数为空！');
            return false;
        }
        var obj = arguments[0],
            url = 'http://rapapi.org/mockjs/',
            projectId;
        if (typeof obj === 'object' && obj['projectId'] === undefined) {
            console.error('未定义projectId！');
            return false;
        } else if (typeof obj === 'object' && obj['projectId'] !== undefined) {
            projectId = obj.projectId;
            if (obj['url'] !== undefined) url = obj.url;
        } else if (typeof obj === 'number') {
            projectId = obj;
        } else if (typeof obj === 'string' && arguments[1] && typeof arguments[1] === 'number') {
            url = obj;
            projectId = arguments[1];
        } else {
            console.error('参数不符合要求！');
            return false;
        }
        if (typeof XMLHttpRequest === 'undefined') {
            console.error('浏览器不符合要求，不存在XMLHttpRequest对象！');
            return false;
        }
        Object.defineProperty(XMLHttpRequest.prototype, 'responseText', {
            get: function() {
                var temp = this.response;
                if (this.response === '') return '';
                if (typeof this.response === 'string') temp = JSON.parse(this.response);
                return JSON.stringify(mockjs.mock(temp));
            }
        });
        var _XMLHttpRequest = XMLHttpRequest;
        XMLHttpRequest = function() {
            var xhr = new _XMLHttpRequest();
            var _open = xhr.open;
            xhr.open = function() {
                //对url进行处理，如果是全路径则不进行处理。
                var tempUrl = arguments[1],
                    objExp = new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/);
                if (tempUrl !== undefined || tempUrl !== '' || !objExp.test(tempUrl)) {
                    arguments[1] = (url.endsWith('/') ? url : url + '/') + projectId + '/' + tempUrl;
                }
                return _open.apply(this, arguments);
            };
            return xhr;
        };
        return true;
    }
};
module.exports = rapglobalproxy;
module.exports.default = rapglobalproxy;