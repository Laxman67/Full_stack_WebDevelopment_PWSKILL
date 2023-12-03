class BankAccount {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  checkBalance() {
    console.log(`Account Balance for ${this.name} is Rs: ${this.balance}`);
  }

  // updateBalance(amount) {
  //   this.balance += amount;
  //   return this.balance;
  // }

  deposite(amount) {
    if (amount < 0) {
      console.log("Invalid Deposite Amount , Please Enter a Positive Number ");
    } else {
      let newbalance = (this.balance += amount);
      // updateBalance(amount);
      console.log(`Deposite Rs.${amount} . New Balance is Rs. ${newbalance} `);
    }
  }

  // Withdraw Function
  witdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficent Fund for Withdrawl");
    } else if (amount < 0) {
      console.log("Invalid Withdrawl Amount , Please Enter a Positive Number ");
    } else {
      console.log(
        `Withdrawl Rs. ${amount} . New Balance is Rs. ${this.balance - amount}`
      );
    }
  }
}

let Rohit = new BankAccount("Rohit", 1500);

Rohit.checkBalance();

Rohit.deposite(900);
Rohit.deposite(-100);

Rohit.witdraw(200);
Rohit.witdraw(700);

Rohit.checkBalance();
