
export enum EnumProductName {
  'cola',
  'chips',
  'candy'
}

export interface IProduct {
  enumProductName: EnumProductName;
  amountInStock: number;
  price: number;
}
