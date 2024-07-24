// let grade = prompt("Enter score: ")
// if (grade <= 58){
//     console.log("F")
// }else if(grade < 70){
//     console.log("D")
// }
// else if(grade < 80){
//     console.log("C")
// }
// else if(grade < 90){
//     console.log("B")
// }
// else if(grade <= 100){
//     console.log("A")
// }
// else{
//     console("invalid input")
// }

// let age = 6;

// switch(age){
//     case 7 :
//         console.log("I am " + age + " years old");
//         break
//     case 3 :
//         console.log("I am "  + age + "years old");
//         break
//     default: 
//         console.log("I am not a kid neither a teenager")
// }
// age = prompt("Enter age: ")
// switch(true){
//     case age <= 5:
//         console.log("I am a new born")
//         break;
//     case age < 13:
//         console.log("I am a kid")
//         break;
//     case age < 20:
//         console.log("I am a teenager")
//         break;
//     case age < 30:
//         console.log("I am a youth")
//         break;
//     case age < 40:
//         console.log("I am a young adult")
//         break;
//     case age < 50:
//         console.log("I am an adult")
//         break;
//     case age < 70:
//         console.log("I am old")
//         break;
//     case age < 90:
//         console.log("I am very old")
//         break;
//     case age >= 91:
//         console.log("Advanced")
//         break;
//     case age == ".":
//         console.log("Invalid input")
//     default:
//         console.log("Invalid input")
// }

// equivalent triangle pattern
for(let i =1; i <= 5; i++){
  let row = ''

  for (let j = 1; j <= 5; j++){
    row += " "
  }

  for(let c = 1; c <= 1; c++){
    row += "* "
  }
  console.log(row);
}

// // right angle triangle pattern
let a = "*"
output = ""
for (let count = 1; count < 6; count++){
  for(let i = 0; i < count; i++){
    console.log(output += a)
  }
}

// square pattern
let b = "*******"
for(i = 1; i < 6; i++){
   console.log(b)
}
// // word game
let play = prompt("Enter a word to play")
play = play.toLowerCase();
 
const words = [
    "apple", "banana", "orange", "grape", "kiwi",
    "cat", "dog", "bird", "fish", "rabbit",
    "red", "green", "blue", "yellow", "purple",
    "happy", "sad", "angry", "excited", "calm",
    "run", "jump", "swim", "fly", "crawl",
    "house", "car", "tree", "flower", "mountain",
    "book", "pen", "pencil", "paper", "computer",
    "love", "hate", "hope", "fear", "joy"
  ];
  found = false;
  for(i = 0; i < words.length; i++){
    if(words[i] == play){
        found = true;
        break
    } 
  }
  if(found == true){
    console.log("You win")
  }else{
    console.log("You lose")
  }