import { validateCoins } from './validateCoins';
import { DEFAULT_VALID_COINS, CoinPropertiesModel } from '../models/coinModels';

describe('Check Valid Coin from Properties', () => {

});

describe('Coin Validation Test - validateCoin', () => {

});


describe('Coin Validation Tests - validateCoins', () => {
  it('should when given only invalid coins, return only false', () => {
    const coins = [
      new CoinPropertiesModel({ weightGrams: .3, sizeMillimetres: .5 }),
      new CoinPropertiesModel({ weightGrams: 20, sizeMillimetres: 20 }),
      new CoinPropertiesModel({ weightGrams: 10 ** 21, sizeMillimetres: 10 ** 21 }), // check big nubmers don't explode it
      new CoinPropertiesModel({ weightGrams: 10 ** -21, sizeMillimetres: 10 ** -21 }) // check tiny numbers don't explode it
    ];
    expect(validateCoins(coins, DEFAULT_VALID_COINS)).toEqual([false, false, false, false]);
  });
  it('should when given only valid coins, return only true', () => {
    const coins = [
      new CoinPropertiesModel({ weightGrams: .3, sizeMillimetres: .5 }),
      new CoinPropertiesModel({ weightGrams: 20, sizeMillimetres: 20 }),
      new CoinPropertiesModel({ weightGrams: 10 ** 21, sizeMillimetres: 10 ** 21 }), // check big nubmers don't explode it
      new CoinPropertiesModel({ weightGrams: 10 ** -21, sizeMillimetres: 10 ** -21 }) // check tiny numbers don't explode it
    ];
    expect(validateCoins(coins, DEFAULT_VALID_COINS)).toEqual([false, false, false, false]);
  });
});
