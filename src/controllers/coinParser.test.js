import { getCoinDenomination } from './coinParser';
import { COIN_DIME, COIN_NICKEL, COIN_QUARTER } from '../models/coinModels';
describe('Coin Parser tests', () => {
  it('should return coin object from nickel coin properties', () => {
    expect(getCoinDenomination(COIN_NICKEL.CoinProperties).CoinName).toEqual(COIN_NICKEL.CoinName);
  });
  it('should return coin object from dime coin properties', () => {
    expect(getCoinDenomination(COIN_DIME.CoinProperties).CoinName).toEqual(COIN_DIME.CoinName);
  });
  it('should return coin object from quarter coin properties', () => {
    expect(getCoinDenomination(COIN_QUARTER.CoinProperties).CoinName).toEqual(COIN_QUARTER.CoinName);
  });
  it('should throw error if invalid coin properties', () => {
    expect(() => getCoinDenomination({ weightGrams: 50, sizeMillimetres: 50 })).toThrow();
  });
});
