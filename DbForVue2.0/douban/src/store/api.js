 export function myJsonp(url, arg, fn) {

     var queryString = '';
     for (var key in arg) {
         queryString += key + '=' + arg[key] + '&'
     }
     url += '?' + queryString;
     // 加上callback 0.1212121
     var callbackName = "jsonp_" + Math.random().toString().substr(2);

     /// obj={name:"aa"}
     /// obj.name; obj["name"
     window[callbackName] = function(data) {

         fn(data);
         //fafawefa
         window.document.body.removeChild(scriptElement);
     };
     //window.jsonp_xxx=fn;
     url += "callback=" + callbackName;
     // 2.创建script标签，并且把拼接后的url放到script标签的src上。
     var scriptElement = window.document.createElement('script');
     scriptElement.src = url;
     window.document.body.appendChild(scriptElement);

 }