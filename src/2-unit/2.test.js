import { expect, test } from '../../utils/1-bit.tester.js';
import { Account } from './bank/account.js';

test('a call to withdraw more than is allowed', () => {
  const sut = new Account();
  sut._transactions = {};
  sut._clerk = {
    isAllowed() {
      return false;
    }
  };
  let actual = false;
  try {
    sut.withdraw(10);
  } catch (e) {
    actual = true;
  }
  const expected = true;
  expect('throws an exception', actual, expected);
});

test('a call to balance', () => {
  const sut = new Account();
  sut._transactions = {};
  sut._clerk = {
    calculateBalance() {
      return 7;
    }
  };
  const actual = sut.getBalance();
  const expected = 7;
  expect('return what clerk has calculated', actual, expected);
});
