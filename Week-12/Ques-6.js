let Name = "Laxman";
let email = "laxmanhenricks94@gmail.com";
let age = 21;

let typeofEmail = typeof email;
let typeofAge = typeof age;
let typeofName = typeof Name;

if (typeofAge != typeof Number) {
  console.log("Age should be Number  ");
}

if (typeofEmail != typeof String) {
  console.log("Email should be String ");
}
