import { validateCoins } from './validateCoins';
import { DEFAULT_VALID_COINS } from '../models/coinModels';

describe('Check Valid Coin from Properties', () => {

});

describe('Coin Validation Test - validateCoin', () => {

});


describe('Coin Validation Tests - validateCoins', () => {
  it('should when given only invalid coins, return only false', () => {
    const coins = [
      { weightGrams: .3, sizeMillimetres: .5 },
      { weightGrams: 20, sizeMillimetres: 20 },
      { weightGrams: 10 ** 21, sizeMillimetres: 10 ** 21 }, // check big nubmers don't explode it
      { weightGrams: 10 ** -21, sizeMillimetres: 10 ** -21 } // check tiny numbers don't explode it
    ];
    expect(validateCoins(coins, DEFAULT_VALID_COINS)).toEqual([false, false, false, false]);
  });
  it('should when given only valid coins, return only true', () => {
    const coins = Array.from(DEFAULT_VALID_COINS).map(coin => coin.CoinProperties);
    expect(validateCoins(coins)).toEqual([true, true, true]);
  });
});
