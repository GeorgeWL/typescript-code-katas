import { ICoin, EnumValidCoinTypes, ICoinProperties } from '../interfaces/coinInterface';
export class CoinPropertiesModel {
  public weightGrams: number | undefined;
  public diameterMillimetres: number | undefined;
  constructor(options: ICoinProperties) {
    this.weightGrams = options.weightGrams;
    this.diameterMillimetres = options.diameterMillimetres;
  }
}
export class CoinModel extends CoinPropertiesModel {
  private enumDenomination: EnumValidCoinTypes;
  private value: number;

  constructor(options: ICoin) {
    super(options);
    this.weightGrams = options.weightGrams;
    this.diameterMillimetres = options.diameterMillimetres;
    this.enumDenomination = options.enumDenomination;
    this.value = options.value;
  }

  public get CoinProperties(): ICoinProperties {
    return {
      weightGrams: this.weightGrams,
      diameterMillimetres: this.diameterMillimetres,
    };
  }

  public get CoinName(): string {
    return String(EnumValidCoinTypes[this.enumDenomination]);
  }

  public get CoinValue(): number {
    return this.value;
  }

  public get CoinWeightGrams(): number {
    return this.weightGrams;
  }

  public get CoindiameterMillimetres(): number {
    return this.diameterMillimetres;
  }

  public get(): ICoin {
    return {
      ...this.CoinProperties,
      enumDenomination: this.enumDenomination,
      value: this.value
    };
  }
}
export const COIN_NICKEL = new CoinModel({ value: 0.05, weightGrams: 5.0, diameterMillimetres: 21.21, enumDenomination: EnumValidCoinTypes.nickel });
export const COIN_DIME = new CoinModel({ value: 0.10, weightGrams: 2.268, diameterMillimetres: 17.91, enumDenomination: EnumValidCoinTypes.dime });
export const COIN_QUARTER = new CoinModel({ value: 0.25, weightGrams: 5.670, diameterMillimetres: 24.26, enumDenomination: EnumValidCoinTypes.quarter });
export const DEFAULT_VALID_COINS = [COIN_NICKEL, COIN_QUARTER, COIN_DIME];
