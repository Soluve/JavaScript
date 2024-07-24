// // for (let i = 0; i < 10; i++){
// //     if(i == 5){
// //         break
// //     }
// //     console.log(i);
// // }
// for (let i = 0; i < 10; i++){
//     if(i == 5){
//         continue
//     }
//     console.log(i);
// }

// // const arr = ["Lion", "Dog", "Cat", "Lion", "Monkey", "Lion"];
// // const arr2 = [...arr]
// // console.log(arr2);

// // const obj = {
// //     name: "James Smith",
// //     age : 45,
// //     school: "Cyclobold Tech"
// // }
// // const obj2 = {...obj}
// // console.log(obj2)
// // function wrapper(a, b){
// //     console.log("my name is " + a + " i am " + "years old" )
// // }
// // wrapper("James Smith", 90)
// // wrapper("Josh Doe", 67)
// // wrapper("David Wild", 32)

// function evaluate(a,b,c,d,e, operator){
     
//     if (operator == "+"){
//         console.log(a+b+c+d+e)
//     }else if(operator == "-"){
//         console.log(a-b-c-d-e)
//     }else if(operator == "*"){
//         console.log(a*b*c*d*e)
//     }else if(operator == "/"){
//         console.log(a/b/c/d/e)
//     }else{
//         console.log("invalid operator")
//     }

// }
// // create a function that calculates amount of words and amount of characters 
// // and words with muktiple letters
// evaluate(1,2,3,4,5, "=")
// function countWordsAndChars(text) {
    
  //   text = text.trim();
  
     
  //   const wordCount = text.split(/\s+/).length;
  
    
  //   const charCount = text.replace(/\s/g, "").length;
  
    
  //   const wordsWithMultipleLetters = text.split(/\s+/).filter(word => word.length > 1).length;
  
 
  //   return {
  //     wordCount,
  //     charCount,
  //     wordsWithMultipleLetters
  //   };
  // }
  
  // // Example usage
  // const text = "This is a string with some words. Let's count them!";
  // const results = countWordsAndChars(text);
  
  // console.log("Words:", results.wordCount);
  // console.log("Characters (excluding whitespace):", results.charCount);
  // console.log("Words with multiple letters:", results.wordsWithMultipleLetters);

//   let data = prompt("Enter the word to count")
// function wordCount (){
//   console.log(data.trim().split(" ".length));
// }

// //word count
// function letterCount(){
//   let str = data.trim().split("");
//   let count = []
//   for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//       continue
//     }
//     count.push(str[i]);
//   }
//   console.log(count.length);
// }

// letterCount()

//scope
let num1 = 0
var num2 = 1
const num3 = 2

let str = `hello world ${console.log(13)} is my age`

//arrow function
// const fun = () =>{
//   console.log("hello world")
// }
// fun()

const fun = () => a
console.log(fun())

//IIFE - immediately invoke function expression
(
  function(a, b){
    console.log(a + b);
  }
)(3, 7)

//default parameter
// function getDetails(a, b, c){
//   if(a === undefined){
//     a = "James Doe"
//   }
//   if(a === undefined){
//     b = 67
//   }
//   if(a === undefined){
//     c = Ikorodu
//   }
//   return `my name is ${a}, I am ${b} years old and I live at ${c}` 
// }
// console.log(getDetails("Peter Parker"))
function getDetails(a = "James Doe", b = 67, c = "Ikorodu"){
   
  return `my name is ${a}, I am ${b} years old and I live at ${c}` 
}
console.log(getDetails("Peter Parker"))

//rest parameter
function getDetails(a, ...f){
   for(let i = 0; i < f.length; i++){
    sum += f[i];
   }
   console.log(sum)
}
getDetails(1, 2, 3, 4, 5, 6)

//nested function
function outer(a, b){

  function inner(c, d){
    console.log(a + b + c + d)
  }
}

function wrapper(n){
  if(n === 0){
    console.log("task completed")
    wrapper(n-1)
  }
}

wrapper(10)

// OBJECTS
// const person = {
//   name: "James Smith",
//   age: 76,
//   isSchool: true,
//   bestFood: ["Rice", "Beans", "Fufu"],
//   address: {
//     city: "Ikeja",
//     state: "Lagos",
//     country: "Nigeria"
//   },
//   "last name": "Daniel",
//   fun: function (){
//     console.log(`my name is ${this.name} I am ${this.age} years old and I live at no 50 ${this.address.city} road ${this.address.state} ${this.address.country} and my best food is ${this.bestFood[0]} and ${this.bestFood[1]}`)
//   }
// }
// const obj = new Object({
//   name: "James Smith",
//   age: 76,
//   isSchool: true,
//   bestFood: ["Rice", "Beans", "Fufu"],
//   address: {
//     city: "Ikeja",
//     state: "Lagos",
//     country: "Nigeria",
//   },
//   "last name": "Daniel"
// })
// person.course = "Web dev"
// // delete person.name;
// person.fun()
// console.log(person{"age"});

// let {name, age} = person
// console.log(name, age)
// const arr = ["lion", "cat", "tiger"]
// const [a, b, c] = arr
// console.log(a, b, c);

// const data = Object.create(person)
// const data = Object.freeze(person)
// const data = Object.frozen(person)
// const data = Object.keys(person)
// const data = Object.values(person)
// const data = Object.entries(person)
// const pass = {
//   lastNmae: "Smith",
//   firstName: "James"
// }
// const data = Object.assign(person, pass)
// const data = Object.seal(person)

// console.log(data)
const person = {
  getName(){
    console.log(`my nae is ${this.firstname} ${this.lastName} and i am ${this.age} years old`)
  }
}

const data = {
  firstname: "John",
  lastName: "Smith",
  age: 45
}

// person.getName.call(data)
person.getName.apply(data)