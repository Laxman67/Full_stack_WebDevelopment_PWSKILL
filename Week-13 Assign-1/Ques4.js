const products = [
  {
    name: "Mouse",
    price: 1300,
  },
  {
    name: "Mobile",
    price: 70000,
  },
  {
    name: "Laptop Bag",
    price: 20000,
  },
  {
    name: "Laptop",
    price: 120000,
  },
  {
    name: "Watch",
    price: 2000,
  },
  {
    name: " Charger",
    price: 1500,
  },
];

/*
function MaxPriceReturn(arr) {
  for (let index = 0; index < arr.length; index++) {
    let MaxPrice = arr[0].price;

    if (arr[index].price <= MaxPrice) {
      MaxPrice = arr[index].price;
      console.log(MaxPrice);
      return;
    }
  }
}

function MinPriceReturn(arr) {
  for (let index = 0; index < arr.length; index++) {
    let MinPrice = arr[0].price;

    if (arr[index].price <= MinPrice) {
      MinPrice = arr[index].price;
      console.log(MinPrice);
      return;
    }
  }
}

MaxPriceReturn(products);
MinPriceReturn(products);
*/

function findMax(array) {
  let MaxElement = array[0].price;
  for (let index = 0; index < array.length; index++) {

    if (array[index].price > array[index+(1)].price) {
      console.log(MaxElement);
    }
  }
}

findMax(products);
