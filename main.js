//1.
let sum = 0;
for (let i = 1; i<=100; i++) {
  sum +=i;
}
alert(sum);

//2.
let myArr = [1, 2, 3, 4, 5];
for (i = 0; i<myArr.length; i++) {
  console.log(myArr[i]);
}

//3.
let myArray = [-1, 22, 3, 44, 5];
console.log(Math.max(...myArray));

//4.
let numbersArr = [];
let zNumbers = 0;
let pNumbers = 0;
let nNumbers = 0;
for (let k = 0; k < 8; k++) {
  numbersArr[k] = +prompt('Please, give me a number. It can be "0", positive or negative number.');
  if (numbersArr[k] === 0) {
    zNumbers++;
  } if (numbersArr[k] < 0) {
    nNumbers++;
  } if (numbersArr[k] > 0) {
    pNumbers++;
  }
};

alert(`Your numbers are: ${numbersArr}. Total of '0': ${zNumbers}. Total of positive numbers: ${pNumbers}. Total of negative numbers: ${nNumbers}.`);

//5.
let i = 8;
let product;
for (a = 1; a <= 9; a++) {
  product = i * a;
  console.log(i + "*" + a + "=" + product);
}

//6.
let myArr = [2, 5, 9, 15, 0, 4];

for (i = 0; i < myArr.length; i++) {
  if (myArr[i] > 3 && myArr[i] < 10)
  console.log(myArr[i]);
};

//7.
let calculate;

do {
  let firstNum = +prompt("Give me a first number");
  let secondNum = +prompt("Give me a second number");
  let operation = prompt("Give me an arithmetic operation");

  switch (operation) {
    case "+":
      alert(`Result: ${firstNum + secondNum}`);
      break;
    case "-":
      alert(`Result: ${firstNum - secondNum}`);
      break;
    case "*":
      alert(`Result: ${firstNum * secondNum}`);
      break;
    case "/":
      alert(`Result: ${firstNum / secondNum}`);
      break;
    default:
      alert('Something is wrong');
  }

  calculate = confirm("Do you want to make another calculation?");

} while (calculate === true);

