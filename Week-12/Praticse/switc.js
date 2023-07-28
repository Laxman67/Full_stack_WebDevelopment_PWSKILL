let salary = 100000;
let role = "hr";

switch (role) {
  case "employee":
  case "hr":
  case "manager":
    salary += 0.05 * salary;
    break;

  case "CEO":
  case "CTO":
  case "CIO":
    salary += 0.1 * salary;
    break;

  default:
    console.log("Unkowon Role");
}


console.log(salary);