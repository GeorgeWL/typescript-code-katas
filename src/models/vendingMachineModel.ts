import { CoinModel } from './coinModels';
import { ICoinProperties } from '../interfaces/coinInterface';
import ProductModel from './productModel';

export default class VendingMachine {
  private acceptedCoins: CoinModel[] = [];
  private rejectedCoins: ICoinProperties[] = [];
  private products: ProductModel[] = [];
  private displayedMessage: string = 'INSERT COIN';

  public get DisplayMessage(): string {
    return this.displayedMessage;
  }

  public get AcceptedCoins(): CoinModel[] {
    return this.acceptedCoins;
  }

  public get RejectedCoins(): ICoinProperties[] {
    return this.rejectedCoins;
  }

  public get AllProducts(): ProductModel[] {
    return this.products;
  }

  public get ProductsInStock(): ProductModel[] {
    return this.products.filter(product => product.IsInStock);
  }

  public setDisplayMessage = (newMsg: string) => {
    this.displayedMessage = newMsg;
  }

  public setAcceptedCoins = (accepted: CoinModel[]) => {
    this.acceptedCoins = accepted;
  }

  public setRejectedCoins = (rejected: ICoinProperties[]) => {
    this.rejectedCoins = rejected;
  }

  public buttonRefundAction = () => {
    this.acceptedCoins = [];
    this.rejectedCoins = [];
  }

}
