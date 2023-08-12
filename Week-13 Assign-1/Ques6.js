const productDetails = {
  name: "Apple Max Pro 13",
  price: 82000,
  color: "Grey",
  hardDisk: "256 GB",
  printDetails: function () {
    console.log("Below are the Products Details: ");
    console.log(`name : ${this.name}`);
    console.log(`price : ${this.price}`);
    console.log(`color : ${this.color}`);
    console.log(`hardDisk : ${this.hardDisk}`);
  },
};

productDetails.printDetails();
