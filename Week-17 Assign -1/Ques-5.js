function greet(input) {
  return new Promise((resolve, reject) => {
    resolve(input);
  });
}

let x = greet("Laxman");
x.then((result) => {
  console.log(`"Hello , ${result}" `);
}).catch((err) => {
  console.log("Error Occured--> ", err);
});
