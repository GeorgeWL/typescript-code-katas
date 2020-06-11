      && = and then
# Feature
## Accept Coins
Accepts specific valid coins

## Valid Coins
  You don't magically know what the value is, has to be calculated based on properties of the coin

  **valid if**

  * Has a weight > 0 grams
  * Has a size > 0 millimiters (going to assume they mean diameter, as the spec doesn't state)
  * Has the same size and weight as any of the accepted denominations

## Select Product
  **select button press**
  *  enough money inserted = dispense && display `'THANK YOU'`
  * not enough money = display `'PRICE'` && display product.Price 
  * no money inserted = display `'INSERT COIN'` && display `'0.00'`
