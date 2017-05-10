function UrlQueryString() {
    var name, value;
    var str = location.href; //取得整个地址栏
    var num = str.indexOf("?")//可返回某个指定的字符串值在字符串中首次出现的位置
    语法
    str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}
var Request = new UrlQueryString(); //实例化
var productId = Request.productid;
function getQueryString(name) { //pageid
    // name="xxxx"&
    // i,不严格区分大小写
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        console.log(r);
        return unescape(r[2]);
    }
    return null;
}