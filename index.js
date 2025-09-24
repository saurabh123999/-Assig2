  

//part A//

//program1//
console.log("hello world");


// //program 2//

let a=5;
let b=6;
sum=a+b;
console.log(sum);

//program3//

let number=prompt("enter a number");

if(number %2==0){
    console.log("The given number is even");
}
else{
    console.log("The given number is odd");
}

//program4//

let num1=prompt("enter the number 1");

let num2=prompt("enter the number 2");

let num3=prompt("enter the number 3");

if (num1>=num2 && num1>=num3){
    console.log("num1 is greater");
}
else if (num2>=num1 && num2>=num3){
    console.log("num2 is greater");
}
else{
    console.log("num3 is greater");
}


//problem 5//

let ab=7;

let sq= ab**2;
console.log(sq);


//part B//
// program6

let number1 =prompt("enter the fist number");
let number2= prompt("enter the second number");

console.log("before swapping the value of num1 and num2 is",number1 , number2);

let temp= number1;
 number1=number2;
 number2=temp;


console.log("after swappingthe value of num1 and num2 is", number1 , number2);


// program 7

let value =prompt("enter the number for factorial");
let fact=1;
for( i=1;i<=value;i++){
    fact = fact*i;

}
console.log(`factorial of ${value} is ${fact}`);


// program8

let num= 5;
for(let i=1;i<=10;i++){

    let result = num*i;


console.log(`${num}* ${i}= ${result}`);
}

// program 9

// JavaScript program to reverse a number

let n = 12345;
let reversed = 0;

while (number !== 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(n / 10);
}

console.log("Reversed Number:", reversed);

 

// program10//

function isLeapYear(year){

    if((year%4===0 && year%100 !==0)|| year% 400===0){
        return true;
    }
    else {
        return false;
    }
}
    const year1= 1900;
    console.log(`${year1}is a leap year: ${isLeapYear(year1)}`);

