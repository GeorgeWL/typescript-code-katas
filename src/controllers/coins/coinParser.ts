import { ICoinProperties } from '../../interfaces/coinInterface';
import { CoinModel, DEFAULT_VALID_COINS } from '../../models/coinModels';

export function getCoinDenomination(coin: ICoinProperties, validCoins: CoinModel[] = DEFAULT_VALID_COINS): CoinModel {
  const coinDenomination: CoinModel | undefined = validCoins.find(validCoin => validCoin.get().weightGrams === coin.weightGrams && validCoin.get().sizeMillimetres === coin.sizeMillimetres);
  if (coinDenomination) {
    return coinDenomination;
  } else {
    throw Error('Invalid Coin');
  }
}
