console.log("hello world")
console.clear()
console.count("hello world")
console.warn("hello world")
console.error("hello world")
console.group("hello world")
console.info(["hello world", "new"])
console.log("hello world", "this is a comment", "welcome to cyclobold")

/*var wrapper;
wrapper = "hello world";
var john = " my name is john smith"
console.log(wrapper, john);

//alert("Hello World! I am, learning jaavscript")
//confirm("Is this your real name?") //boolean global keyword
const user_name = prompt("Enter your name");
console.log(user_name); 
let str = "hello world"*/


/*let num = 234567643283427n; //bigint data type

let animals = Array("lion", "cat", "Monkey", "goat");
const arr = ["lion", "cat", "camel"]
const arr2 = arr;
console.clear()
const str = "hello world my people"
 const data = String(null)
 console.log(data)
 console.log(str.slice());*/
const arr = ["lion", "pig", "cat", "monkey"]
const arr2 = ["rice", "beans"]
//console.log(arr.concat(arr, arr2))
//console.log(arr.fill("zebra", 1, 3))
//arr.push("zebra", "goat")
//arr.pop()
//arr.unshift("zebra", "goat")
//arr.shift()
console.clear()
arr.length
arr.join("and")
arr.toString()
//console.log(arr.includes("pig"))
arr.indexOf("lion", 3)
arr.lastIndexOf("lion")
arr.sort()
arr.reverse()
arr.slice("1", "3")
arr.splice(0, 0, "zebra", "goat")
//console.log(arr)
//console.log(Array.isArray(arr))
let obj ={
    name: "Jame Smith",
    age: "35"
}
console.log(Array.from)

//operators in javascript
//arithmetic operators
console.clear()

// let c = 90
// c += 67
// console.log(c)
// let str = "James Smith"
// let age = "36"
// let country = "Nigeria"
// let state = "lagos"

// console.log("Hello my name is " + str + " " + " i am " + age + " " + "years old and i live at" + " " + state + " " + "which is a state in " + country + "." )
console.clear()
// let str = "10"
// // conditional operators
// if (10 < 7){
//     let a = 89
//     let b = 56
//     console.log(a + b)
// }else{
//     console.log("wrong value")
// }

// == compare
// === compare strict equality

// let data = "james Smith"
// if (data.includes("james")){
//     console.log(data)
// }else if("ames"){

// }
// else{
//     console.log("my name is not james")
// }
// let age = prompt("Enter number:....");

// if (age == 0){
//     console.log("I am a new born")

// }else if(age <= 10){
//     console.log("I am a chid")
// }
// else if(age <= 19){
//     console.log("I am a teen")
// }
// else if(age <= 30){
//     console.log("I am a youth")
// }
// else if(age <= 40){
//     console.log("I am a young adult")
// }
// else if(age <= 50){
//     console.log("I am an adult")
// }
// else if(age <= 70){
//     console.log("I am old")
// }
// else if(age <= 90){
//     console.log("I am very old")
// }else if(age >= 91){
//     console.log("advanced")
// }else{
//     console.log("invalid input")
// }
// let num = 0;
// while(num <  5){
//     console.log(num);
//     num++
// }
// let num = 0;
// do{
//     console.log(num);
//     num++
// }while(num < 5)
// const arr = ["Lion", "Dog", "Cat", "Lion", "Monkey", "Lion"]

// let num = 0;
// while(num < (arr.length)){
//     console.log(arr[num])
//     num++
// }
// let num = 10
// while(num >= 0){
//     console.log(num)
//     num--
// }
// for(let i = 0; i <= 12; i++){
//     console.log("5 " + "* " + i + " " + " = " + (5 * i) )
// }

// for(let i = 0; i <= 10; i++){
//     console.log(i);
//     for(let j = 10; j > 0; j--){
//         console.log(j)
//     }
// }
// for(let i = 1; i <= 12; i++){
//     console.log("Table " + i);
//     for(let j = 1; j <= 12; j++){
//         console.log(i + " * " + j + " = " + i*j)
//     }
//     console.log("")
// }
// const obj = {
//     name: "James Smith",
//     age: "45",
//     school: "Cyclobold"
// }
// //object
// for(let i in obj){
//     console.log(obj[i])
// }
// const arr = ["Lion", "Dog", "Cat", "Lion", "Monkey", "Lion"]

// //array
// for(let i in arr){
//     console.log(arr[i])
// }
// let str = "Hello world"
// for(let x of str){
//     console.log(x)
// }

// for(let x of arr){
//     console.log(x)
// }
let age = 6;
switch(age){
    case 7:
        console.log("I am " + age + " years old");
    case 3:
        console.log("I am "  + age + "years old");
}