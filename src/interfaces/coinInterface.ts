import { CoinModel } from '../models/coinModels';

// NOTE: Though there's also cent, half dollar and dollar, gonna assume machine only accepts these denominations
export enum EnumValidCoinTypes {
  'nickel',
  'dime',
  'quarter',
  'test-float'
}

export interface ICoinProperties {
  weightGrams: number | undefined;
  diameterMillimetres: number | undefined;
  valid?: boolean;
}
export interface ICoin extends ICoinProperties {
  enumDenomination: EnumValidCoinTypes;
  value: number;
}

export interface ICoinsAcceptedRejected {
  accepted: CoinModel[];
  rejected: ICoinProperties[]
}
