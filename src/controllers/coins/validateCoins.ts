import { ICoinProperties } from '../../interfaces/coinInterface';
import { CoinModel, DEFAULT_VALID_COINS } from '../../models/coinModels';

export function validateCoins(
  coins: ICoinProperties[],
  validCoins: CoinModel[] = DEFAULT_VALID_COINS
): boolean[] {
  return coins.map(coin =>
    validateCoin(coin, validCoins)
  );
}

function checkValidCoin(
  coin: ICoinProperties,
  validCoin: ICoinProperties
): boolean {
  return (coin?.diameterMillimetres === validCoin.diameterMillimetres &&
    coin?.weightGrams === validCoin.weightGrams) ?? false;
}

// NOTE: In reality coins would likely have a range of weights - 
// but for this kata assuming this is perfect world
export function validateCoin(
  coin: ICoinProperties,
  validCoins: CoinModel[] = DEFAULT_VALID_COINS
): boolean {
  // for each valid coin, check if coin is in set
  // return true if is
  const isValidCoin = validCoins
    .map((validCoin: CoinModel) => {
      const validCoinProperties = validCoin.CoinProperties;
      // check that the coin matches any of the valid values
      return checkValidCoin(coin, validCoinProperties);
    })
    // if any are true, regardless of which. return a true
    .some(val => val === true);
  return isValidCoin;
}
