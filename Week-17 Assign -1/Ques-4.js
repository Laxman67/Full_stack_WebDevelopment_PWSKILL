{
  console.log("Before Declaration ");
  console.log("num1 => ", num1);
  console.log("num2 => ", num2); // both will throw error
  console.log("num3 => ", num3); // both will throw error

  var num1 = 10;
  let num2 = 90;
  const num3 = 21;

  console.log("After Declaration ");
  console.log("num1 => ", num1);
  console.log("num2 => ", num2);
  console.log("num3 => ", num3);
}
