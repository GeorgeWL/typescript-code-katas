import { CoinModel } from './coinModels';
import { ICoinProperties } from '../interfaces/coinInterface';
import ProductModel from './productModel';
import { getCurrentBalanceFromCoins } from '../controllers/machine/balanceParser';

export default class VendingMachine {
  private acceptedCoins: CoinModel[] = [];
  private rejectedCoins: ICoinProperties[] = [];
  private products: ProductModel[] = [];
  private displayedMessage: string = 'INSERT COIN';
  private selectedProduct: ProductModel | undefined;
  private machineCoins: CoinModel[] = []
  private machineBalance: number = 0;

  constructor(initialProducts: ProductModel[], initialCoins: CoinModel[]) {
    this.products = initialProducts;
    this.machineCoins = initialCoins;
    this.machineBalance = getCurrentBalanceFromCoins(initialCoins);
  }

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

  public get SelectedProduct(): ProductModel | undefined {
    return this.selectedProduct;
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

  public setSelectedProduct = (product: ProductModel) => {
    this.selectedProduct = product;
  }

  public buttonRefundAction = () => {
    this.acceptedCoins = [];
    this.rejectedCoins = [];
    this.selectedProduct = undefined;
  }

}
