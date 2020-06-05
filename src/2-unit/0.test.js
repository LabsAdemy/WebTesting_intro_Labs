const { test, expect } = require('./unit.tester');
const { Account } = require('./account');

test('a new account with no constructor parameter', () => {
  const sut = new Account();
  sut._transactions = getTransactionsMock();
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});

test('a new account with a constructor parameter', () => {
  const sut = new Account(100);
  sut._transactions = getTransactionsMock();
  const actual = sut !== undefined;
  const expected = true;
  expect('be defined', actual, expected);
});

function getTransactionsMock() {
  return {};
}