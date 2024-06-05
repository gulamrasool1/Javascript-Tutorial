function fullname(fname = "Yahoo", lname = "Baba"){
   var a = fname + " - " + lname;

   return a;
} 

var fn = fullname("Gulam","Rasul");
console.log(fn);

function sum(math,eng,sc){
    var s = math + eng + sc;
 
    return s;
 } 

function percentage(tt){
    var per = tt/300 * 100;
    console.log(per);
 } 
 
 var total = sum(80,80,80);

 percentage(total);