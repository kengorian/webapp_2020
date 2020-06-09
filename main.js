document.getElementById("hello_text").textContent="はじめてのJavaScript";

var count=0;
setInterval(function(){
    count++;
    document.getElementById("hello_text").textContent="初めのJavaScript("+count+")";
},1000);