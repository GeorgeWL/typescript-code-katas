import { ICoinProperties, ICoinsAcceptedRejected } from '../../interfaces/coinInterface';
import { CoinModel, DEFAULT_VALID_COINS } from '../../models/coinModels';
import { validateCoin } from './validateCoins';

export function getCoinDenomination(coin: ICoinProperties, validCoins: CoinModel[] = DEFAULT_VALID_COINS): CoinModel {
  const coinDenomination: CoinModel | undefined = validCoins.find(validCoin => validCoin.CoinWeightGrams === coin.weightGrams && validCoin.CoindiameterMillimetres === coin.diameterMillimetres);
  if (coinDenomination) {
    return coinDenomination;
  } else {
    throw Error('Invalid Coin');
  }
}

export function getAcceptedAndRejected(coins: ICoinProperties[], validCoins: CoinModel[] = DEFAULT_VALID_COINS): ICoinsAcceptedRejected {
  const accepted: CoinModel[] = [];
  const rejected: ICoinProperties[] = [];
  const coinValidityMap: ICoinProperties[] = coins.map(coin => ({ ...coin, valid: validateCoin(coin, validCoins) }));
  coinValidityMap.forEach(coin => {
    if (coin.valid) {
      accepted.push(getCoinDenomination(coin));
    } else {
      rejected.push(
        { weightGrams: coin?.weightGrams ?? undefined, diameterMillimetres: coin?.diameterMillimetres ?? undefined }
      );
    }
  });
  return { accepted, rejected };
}
