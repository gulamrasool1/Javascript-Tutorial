document.write("<center><h1>IS ARRAY METHOD<h1><center>");
document.write("<br>");

var a = ["Sanjay","Aman","Rehman"];
document.write(a + "<br><br>");
var b = Array.isArray(a);
document.write(b + "<br><br>");

var a = 20;
document.write(a + "<br><br>");
var b = Array.isArray(a);
document.write(b + "<br><br>");

var a = "Rahul";
document.write(a + "<br><br>");
var b = Array.isArray(a);
document.write(b + "<br><br>");

var a = ["Sanjay","Aman","Rehman"];
var a = 20;
var a = "Rahul";
document.write(a + "<br><br>");

if(Array.isArray(a)){
    document.write("This is an Array");
}else{
    document.write("This is not an Array");
}
