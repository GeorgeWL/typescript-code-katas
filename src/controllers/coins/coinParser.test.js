import { getCoinDenomination, getAcceptedAndRejected } from './coinParser';
import { COIN_DIME, COIN_NICKEL, COIN_QUARTER, DEFAULT_VALID_COINS } from '../../models/coinModels';
describe('getCoinDenomination tests', () => {
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
    expect(() => getCoinDenomination({ weightGrams: 50, diameterMillimetres: 50 })).toThrow();
  });
});

describe('parse rejected and accepted', () => {
  it('returns original coin array parsed to denominations inside of accepted value of object if all valid', () => {
    const coins = DEFAULT_VALID_COINS.map(coin => coin.CoinProperties);
    expect(getAcceptedAndRejected(coins)).toEqual({ accepted: DEFAULT_VALID_COINS, rejected: [] });
  });
  it('returns original unparsed coin array inside of rejected value of object if all invalid but still coins', () => {
    const coins = [{ weightGrams: 10, diameterMillimetres: 10 }, { weightGrams: .1, diameterMillimetres: .1 }, { weightGrams: 100, diameterMillimetres: 100 }];
    expect(getAcceptedAndRejected(coins)).toEqual({ accepted: [], rejected: coins });

  });
  it('returns parsed as undefined values coin array inside of rejected value of object if all invalid and not coins', () => {
    const coins = [undefined, 'dime', false];
    const expected = coins.map(() => ({
      diameterMillimetres: undefined,
      weightGrams: undefined
    }));
    expect(getAcceptedAndRejected(coins)).toEqual({ accepted: [], rejected: expected });
  });
  it('if some valid and some invalid, returns parsed valid coins in accepted, and original unparsed invalid in rejected', () => {
    const accepted = DEFAULT_VALID_COINS.map(coin => coin.CoinProperties);
    const rejected = [{ weightGrams: 10, diameterMillimetres: 10 }, { weightGrams: .1, diameterMillimetres: .1 }, { weightGrams: 100, diameterMillimetres: 100 }];
    expect(getAcceptedAndRejected([...accepted, ...rejected])).toEqual({ accepted: DEFAULT_VALID_COINS, rejected });
  });
});
