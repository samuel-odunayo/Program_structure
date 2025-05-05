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