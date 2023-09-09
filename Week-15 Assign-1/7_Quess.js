const userDatabase = new Map();

function addUser(name, age, email) {
  if (
    typeof name !== "string" &&
    typeof age !== "number" &&
    typeof email !== "string"
  ) {
    return "Invalid input. Please provide valid name, age, and email.";
  }

  const user = { name, age, email };

  userDatabase.set(email, user); //Using Map to set
  console.log(userDatabase);
  return "User added successfully.";
}



function updateUser(email, name, age) {
  if (!userDatabase.has(email)) {
    return "User not found.";
  }

  const user = userDatabase.get(email);
  user.name = name || user.name;
  user.age = age || user.age;
  return "User updated successfully.";
}

function deleteUser(email) {
  if (!userDatabase.has(email)) {
    return "User not found.";
  }

  userDatabase.delete(email);
  return "User deleted successfully.";
}

// Example usage
console.log(addUser("John Doe", 30, "john@example.com"));
console.log(addUser("Jane Smith", 25, "jane@example.com"));

console.log(updateUser("john@example.com", "John Updated"));
console.log(updateUser("jane@example.com", undefined, 26));

console.log(deleteUser("john@example.com"));

console.log(userDatabase);
