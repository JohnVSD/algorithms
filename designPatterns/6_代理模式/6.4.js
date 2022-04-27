// 代理和本体接口的一致性

var myImage = (function(){
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);

    return function(src) {
      imgNode.src = src;
    }
})()
    
var proxyImage = (function () {
    var img = new Image;
    img.onload = function() {
        myImage( this.src );
    }

    return function(src) {
        myImage('../images/6bf419d17f5d958e851112e0770ee37a.gif')
        img.src = src;
    }
})()

proxyImage('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.vjshi.com%2F2017-08-06%2Fd996f8ba01431399198b449e864bb9f0%2F00002.jpg%3Fx-oss-process%3Dstyle%2Fwatermark&refer=http%3A%2F%2Fpic.vjshi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652444853&t=16d51fe250fead43c8f6c0fa4418a9d8');


