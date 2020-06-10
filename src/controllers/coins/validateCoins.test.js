import { validateCoins } from './validateCoins';
import { DEFAULT_VALID_COINS } from '../../models/coinModels';

describe('Check Valid Coin from Properties', () => {
  it('should when given invalid coin, return false', () => {

  });
  it('should when given null, return false', () => {

  });
  it('should when given undefined, return false', () => {

  });
  it('should when given empty object, return false', () => {

  });
  it('should when given string, return false', () => {

  });
});

describe('Coin Validation Test - validateCoin', () => {

});


describe('Coin Validation Tests - validateCoins', () => {
  it('should when given only invalid coins, return only false', () => {
    const coins = [
      { weightGrams: .3, sizeMillimetres: .5 },
      { weightGrams: 20, sizeMillimetres: 20 },
      { weightGrams: 10 ** 21, sizeMillimetres: 10 ** 21 }, // check big nubmers don't explode it
      { weightGrams: 10 ** -21, sizeMillimetres: 10 ** -21 }, // check tiny numbers don't explode it
      null, // check invalid don't explode it
      undefined, //check invalid don't explode it
      {}, // check invalid don't explode
      'dime', // check invalid don't explode
    ];
    expect(validateCoins(coins, DEFAULT_VALID_COINS)).toEqual([false, false, false, false, false, false, false, false]);
  });
  it('should when given only valid coins, return only true', () => {
    const coins = Array.from(DEFAULT_VALID_COINS).map(coin => coin.CoinProperties);
    expect(validateCoins(coins)).toEqual([true, true, true]);
  });
});
