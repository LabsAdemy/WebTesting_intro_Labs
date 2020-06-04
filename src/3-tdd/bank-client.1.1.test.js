const BankClient = require('./bank-client.1.1');

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  const inputDeposit = 20;
  when(`make a deposit ${inputDeposit}`, () => {
    // Act
    sut.deposit(inputDeposit);
    const actual = sut.getPosition();
    const expected = 20;
    then(`should have a position of ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  const inputDeposit1 = 20;
  const inputDeposit2 = 30;
  when(`make two deposits ${inputDeposit2} and ${inputDeposit2}`, () => {
    // Act
    sut.deposit(inputDeposit1);
    sut.deposit(inputDeposit2);
    const actual = sut.getPosition();
    const expected = 50;
    then(`should have a position of ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  const inputDeposit = 20;
  const inputWithdraw = 5;
  when(`make a deposits of ${inputWithdraw} and withdraw ${inputWithdraw}`, () => {
    // Act
    sut.deposit(inputDeposit);
    sut.withdraw(inputWithdraw);
    const actual = sut.getPosition();
    const expected = 15;
    then(`should have a position of ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});

given(`a new bank client account`, () => {
  // Arrange
  const sut = new BankClient();
  const inputDeposit = 20;
  const inputWithdraw = 50;
  when(`make a deposits of ${inputWithdraw} and withdraw ${inputWithdraw}`, () => {
    // Act
    sut.deposit(inputDeposit);
    sut.withdraw(inputWithdraw);
    const actual = sut.getPosition();
    const expected = -30;
    then(`should have a position of ${expected}`, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});

given(`a bank client account class`, () => {
  when(`i create one`, () => {
    // Arrange
    const inputCreditLimit = 100;
    then(`should be possible to specify a creditLimit ${inputCreditLimit}`, () => {
      // Act
      const sut = new BankClient(inputCreditLimit);
      // Assert
      const actual = sut != undefined;
      const expected = true;
      assertEqual(actual, expected);
    });
  });
});

const inputCreditLimit = 100;
given(`a new bank client account with a credit limit of ${inputCreditLimit}`, () => {
  // Arrange
  const sut = new BankClient(inputCreditLimit);
  const inputWithdraw = 120;
  when(`try to make and withdraw ${inputWithdraw}`, () => {
    // Act
    let actual = false;
    try {
      sut.withdraw(inputWithdraw);
    } catch (e) {
      actual = true;
    }
    const expected = true;
    then(`should receibe an exception `, () => {
      // Assert
      assertEqual(actual, expected);
    });
  });
});