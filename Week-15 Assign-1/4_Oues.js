function SearchProperties(obj, search) {
  if (typeof obj !== "object" || obj === null) {
    return "Input is not a valid object.";
  }

  let key = Object.keys(obj);

  if (key.includes(search) == true) {
    console.log("Yes Property is Present ");
  } else {
    console.log("No.... Property is NOT Present ");
  }
}

const student = {
  name: "Laxman",
  age: 21,
  grade: "B",
};

SearchProperties(student, "member");
