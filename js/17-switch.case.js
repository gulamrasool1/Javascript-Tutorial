 var day = 0;

switch (day) {
        case 0:
            console.log("Today is Monday");
        break;    
        case 1:
            console.log("Today is Tuesday");
        break;    
        case 2:
            console.log("Today is Wednesday");
        break;
        case 3:
            console.log("Today is Thursday"); 
        break;          
        case 4:
            console.log("Today is Friday"); 
        break;               
        case 5:
            console.log("Today is Saturday"); 
        break;           
        case 6:
            console.log("Today is Sunday");  
        break;          
        
      default:
            console.log("Enter the valid Week Day");
}

var age = 20; 

switch (true) {
    case (age >= 15 && age <= 20):
        console.log("You are Eligible");   
    break;
    case (age >= 21 && age <= 30):
        console.log("You are Not Eligible");   
    break;

    default:
        console.log("Enter the valid Age");   
}