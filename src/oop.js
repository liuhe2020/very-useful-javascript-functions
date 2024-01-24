// SOLUTION 1
function accountCreator1(name, balance) {
  const newUser = Object.create(methods);
  newUser.name = name;
  newUser.balance = balance;
  return newUser;
}

const methods = {
  getBalance: function () {
    console.log(this.balance);
  },
  deposit: function (amount) {
    this.balance += amount;
  },
};

const account1 = accountCreator1('Mormont', 1000);
const proto1 = Object.getPrototypeOf(account1);
// console.log(account1, proto1);

// SOLUTION 2
function AccountCreator2(name, balance) {
  this.name = name;
  this.balance = balance;
}

AccountCreator2.prototype.getBalance = function () {
  console.log(this.balance);
};

AccountCreator2.prototype.deposit = function (amount) {
  this.balance += amount;
};

const account2 = new AccountCreator2('Lannister', 2000);
const proto2 = Object.getPrototypeOf(account2);
// console.log(account2, proto2);

// SOLUTION 3
class AccountCreator3 {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  getBalance() {
    console.log(this.balance);
  }
  deposit(amount) {
    this.balance += amount;
  }
}

const account3 = new AccountCreator3('Targaryen', 3000);
const proto3 = Object.getPrototypeOf(account3);
// console.log(account3, Object.getOwnPropertyNames(proto3));

// EXTRA
class CompanyAccountCreator extends AccountCreator3 {
  constructor(name, balance, companyName, loan) {
    super(name, balance);
    this.companyName = companyName;
    this.loan = loan;
  }
  getRealBalance() {
    console.log('balance is');
    super.getBalance();
    console.log(`real balance is ${this.balance - this.loan}`);
  }
}

const company = new CompanyAccountCreator('Drogo', 4000, 'Drogo Inc', 1000);
// company.getRealBalance();
// console.log(Object.getOwnPropertyNames(company.__proto__));
