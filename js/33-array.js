document.write("<center><h1>Arrays<h1><center>");
document.write("<br>");

var ary = [10,20,30,40,50];

console.log(ary[5]);

var ary = [10,20,30,40,50];
var sum = 0;
document.write("<ul>");
for(var a = 0; a <= 4; a++){
    document.write("<li>" + ary[a] + "</li>");
    sum = sum + ary[a];
}
document.write("</ul>");
document.write("Total Sum : " + sum);

var ary = [10,"Harry","sarah",true,null];

document.write("<ul>");
for(var a = 0; a <=4; a++){
    document.write("<li>" + ary[a] + "</li>");
}
document.write("</ul>");

