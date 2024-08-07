const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

const result = transactions.filter((transaction) => {
  if (transaction[0].includes("income")) {
    return transaction;
  }
});

console.log(result);

const result1 = transactions.filter((transaction) => {
  if (transaction[0].includes("expense")) {
    return transaction;
  }
});

console.log(result1);

let num = 0;

transactions.forEach((transaction) => {
  if (transaction[0].includes("income")) {
    num = transaction[1] + num;
  }
});

console.log(num);

let num2 = 0;

transactions.forEach((transaction) => {
  if (transaction[0].includes("expense")) {
    num2 = transaction[1] + num2;
  }
});

console.log(num2);

let num3 = 0;
let num4 = 0;
let num5 = 0;

transactions.forEach((transaction) => {
  if (transaction[0].includes("income")) {
    num3 = transaction[1] + num3;
  }
  if (transaction[0].includes("expense")) {
    num4 = transaction[1] + num4;
  }
  num5 = num3 - num4;
});

console.log(num5);

const result2 = transactions.filter((transaction) => {
  if (transaction[1] > 500) {
    return transaction;
  }
});

console.log(result2);
