/* eslint-disable jest/no-disabled-tests */
// temp disabled tests whilst work on this
import { getCoinDenomination } from './coinParser';
import { COIN_DIME, COIN_NICKEL, COIN_QUARTER } from '../models/coinModels';
describe('Coin Parser tests', () => {
  it.skip('should return coin object from nickel', () => {
    expect(getCoinDenomination(COIN_NICKEL.CoinProperties).CoinName).toEqual(COIN_NICKEL.CoinName);
  });
  it.skip('should return coin object from dime', () => {
    expect(getCoinDenomination(COIN_DIME.CoinProperties).CoinName).toEqual(COIN_DIME.CoinName);
  });
  it.skip('should return coin object from quarter', () => {
    expect(getCoinDenomination(COIN_QUARTER.CoinProperties).CoinName).toEqual(COIN_QUARTER.CoinName);
  });
  it('should throw error if invalid coin', () => {
    expect(getCoinDenomination({ weightGrams: 50, sizeMillimetres: 50 })).toThrow();
  });
});
