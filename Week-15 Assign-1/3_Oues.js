function countProperties(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Input is not a valid object.";
  }

  return Object.keys(obj).length;
}

// Example usage
const student = {
  property1: "value1",
  property2: "value2",
  property3: "value3",
};

const propertyCount = countProperties(student);
console.log(`The object has ${propertyCount} properties.`);
