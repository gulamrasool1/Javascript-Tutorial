var per = prompt("Enter your Percentage : ");

if(per >= 80 && per <= 100){
    document.write("You are in Merlit.");
}else if(per >= 60 && per <= 80){
    document.write("You are in Ist Division.");
}else if(per >= 45 && per <= 60){
    document.write("You are in IInd Division.");
}else if(per >= 33 && per <= 45){
    document.write("You are in IIInd Division.");
}else if(per < 33){
    document.write("You are Fail.");
}else{
    document.write("Please Enter Valid Percentage");
}      