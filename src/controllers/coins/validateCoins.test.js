import { validateCoins, checkValidCoin, validateCoin } from './validateCoins';
import { DEFAULT_VALID_COINS } from '../../models/coinModels';

describe('Coin Validation Test - validateCoin', () => {
  const smallCoin = { weightGrams: .3, diameterMillimetres: .5 };
  const largeCoin = { weightGrams: 20, diameterMillimetres: 20 };
  const impossibleSmallCoin = { weightGrams: 10 ** -21, diameterMillimetres: 10 ** -21 }; // check tiny numbers don't explode it
  const impossibleLargeCoin = { weightGrams: 10 ** 21, diameterMillimetres: 10 ** 21 }; // check big nubmers don't explode it
  it('should return false for coin properties that don\'t match existing coins', () => {
    expect(validateCoin(smallCoin)).toEqual(false);
    expect(validateCoin(largeCoin)).toEqual(false);
    expect(validateCoin(impossibleSmallCoin)).toEqual(false);
    expect(validateCoin(impossibleLargeCoin)).toEqual(false);
  });
  it('should return false for wrong value types', () => {
    expect(validateCoin(null)).toEqual(false);
    expect(validateCoin(undefined)).toEqual(false);
    expect(validateCoin({})).toEqual(false);
    expect(validateCoin('dime')).toEqual(false);
    expect(validateCoin({ weightGrams: 10 })).toEqual(false);
    expect(validateCoin({ diameterMillimetres: 10 })).toEqual(false);

  });
});


describe('Coin Validation Tests - validateCoins', () => {
  it('should when given only invalid coins, return only false', () => {
    const coins = [
      { weightGrams: .3, diameterMillimetres: .5 },
      { weightGrams: 20, diameterMillimetres: 20 },
      { weightGrams: 10 ** 21, diameterMillimetres: 10 ** 21 }, // check big nubmers don't explode it
      { weightGrams: 10 ** -21, diameterMillimetres: 10 ** -21 }, // check tiny numbers don't explode it
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
  it('should when given valid and invalid coins, return true for valid, false for invalid', () => {
    const coins = Array.from(DEFAULT_VALID_COINS).map(coin => coin.CoinProperties);
    expect(validateCoins(coins)).toEqual([true, true, true]);
  });
});
