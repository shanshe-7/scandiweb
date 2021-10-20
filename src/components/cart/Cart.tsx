import { Component } from "react";
import CartItems from "./CartItems";
import { CartProps } from "../../utils/types";
import {
  CartPageWrapper,
  CartPageContent,
  CartHeader,
  CartItemsWrapper,
  TotalPriceWrapper,
  ToTalPriceText,
  ToTalPrice,
  ProceedToCheckout,
  ItemsNotFound,
} from "./components";

export default class Cart extends Component<CartProps> {
  render() {
    const {
      items,
      currency,
      total,
      handleItemCountChange,
      handleCheckoutRedirect,
    } = this.props;

    return (
      <CartPageWrapper>
        <CartPageContent>
          <CartHeader>Cart</CartHeader>
          {items.length ? (
            <>
              <CartItemsWrapper>
                {items.map((item) => (
                  <CartItems
                    key={item.id}
                    id={item.id}
                    brand={item.brand}
                    name={item.name}
                    prices={item.prices}
                    gallery={item.gallery}
                    attributes={item.attributes}
                    itemCount={item.itemCount}
                    handleItemCountChange={handleItemCountChange}
                  />
                ))}
              </CartItemsWrapper>
              <TotalPriceWrapper>
                <ToTalPriceText>Total:</ToTalPriceText>
                <ToTalPrice>
                  {currency}
                  {total?.toFixed(2)}
                </ToTalPrice>
              </TotalPriceWrapper>
              <ProceedToCheckout onClick={handleCheckoutRedirect}>
                CHECK OUT
              </ProceedToCheckout>
            </>
          ) : (
            <ItemsNotFound>items not found</ItemsNotFound>
          )}
        </CartPageContent>
      </CartPageWrapper>
    );
  }
}
