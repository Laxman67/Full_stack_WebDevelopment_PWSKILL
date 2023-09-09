function reverseString(inputString) {
  if (typeof inputString !== "string") {
    return "Invalid input. Please provide a valid string.";
  }

  let reversed = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}

// Example usage
const input = "Web Development with PWSKILL";
const reversed = reverseString(input);
console.log(`Reversed string: ${reversed}`);
