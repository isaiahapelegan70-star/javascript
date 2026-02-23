// //writing output
// alert ("Mr isaiah loves making money");
// console.log("Mr isaiah loves making money");
// document. write("Aisha, Oba, Mr Isaiah are cpism7 students");




// // writing input
// var userinput = prompt("Type in your name");
// document. write(userinput);

// // let , var, const
// let age = 20; //is mutable
// const pi = 3.14;
// var course = "cpism7";

// //data types
// //primitive data types
// //number, String, Boolean, Undefined, Null, Symbol, BigInt
// let name = "Mr Isaiah";
// console.log(typeof name);
// var newAge = 50;
// const areYouStudent = true;
// console.log(typeof areYouStudent);
// var middleName;
// console.log(typeof middleName);
// var pockMoney = null;
// console.log(typeof pockMoney);

// //operations in javascript
// //arithmetic operators(+ , - , * , / , % , ++ , --)



// let a;
// let b;
// let c;
// let d;
// a = 10;
// b = 5;
// c = 3;
// d = 7;
// let w = "7"
// var e = a + b;
// console.log(e);
// var f = a - b;
// console.log(f);
// var g = a * d;
// console.log(g);
// var h = a / c;
// console.log(h);
// var i = a % c;
// console.log(i);
// a++;
// console.log(a);
// b--;
// console.log(b);
// //Assignment operators(= , += , -= , *= , /= , %=)
// a += 6; //a = a+6;
// console.log(a);
// //Relational or comparison operators(== , === , != , !== , > , < , >= , <=)
// var j = a > b;
// console.log(j);
// var k = d === w;
// console.log(k);


// //logical operators(&& , || , !)
// var q = (a > b) && (d > c);
// console.log(q);//true
// var r = (a < b) || (d > c);
// console.log(r);//true
// var s = !(a > b);
// console.log(s);//false







// //Non-primitive data type
// //arrays, Objects, Function
// //Objects

// var person = {
//     name: "Olarotimi",
//     age: 14,
//     isStudent: false,
//     bestFood: "pounded yam"
// }

// console.log(person);
// console.log(person.age);
// console.log(person.bestFood);

// //Arrays
// //Array is a collection of items that stores in a veriable
// var fruits = ["Apple", "Banana", "Orange", "Mnago"];
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits.length);

// //array methods

// var arr = [1, 3, 2, 4, 5];
// arr.sort();
// console.log("sorted array ascending" ,arr);
// arr.reverse();
// console.log("sorted arrdecending" ,arr);
// //
// arr.push(10,7);
// console.log("after pushing 10 to array", arr);
// arr.pop();
// console.log("after popping the last element of the array", arr);
// arr.shift();
// console.log("after shifting the first element of the array", arr);
// arr.unshift(0);
// console.log("after unshifting 0 to the front of the array", arr);
// arr.splice(2,3);
// console.log("after splicing the array", arr);


// //creates a new array
// var newArr = arr.slice(1,2);
// console.log("the new array created using slice", newArr);
// var olarotimiArray = [2,3,6,8];
// console.log("the new array created using slice",newArr);
// var olarotimiArray = [2,4,6,8];
// var newMappedArray = olarotimiArray.map(el => el > 5);
// var filteredArray = olarotimiArray.filter(el => el > 5);
// console.log("the new filtered array", filteredArray);

// var myStudents = [
// {
//     name: "Habib",
//     age: 14,
//     isStudent: false,
//     bestFood: "Pounded yam"

// },
// {
//     name: "Aisha",
//     age: 12,
//     isStudent: true,
//     bestFood: "Jollof rice"
// },
// {
//     name: "Oba",
//     age:13,
//     isStudent: true,
//     bestFood: "Fried rice"

// }
    
// ]
// var searchArray = myStudents. filter(student => student.bestFood === "Pounded yam");
// console.log("the search array", searchArray);


// // selection construct (if,if and else, if else if, swith case)

// var userAge = prompt('kindly type your age');
// if (userAge >=18) {
//     alert("You are eligible to drive");
//     if (userAge >= 18) {
//         alert("You are eligible to drive");

//     }else {
//         alert("You cannot drive because you are not up to 18 years old");

//     }

//     var userScore = prompt("Type in your score");
//     if (userScore >= 70 && userscore <= 100){
//         alert("You got an A");
//     }else if (userScore >= 60 && userScore < 70) {
//         alert("You got a B");
//     }else if (userScore >= 50 && userScore <60) {
//         alert("You got C");
//     }else if (userScore >= 45 && userScore <50) {
//         alert("You got a D");
//     }else if(userScore >=40 && userScore <45) {
//         alert("You got an E");
//     }else if(userScore >=0 && userScore <40) {
//         alert("You got an F");
//     }else{
//         alert("Invalid score");
//     }

//     alert("What is the capital of ghana \n a. Accra \n b. Lagos \n c. Nairobi \n d. Dakar");

//     var userAnswer = prompt("Type in your answer");

//     switch (userAnswer) {
//         case "a":
//             alert("Correct answer");
//             break;
//         case "b":
//             alert("Wrong answer");
//             break;
//         case "c":
//             alert("Wrong answer");
//             break;
//         case "d":
//             alert("Wrong answer")
//         default:
//             alert('invalid answer');
//     }
//     //iteration construct (for loop, while loop, do while loop)

// for (let i = 1; i < 11; i++){
//     console.log( 'I love programming', i);
// }

// var count = 1;

// while (count <= 10){
//     console.log('I love programming', count);
//     count++;
// }


// do{
//     console.log('I love programming', count);
//     count++;
// }while(count < 0);
    
// }




// //functions
// //functions without an argument
// function calculator() {

//     let number1 = 30;
//     let number2 = 40;

//     let sum = number1 + number2;
//     console.log("the result of your calculation is " + sum);
//     console.log(`the result is ${sum}`);


// };

// calculator();
// calculator();
// calculator();
// calculator();

// //function with arguments
// function addUserNumbers(num1, numb2){


//     let sum = num1 + numb2;
//     console.log("another way of writing result of adding " + "" + num1 + "" + "and" + "" + numb2 + "" + "is" + "" + sum);
//     console.log(`the result of adding ${num1} and $ {num2} is ${sum}`);

// }
// addUserNumbers(10, 40);
// addUserNumbers(30, 5);

// //function with return statement

// function multiplyUserNumbers(num1, num2){

//     let product = num1 * num2;
//     return product;
// }



// var calculatedResult = multiplyUserNumbers(30, 40);

// console.log("the result of multiplying 30 and 40 is" + calculatedResult);





//write a program that ask users to enter their age and classifies them as a child
var userAge = prompt('kindly type your age');
if (userAge <=13) {
    console.log("You are a child");
}else if (userAge >= 13 && userAge <19){
   console.log("You are a teenager");
}else if (userAge >=20 && userAge <59){
   console.log("You are an adult");
}else if (userAge >= 60){
   console.log ("You are a senior citizen");
}


//.Write a program to calculate the electricity bill based on the units consumed. The charges are:
var unitUsed = prompt('Enter the number of unit used:');
if (unitUsed <= 100){
   console.log('The amount to be paid $'+ unitUsed*5);
}else if(unitUsed <= 200){
   console.log('The amount to be paid $'+ unitUsed*7);
}else if (unitUsed >=200){
   console.log('the amount to be paid $'+ unitUsed*10);
}
//Assume a user has ₦5,000 in their account. Write a program that asks the user to enter a withdrawal amount and:
let AccountBal = 5000;
var withdrawalAmount = prompt('Enter the amount you want to withdraw');
if (withdrawalAmount <= 0){
    console.log('Invalid input');
}else if(withdrawalAmount >= 5000){
    console.log('Insufficient funds');
}else{
    console.log(`$${withdrawalAmount} has been debited from your account: your available balance is $${AccountBal-withdrawalAmount}`);
}



//Write a program that takes the shopping amount as input and applies a discount:
var shoppingAmount = prompt('Enter the shoppingAmount:');
let  discountA = (20/100)*shoppingAmount;
let totalA = shoppingAmount-discountA;

let  discountB = (10/100)*shoppingAmount;
let  totalB = shoppingAmount-discountB;

let  discountC = (5/100)*shoppingAmount;
let totalC = shoppingAmount-discountC;

if (shoppingAmount >=10000){
    console.log(`The discount given is $${discountA}total amount to be paid is $${totalA}`);
}else if(shoppingAmount >=5000 && shoppingAmount <=9900){
    console.log(`The discount given is$${discountB} total amount to be paid is $${totalB}`);
}else if(shoppingAmount >=2000 && shoppingAmount <=4999){
    console.log(`The discount given is$${discountC} total amount to be paid is $${totalC}`);
}else{
    console.log('No discount given: total amount to be paid is $' + shoppingAmount);
}
//Write a program that asks the user to enter a traffic light color (R, Y, G) and prints:
var Trafficlightcolor = prompt('Enter a traffic light color');
if (Trafficlightcolor =' Red') {
    console.log("Stop");
}else if (Trafficlightcolor = 'Yellow'){
   console.log("Get Ready");
}else if (Trafficlightcolor =' Green'){
   console.log("Go");
}else {
    console.log("Display invalid input");
}
//Write a c program that only  allows user to inout their pin ...trial period for correct pin is just 5 times...provided they exhausted the 5 trials with a wrong 4 digit pin still..they should receive amessage their bank account has been locked

var pin = prompt('Input your pin');
let c = 0;
for(let i = 1; i < 6; i++){
    let trial = 5-c;
    var one = prompt('Input your four digit pin');
    console.log(`You have ${trial} trials left.`);


    if(one == pin){
        console.log('You are correct');
        break;
    }

    c = c+1;
}
if(c==5){
    console.log('Your account has been blocked')
}


   


















    



