// NOTE: Though there's also cent, half dollar and dollar, gonna assume machine only accepts these denominations
export enum EnumValidCoinTypes {
  'nickel',
  'dime',
  'quarter'
}

export interface ICoinProperties {
  weightGrams: number;
  sizeMillimetres: number;
}
export interface ICoin extends ICoinProperties {
  denomination: EnumValidCoinTypes;
  value: number;
}
