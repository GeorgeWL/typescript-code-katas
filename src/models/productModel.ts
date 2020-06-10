import { IProduct, EnumProductName } from '../interfaces/productInterfaces';

export default class ProductModel {
  private enumProductName: EnumProductName;
  private amountInStock: number;
  private price: number;
  constructor(options: IProduct) {
    this.enumProductName = options.enumProductName;
    this.amountInStock = options.amountInStock;
    this.price = options.price;
  }
  public get AmountInStock(): number {
    return this.amountInStock;
  }
  public get IsInStock(): boolean {
    return this.amountInStock > 0;
  }
  public get ProductName(): string {
    return String(EnumProductName[this.enumProductName]);
  }
  public get ProductPrice(): number {
    return this.price;
  }
}
export const PRODUCT_COLA = new ProductModel({ enumProductName: EnumProductName.cola, price: 1, amountInStock: 10 });
export const PRODUCT_CHIPS = new ProductModel({ enumProductName: EnumProductName.chips, price: .5, amountInStock: 10 });
export const PRODUCT_CANDY = new ProductModel({ enumProductName: EnumProductName.candy, price: .65, amountInStock: 10 });
export const DEFAULT_PRODUCTS = [PRODUCT_COLA, PRODUCT_CHIPS, PRODUCT_CANDY];
