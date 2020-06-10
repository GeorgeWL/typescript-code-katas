import { CoinPropertiesModel, CoinModel } from './coinModels';

export default class VendingMachine {
  private rejectedCoins: CoinPropertiesModel[] = [];
  private acceptedCoins: CoinModel[] = [];
  private products: any[] = [];//leave as is for now
  private displayedMessage: string = 'INSERT COIN';
  public get DisplayMessage(): string {
    return this.displayedMessage;
  }
  public get AcceptedCoins(): CoinModel[] {
    return this.acceptedCoins;
  }
  public get Products(): any[] {
    return this.products;
  }
  public setDisplayMessage = (newMsg: string) => {
    this.displayedMessage = newMsg;
  }
  public setAcceptedCoins = (accepted: CoinModel[]) => {
    this.acceptedCoins = accepted;
  }
}
