// Price Accordingly

const childPrice = 100;
const adultPrice = 150;
const seniorPrice = 120;

let numberOfChild = 2; // Price = 100
let numberOfAdult = 1; // Price = 150
let numberOfSenior = 1; // Price = 120

let totalAmount =
  numberOfAdult * adultPrice +
  numberOfChild * childPrice +
  numberOfSenior * seniorPrice;

console.log(`The Total ticket price is ${totalAmount}`);
