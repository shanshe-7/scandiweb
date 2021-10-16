import React, { Component } from "react";
import { CURRENCY_AND_SYMBOL } from "../../utils/constants";
import EmptyCartWhiteIcon from "../../assets/icons/empty-cart-white.svg";

import {
  ProductWrapper,
  ProductContent,
  ProductImage,
  ProductName,
  ProductPrice,
  OutOfStockText,
  CartWrapper,
  Cart,
} from "./components";
import { IndividualProductProps } from "../../utils/types";
import CurrencyContext from "../../utils/context";

class IndividualProduct extends Component<IndividualProductProps> {
  constructor(props: IndividualProductProps) {
    super(props);
    this.state = {
      currentPrice: 0,
    };
  }
  static contextType = CurrencyContext;

  render() {
    const { name, src, prices, inStock, id, handleProductRedirect } =
      this.props;

    return (
      <ProductWrapper inStock={inStock}>
        <ProductContent
          onClick={() => {
            handleProductRedirect(id);
          }}
        >
          {inStock && (
            <CartWrapper>
              <Cart src={EmptyCartWhiteIcon} />
            </CartWrapper>
          )}
          <ProductImage src={src} />
          {!inStock && <OutOfStockText>OUT OF STOCK</OutOfStockText>}

          <ProductName>{name}</ProductName>
          <ProductPrice>
            {this.context}
            {
              prices.find(
                (price) => CURRENCY_AND_SYMBOL[price.currency] === this.context
              ).amount
            }
          </ProductPrice>
        </ProductContent>
      </ProductWrapper>
    );
  }
}

export default IndividualProduct;
