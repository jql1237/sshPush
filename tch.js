function UrlQueryString() {
    var name, value;
    var str = location.href; //ȡ��������ַ��
    var num = str.indexOf("?")//�ɷ���ĳ��ָ�����ַ���ֵ���ַ������״γ��ֵ�λ��
    �﷨
    str = str.substr(num + 1); //ȡ�����в���   stringvar.substr(start [, length ]

    var arr = str.split("&"); //���������ŵ�������
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}
var Request = new UrlQueryString(); //ʵ����
var productId = Request.productid;
function getQueryString(name) { //pageid
    // name="xxxx"&
    // i,���ϸ����ִ�Сд
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        console.log(r);
        return unescape(r[2]);
    }
    return null;
}