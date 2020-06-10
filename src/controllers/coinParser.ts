import { ICoinProperties } from '../interfaces/coinInterface';
import { CoinModel, DEFAULT_VALID_COINS } from '../models/coinModels';

export function getCoinDenomination(coin: ICoinProperties, validCoins: Set<CoinModel> = DEFAULT_VALID_COINS): CoinModel {
  const validCoinArray = Array.from(validCoins);
  const coinDenomination: CoinModel | undefined = validCoinArray.find(validCoin => validCoin.get().weightGrams === coin.weightGrams && validCoin.get().sizeMillimetres === coin.sizeMillimetres);
  if (coinDenomination) {
    return coinDenomination;
  } else {
    throw Error('Invalid Coin');
  }
}
