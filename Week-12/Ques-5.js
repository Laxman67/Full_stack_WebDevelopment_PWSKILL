// shipTypes

let ship_overnight = "Overnight";
let ship_standard = " 3-5 Days";
let ship_express = "1-2 Days";

let shippingtype = ship_standard;

let amount, day;

switch (shippingtype) {
  case ship_overnight:
    amount = 400;
    console.log(`Your have to Pay  Rs: ${amount} and it will be delivered in ${ship_overnight} `);
    break;
  case ship_express:
    amount = 250;
    console.log(`Your have to Pay  Rs: ${amount} and it will be delivered in ${ship_express} `);
    break;
  case ship_standard:
    amount = 150;
    console.log(`Your have to Pay  Rs: ${amount} and it will be delivered in ${ship_standard} `);
    break;

  default:
    console.log("Invalid Value ");
    break;
}
