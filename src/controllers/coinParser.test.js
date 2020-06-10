import { getCoinDenomination } from './coinParser';
import { COIN_DIME, COIN_NICKEL, COIN_QUARTER } from '../models/coinModels';
describe('Coin Parser tests', () => {
  it('should return coin object from nickel', () => {
    expect(getCoinDenomination(COIN_NICKEL.CoinProperties)).toEqual(COIN_NICKEL);
  });
  it('should return coin object from dime', () => {
    expect(getCoinDenomination(COIN_DIME.CoinProperties)).toEqual(COIN_DIME);
  });
  it('should return coin object from quarter', () => {
    expect(getCoinDenomination(COIN_QUARTER.CoinProperties)).toEqual(COIN_QUARTER);
  });
  it('should throw error if invalid coin', () => {
    expect(getCoinDenomination({ weightGrams: 50, sizeMillimetres: 50 })).toThrowError('Invalid Coin');
  });
});
