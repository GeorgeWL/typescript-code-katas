import { ICoinProperties } from '../interfaces/coinInterface';
import { CoinModel, DEFAULT_VALID_COINS } from '../models/coinModels';
import { checkValidCoin } from './validateCoins';

export function getCoinDenomination(coin: ICoinProperties, validCoins: Set<CoinModel> = DEFAULT_VALID_COINS): CoinModel {
  const validCoinArray = Array.from(validCoins);
  const coinDenomination: CoinModel | undefined = validCoinArray.find(validCoin => checkValidCoin(coin, { sizeMillimetres: validCoin.sizeMillimetres, weightGrams: validCoin.weightGrams }));
  if (coinDenomination) {
    return coinDenomination;
  } else {
    throw Error('Invalid Coin');
  }
}
