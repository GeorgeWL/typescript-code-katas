import { getCoinDenomination } from './coinParser';
import { COIN_DIME, COIN_NICKEL, COIN_QUARTER } from '../models/coinModels';
describe('Coin Parser tests', () => {
  it('should return coin object from nickel coin properties', () => {
    expect(getCoinDenomination(COIN_NICKEL.CoinProperties).CoinName).toEqual(COIN_NICKEL.CoinName);
    expect(getCoinDenomination(COIN_NICKEL.CoinProperties).CoinValue).toEqual(COIN_NICKEL.CoinValue);
    expect(getCoinDenomination(COIN_NICKEL.CoinProperties).CoinProperties).toEqual(COIN_NICKEL.CoinProperties);
  });
  it('should return coin object from dime coin properties', () => {
    expect(getCoinDenomination(COIN_DIME.CoinProperties).CoinName).toEqual(COIN_DIME.CoinName);
    expect(getCoinDenomination(COIN_DIME.CoinProperties).CoinValue).toEqual(COIN_DIME.CoinValue);
    expect(getCoinDenomination(COIN_DIME.CoinProperties).CoinProperties).toEqual(COIN_DIME.CoinProperties);
  });
  it('should return coin object from quarter coin properties', () => {
    expect(getCoinDenomination(COIN_QUARTER.CoinProperties).CoinName).toEqual(COIN_QUARTER.CoinName);
    expect(getCoinDenomination(COIN_QUARTER.CoinProperties).CoinValue).toEqual(COIN_QUARTER.CoinValue);
    expect(getCoinDenomination(COIN_QUARTER.CoinProperties).CoinProperties).toEqual(COIN_QUARTER.CoinProperties);
  });
  it('should throw error if invalid coin properties', () => {
    expect(() => getCoinDenomination({ weightGrams: 50, sizeMillimetres: 50 })).toThrow();
  });
});
