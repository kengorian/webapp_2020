document.getElementById("hello_text").textContent="はじめてのJavaScript";

var count=0;
setInterval(function(){
    count++;
    document.getElementById("hello_text").textContent="初めのJavaScript("+count+")";
    var td_array=document.getElementsByTagName("td");
    var cells=[];
    var index=0;
    for(var row=0; row<20; row++){
        cells[row]=[];
        for(var col=0;col<10;col++){
            cell[row][col]=td_array[index];
            index++;
        }
    }
},1000);