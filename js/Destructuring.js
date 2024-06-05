let arr1 = [1,2,3];
let [num1,num2,num3] = arr1

console.log(num1);
console.log(num1);
console.log(num1);


let arr2 = [1,,3,4,5,6,7,8,9,10];
let [first,secound = 0,third,...rest] = arr2

console.log(first);
console.log(secound);
console.log(third);
console.log(rest);


// object destructuring
 
let  obj1 = {a:1,b:2,c:3};
let {a,b,c} = obj1;
console.log(a);
console.log(b);
console.log(c);

let  obj2 = {a:1,b:2,c:3};
let {a:key1,b:key2,c:key3} = obj2;
console.log(key1);
console.log(key2);
console.log(key3);