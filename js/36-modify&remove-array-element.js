document.write("<center><h1>MODIFY AND REMOVE ARRAYS<h1><center>");
document.write("<br>");

var ary = ["arshad",18,"nainthe"];
document.write(ary + "<br>");
ary[0] = "rizwan";
ary[1] = 20;
ary[2] = "BCA";
document.write(ary + "<br>");
document.write("<hr>");
 
delete ary[1];
document.write(ary + "<br>");
document.write(ary[1] + "<br>");