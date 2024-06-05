document.write("<center><h1>INCLUDES ARRAY METHOD<h1><center>");
document.write("<br>");

var a = ["Sanjay","Aman","Rehman","Rahul"];
document.write(a + "<br><br>");

var b = a.includes("Sanjay","Sana","Parveena");
document.write(b + "<br><br>");

var a = [10,20,30,40,50];
document.write(a + "<br><br>");

var b = a.includes(20);
document.write(b + "<br><br>");


var a = ["Sanjay","Aman","Rehman","Rahul"];
// var a = [10,20,30,40,50];
document.write(a + "<br><br>");

if(a.includes("Sanjay","Aman","Rehman")){
    document.write("This is an includes");
}else{
    document.write("This is not an includes");

}