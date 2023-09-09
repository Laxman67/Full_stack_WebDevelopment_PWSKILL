let student = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Laxman",
    marks: 99,
  },
  {
    name: "Rohit",
    marks: 86,
  },
  {
    name: "Sooraj",
    marks: 91,
  },
  {
    name: "Pradeep",
    marks: 50,
  },
];

function showResult(passedName, arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

   

    if (passedName == element.name) {
      if (element.marks >= 90) {
        console.log(`Congratulation ${element.name} You have Cleared the Exam`);
      } else {
        console.log(`Sorry ${element.name} You have Not cleared the Exam`);
      }
      //   return;
    }
  }
}

showResult("Rohit", student);
