const { Clerk } = require('./3.clerk');

exports.Account = class Account {
  constructor(credit = 100) {
    this._credit = credit;
    this._balance = 0;
    this._clerk = new Clerk(credit);
    this._transactions = new Array();
  }
  deposit(amount) {
    this._balance += amount;
    this._transactions.push({});
  }
  withdraw(amount) {
    if (this._clerk.isNotAllowed(amount, this._balance)) {
      throw 'credit insufficient';
    }
    this._balance -= amount;
    this._transactions.push({});
  }
  getBalance() {
    return this._balance;
  }
};