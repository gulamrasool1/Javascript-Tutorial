document.write("<center><h1>EVEN ODD NUMBERS WITH LOOPS<h1><center>");
document.write("<hr>");

//even numbers so that modulas(%)(==)
for(var a = 1; a <=100; a++){
    if(a % 2 == 0){
        console.log(a);
    }
}

//odd numbers so that not equal to (!=)
document.write("<hr>");
for(var a = 1; a <=100; a++){
    if(a % 2 != 0){
        console.log(a);
    }
}