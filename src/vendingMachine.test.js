import VendingMachineModel from './models/vendingMachineModel';
import { DEFAULT_PRODUCTS } from './models/productModel';
import { DEFAULT_VALID_COINS } from './models/coinModels';

describe('Accept Coins Feature', () => {
  let vendingMachineInstance;
  beforeEach(() => {
    // clean instance state each time
    vendingMachineInstance = new VendingMachineModel(DEFAULT_PRODUCTS, DEFAULT_VALID_COINS, 1000);
  });
  it('accepts valid coins and updates balance', () => {
    vendingMachineInstance.setCoinsAndBalance(DEFAULT_VALID_COINS);
    expect(vendingMachineInstance.AcceptedCoins).toEqual(DEFAULT_VALID_COINS);
    expect(vendingMachineInstance.RejectedCoins).toEqual([]);
    expect(vendingMachineInstance.InsertedBalance).toEqual(.4);
  });
  it('should reject unused coins and not update balance', () => {
    const coins = [
      { weightGrams: .3, diameterMillimetres: .5 },
      { weightGrams: 20, diameterMillimetres: 20 },
      { weightGrams: 10 ** 21, diameterMillimetres: 10 ** 21 }, // check big nubmers don't explode it
      { weightGrams: 10 ** -21, diameterMillimetres: 10 ** -21 }, // check tiny numbers don't explode it
    ];
    vendingMachineInstance.setCoinsAndBalance(coins);
    expect(vendingMachineInstance.AcceptedCoins).toEqual([]);
    expect(vendingMachineInstance.RejectedCoins).toEqual(coins);
    expect(vendingMachineInstance.InsertedBalance).toEqual(0);
  });
  it('should reject invalid types and not update balance', () => {
    const coins = [undefined, 'dime', false, true, {}, Infinity, 7, { diameterMillimetres: 10 }, { weightGrams: 10 }];
    const expected = [
      {
        diameterMillimetres: undefined,
        weightGrams: undefined
      },
      {
        diameterMillimetres: undefined,
        weightGrams: undefined
      },
      {
        diameterMillimetres: undefined,
        weightGrams: undefined
      },
      {
        diameterMillimetres: undefined,
        weightGrams: undefined
      },
      {
        diameterMillimetres: undefined,
        weightGrams: undefined
      },
      {
        diameterMillimetres: undefined,
        weightGrams: undefined
      },
      {
        diameterMillimetres: undefined,
        weightGrams: undefined
      },
      {
        diameterMillimetres: 10,
        weightGrams: undefined
      },
      {
        diameterMillimetres: undefined,
        weightGrams: 10
      },
    ];
    vendingMachineInstance.setCoinsAndBalance(coins);
    expect(vendingMachineInstance.AcceptedCoins).toEqual([]);
    expect(vendingMachineInstance.RejectedCoins).toEqual(expected);
    expect(vendingMachineInstance.InsertedBalance).toEqual(0);
  });
});
describe('Feature Select Product', () => {
  let vendingMachineInstance;
  beforeEach(() => {
    // clean instance state each time
    vendingMachineInstance = new VendingMachineModel(DEFAULT_PRODUCTS, DEFAULT_VALID_COINS, 1000);
  });
  it('can purchase item with correct balance', () => {

  });
  vendingMachineInstance;
});
