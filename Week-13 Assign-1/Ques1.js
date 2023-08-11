let user = ["Laxman", "Mithun", "Divan", "Harish", "Mamta", "Sakshi"];

// General Purpose Function for finding user name in the list

function UserCheck(name, arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == name) {
      console.log(`Yes ${name} is Valid user`);
    } else {
      console.log(`No ${name} is not a valid user`);
    }
    return;
  }
}

UserCheck("Laxman", user);
