let user = {
  fname: "Laxman",
  surname: "Kumar",
  age: 2001,
};

function logresult(user) {
  let dateTime = new Date();
  let getYear = dateTime.getFullYear();
  let daysInYear = 365;
  console.log(
    `The Person's full name is ${user.fname} ${user.surname} and age in Days ${
      (getYear - user.age) * daysInYear
    }`
  );
}

// logresult(user);

function ageInDays(user, logresult) {
  return logresult(user);
}

ageInDays(user, logresult);
