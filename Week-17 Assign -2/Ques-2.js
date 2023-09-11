function toUppercasestring(string) {
  console.log(`The Manipulated string is ${string.toUpperCase()}`);
}

function manipluateString(string, func) {
  return func(string);
}

manipluateString("Hello , World !", toUppercasestring);
