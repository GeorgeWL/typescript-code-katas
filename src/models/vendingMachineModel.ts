import { getAcceptedAndRejected } from '../controllers/coins/coinParser';
import { ICoinProperties } from '../interfaces/coinInterface';
import { CoinModel } from './coinModels';
import ProductModel from './productModel';
import { getCurrentBalanceFromCoins } from '../controllers/machine/balanceParser';

export default class VendingMachineModel {
  private acceptedCoins: CoinModel[] = [];
  private rejectedCoins: ICoinProperties[] = [];
  private products: ProductModel[] = [];
  private selectedProduct: ProductModel | undefined;
  private validCoins: CoinModel[] = []
  private insertedBalance: number = 0;
  private machineBalance: number = 0;
  private displayedMessage: string = 'INSERT COIN';

  constructor(initialProducts: ProductModel[], initialValidCoins: CoinModel[], initialBalance: number) {
    this.products = initialProducts;
    this.validCoins = initialValidCoins;
    this.machineBalance = initialBalance;
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

  public get ValidCoins() {
    return this.validCoins;
  }

  public get MachineBalance() {
    return this.machineBalance;
  }

  public get InsertedBalance() {
    return this.insertedBalance;
  }

  public get DisplayedMessage() {
    return this.displayedMessage;
  }

  // computed from machine balance
  public get CanMakeChange(): boolean {
    if (this.selectedProduct) {
      return (
        this.selectedProduct.ProductPrice <= this.machineBalance ||
        this.selectedProduct.ProductPrice <= this.insertedBalance
      );
    }
    return false;
  }

  public setDisplayMessage = (newMsg: string) => {
    this.displayedMessage = newMsg;
  }

  public setCoinsAndBalance = (coins: ICoinProperties[]) => {
    const { accepted, rejected } = getAcceptedAndRejected(coins);
    this.acceptedCoins = accepted;
    this.rejectedCoins = rejected;
    this.insertedBalance = getCurrentBalanceFromCoins(this.acceptedCoins);
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
