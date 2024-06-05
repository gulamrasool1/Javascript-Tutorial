document.write("<center><h1>FOREACH LOOP ARRAY METHOD<h1><center>");
document.write("<br>");

var a = ["gulamRasul","saleh","arshad","anees","mushrraf"];
a.forEach(loop);
function loop(value,index){
    document.write(index + " : " + value + "<br>");
}


var b = ["gulamRasul" , "saleh" , "anees" , "rizwan"];
b.forEach(fn)
function fn(value , index){
    document.write(index + " - " + value +"<br>")
}