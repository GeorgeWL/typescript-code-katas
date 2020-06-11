const { DEFAULT_VALID_COINS, CoinModel } = require('../../models/coinModels');

import { getCurrentBalanceFromCoins } from './balanceParser';
describe('gets balance of a set of valid coins', () => {
  it('should return sum of all coins provided', () => {
    const coins = DEFAULT_VALID_COINS;
    expect(getCurrentBalanceFromCoins(coins)).toEqual(.4);
  });
  it('should round floats to 2 decimal places', () => {
    // this is just catchin the possibility of what if coin type changes to something other than the default valid coins
    //    future proofing if say, it moves to other currency
    const coins = [
      new CoinModel({ enumDenomination: 4, diameterMillimetres: .259292124, value: .21231231357984, weightGrams: 20 }),
      new CoinModel({ enumDenomination: 4, diameterMillimetres: .259292124, value: .21231231357984, weightGrams: 20 }),
      new CoinModel({ enumDenomination: 4, diameterMillimetres: .259292124, value: .21231231357984, weightGrams: 20 }),
      new CoinModel({ enumDenomination: 4, diameterMillimetres: .259292124, value: .21231231357984, weightGrams: 20 })
    ];
    expect(getCurrentBalanceFromCoins(coins)).toEqual(.85);
  });
});
