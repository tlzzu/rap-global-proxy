var rap = require('../src/index');
var axios = require('axios');

function test(step) {
    axios.get('get.json?age=3&name=3').then((res) => {
        let data = res.data;
        console.log(JSON.stringify(data));
        console.log('====== ' + step + ' get ok ======');
    }).catch((error) => {
        console.error(JSON.stringify(error));
    });
    axios.post('post.json', { name: '3', age: 242 }).then((res) => {
        let data = res.data;
        console.log(JSON.stringify(data));
        console.log('====== ' + step + ' post ok ======');
    }).catch((error) => {
        console.error(JSON.stringify(error));
    });
}
//one
rap.doProxy(123);
test(1);
//two
rap.doProxy('http://rapapi.org/mockjs/', 123);
test(2);
//three
rap.doProxy({ url: 'http://rapapi.org/mockjs/', projectId: 123 });
test(3);