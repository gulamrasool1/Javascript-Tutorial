document.write("<center><h1>INDEXOF AND LASTINDEXOF<h1><center>");
document.write("<br>");

var a = ["gulamRasul","arshad","rizwan","gulamRasul","mushrraf","hussain"];
document.write(a + "<br>" + "<br>")
var b = a.indexOf("gulamRasul");
document.write(b);

document.write("<hr>");
var c = a.lastIndexOf("gulamRasul",4);
document.write(c);