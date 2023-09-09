function calculateCircleArea(radius) {
  if (typeof radius !== "number" || radius <= 0) {
    return "Invalid input. Please provide a valid positive number for the radius.";
  }

  let AreaOfCircle = Math.PI * Math.pow(radius, 2);
  return AreaOfCircle;
}

// Radius
let radius = 5;

// Get Area of a circle
let Area = calculateCircleArea(radius);
console.log(
  `The area of the circle with radius ${radius} is ${Area.toFixed(2)}.`
);
