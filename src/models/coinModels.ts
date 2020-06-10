import { ICoin, EnumValidCoinTypes, ICoinProperties } from '../interfaces/coinInterface';
export class CoinPropertiesModel {
  public weightGrams: number = 0;
  public sizeMillimetres: number = 0;
  constructor(options: ICoinProperties) {
    this.weightGrams = options.weightGrams;
    this.sizeMillimetres = options.sizeMillimetres;
  }
}
export class CoinModel extends CoinPropertiesModel {
  private denomination: EnumValidCoinTypes;
  private value: number;

  constructor(options: ICoin) {
    super(options);
    this.weightGrams = options.weightGrams;
    this.sizeMillimetres = options.sizeMillimetres;
    this.denomination = options.denomination;
    this.value = options.value;
  }

  public get CoinProperties(): ICoinProperties {
    return {
      weightGrams: this.weightGrams,
      sizeMillimetres: this.sizeMillimetres,
    };
  }

  public get CoinName(): string {
    return String(EnumValidCoinTypes[this.denomination]);
  }

  public get CoinValue(): number {
    return this.value;
  }

  public get(): ICoin {
    return {
      ...this.CoinProperties,
      denomination: this.denomination,
      value: this.value
    };
  }
}
export const COIN_NICKEL = new CoinModel({ value: 0.05, weightGrams: 5.0, sizeMillimetres: 21.21, denomination: EnumValidCoinTypes.nickel });
export const COIN_DIME = new CoinModel({ value: 0.10, weightGrams: 1, sizeMillimetres: 1, denomination: EnumValidCoinTypes.dime });
export const COIN_QUARTER = new CoinModel({ value: 0.25, weightGrams: 1, sizeMillimetres: 1, denomination: EnumValidCoinTypes.quarter });
export const DEFAULT_VALID_COINS = new Set([COIN_NICKEL, COIN_QUARTER, COIN_DIME]);
