
export enum EnumProductName {
  'cola',
  'chips',
  'candy'
}

export default interface IProduct {
  enumProductName: EnumProductName;
  amountInStock: number;
  price: number;
}
