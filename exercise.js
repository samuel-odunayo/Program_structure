// Looping exercise

let triangle = "";

for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= i; j++) {
    triangle += "#";
  }
  triangle += "\n";
}
console.log(triangle);



// FizzBuzz exercise
for (let numbers = 1; numbers <= 100; numbers++) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numbers % 3 === 0) {
    console.log("Fizz");
  } else if (numbers % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numbers);
  }
}


// ChessBoard exercise
let size = 8;
let chessboard = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}
console.log(chessboard);


// Recursion exercise
function isEven(n) {
  if (n < 0) return isEven(-n); 
  if (n === 0) return true;    
  else if (n === 1) return false;    
  else return isEven(n - 2);  
}

console.log(isEven(50)); 
console.log(isEven(75));
console.log(isEven(-1)); 


// Bean counting exercise
function countChar(string, ch) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ch) {
            count += 1;
        }
    }
    return count;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k")); 
