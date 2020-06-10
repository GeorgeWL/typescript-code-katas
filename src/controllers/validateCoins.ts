import { ICoinProperties } from '../interfaces/coinInterface';
import { CoinModel, DEFAULT_VALID_COINS } from '../models/coinModels';

export function validateCoins(
  coins: ICoinProperties[],
  validCoins: Set<CoinModel> = DEFAULT_VALID_COINS
): boolean[] {
  return coins.map(coin =>
    validateCoin(coin, validCoins)
  );
}

export function checkValidCoin(
  coin: ICoinProperties,
  validCoin: ICoinProperties
): boolean {
  return coin.sizeMillimetres === validCoin.sizeMillimetres &&
    coin.weightGrams === validCoin.weightGrams;
}

// NOTE: In reality coins would likely have a range of weights - 
// but for this kata assuming this is perfect world
export function validateCoin(
  coin: ICoinProperties,
  validCoins: Set<CoinModel> = DEFAULT_VALID_COINS
): boolean {
  // for each valid coin, check if coin is in set
  // return true if is
  const validCoinArray = Array.from(validCoins);
  const isValidCoin = validCoinArray
    .map((validCoin: CoinModel) => {
      const validCoinProperties = validCoin.CoinProperties;
      // check that the coin matches any of the valid values
      return checkValidCoin(coin, validCoinProperties);
    })
    // if any are true, regardless of which. return a true
    .some(val => val === true);
  return isValidCoin;
}
