import { CoinModel } from '../../models/coinModels';
import ProductModel from '../../models/productModel';
// intent is it never will see invalid coins, but just in case, nullish coalesces into 0
export function getCurrentBalanceFromCoins(coins: CoinModel[]): number {
  const balances: number[] = coins.map(coin => coin?.CoinValue ?? 0);
  const totalBalance: number = balances.reduce((prev, next) => prev + next);
  // can't have a fractional coin, only two decimal places
  return parseFloat(totalBalance.toFixed(2));
}
// May remove these two and adds as a getter on ProductModel...haven't decided
export function canAffordProductFromBalance(product: ProductModel, balance: number): boolean {
  return balance >= product.ProductPrice;
}
// simple. doesn't care if negative as will only be called if can afford product with current balance
export function getBalanceAfterPurchase(product: ProductModel, balance: number): number {
  return balance - product.ProductPrice;
}
