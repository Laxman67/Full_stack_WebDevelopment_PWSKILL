let totalValue = 2000;
let discountPercentage = 10;

// let DiscountedValue = (totalValue * discountPercentage) / 100;

/*

totalValue x discountPercentage
------------------------------
           100


*/

let DiscountedValue = totalValue/ 100 * (discountPercentage) ;

let finalPrice = totalValue - DiscountedValue;


 
                      // Final Output 

console.log(`The Final Price After Discount is Rs: ${finalPrice}`);
