import { Component } from "react";
import { CURRENCY_AND_SYMBOL } from "../../utils/constants";
import CurrencyContext from "../../utils/context";
import { CartItemProps } from "../../utils/types";

import {
  CartItemWrapper,
  CartItemContentWrapper,
  ItemDetailsWrapper,
  ItemBrand,
  ItemName,
  ItemPrice,
  ItemAttribute,
  ItemQuantityAndImageWrapper,
  PlusMinusSignAndQuantiWrapper,
  SignWrapper,
  HorizontalLine,
  VerticalLine,
  Quantity,
  ItemImage,
  ItemAttributeText,
  ItemAttributesWrapper,
} from "./components";

export default class CartItems extends Component<CartItemProps> {
  static contextType = CurrencyContext;

  render() {
    let {
      brand,
      name,
      prices,
      attributes,
      gallery,
      itemCount,
      handleItemCountChange,
      id,
    } = this.props;

    return (
      <CartItemWrapper>
        <CartItemContentWrapper>
          <ItemDetailsWrapper>
            <ItemBrand>{brand}</ItemBrand>
            <ItemName>{name}</ItemName>
            <ItemPrice>
              {this.context}
              {(
                itemCount *
                prices.find(
                  (price) =>
                    CURRENCY_AND_SYMBOL[price.currency] === this.context
                ).amount
              ).toFixed(2)}
            </ItemPrice>
            {Object.keys(attributes).length ? (
              <ItemAttributesWrapper>
                {Object.keys(attributes).map((attribute, i) => (
                  <ItemAttribute
                    key={i}
                    style={{
                      background:
                        attribute === "Color" ? attributes[attribute] : "#fff",
                      color:
                        attribute === "Color"
                          ? attributes[attribute]
                          : "#1D1F22",
                      width: attribute === "Color" ? "63px" : "fit-content",
                    }}
                  >
                    <ItemAttributeText>
                      {attributes[attribute]}
                    </ItemAttributeText>
                  </ItemAttribute>
                ))}
              </ItemAttributesWrapper>
            ) : null}
          </ItemDetailsWrapper>
          <ItemQuantityAndImageWrapper>
            <PlusMinusSignAndQuantiWrapper>
              <SignWrapper
                onClick={() => handleItemCountChange(id, "plus", itemCount)}
              >
                <HorizontalLine />
                <VerticalLine />
              </SignWrapper>
              <Quantity>{itemCount}</Quantity>
              <SignWrapper
                onClick={() => handleItemCountChange(id, "minus", itemCount)}
              >
                <HorizontalLine />
              </SignWrapper>
            </PlusMinusSignAndQuantiWrapper>
            <ItemImage src={gallery} />
          </ItemQuantityAndImageWrapper>
        </CartItemContentWrapper>
      </CartItemWrapper>
    );
  }
}
