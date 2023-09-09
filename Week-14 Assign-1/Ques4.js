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

function findMaxMinProducts(products) {

  if (products.length === 0) {
    console.log("The products array is empty.");
    return;
  }

  let maxProduct = products[0];
  let minProduct = products[0];

  for (let i = 1; i < products.length; i++) {
    
    if (products[i].price > maxProduct.price) {
      maxProduct = products[i];
    } else if (products[i].price < minProduct.price) {
      minProduct = products[i];
    }
  }

  console.log("Product with the highest price:");
  console.log("Name:", maxProduct.name);
  console.log("Price:", maxProduct.price);

  console.log("Product with the lowest price:");
  console.log("Name:", minProduct.name);
  console.log("Price:", minProduct.price);
}



findMaxMinProducts(products);
