import { Component } from "react";
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
  ItemAttributesWrapper,
  ItemAttributeText,
} from "./components";
import { CartItemProps } from "../../utils/types";
import { CURRENCY_AND_SYMBOL } from "../../utils/constants";
import CurrencyContext from "../../utils/context";

export default class MiniCartItems extends Component<CartItemProps> {
  static contextType = CurrencyContext;

  render() {
    const {
      brand,
      name,
      itemCount,
      handleItemCountChange,
      id,
      gallery,
      attributes,
      prices,
    } = this.props;

    return (
      <CartItemWrapper isMini>
        <CartItemContentWrapper isMini>
          <ItemDetailsWrapper>
            <ItemBrand isMini>{brand}</ItemBrand>
            <ItemName isMini>
              {name.length > 10 ? name.substring(0, 10).concat("...") : name}
            </ItemName>
            <ItemPrice isMini>
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
              <ItemAttributesWrapper isMini>
                {Object.keys(attributes).map((attribute, i) => (
                  <ItemAttribute
                    isMini
                    key={i}
                    style={{
                      background:
                        attribute === "Color" ? attributes[attribute] : "#fff",
                      color:
                        attribute === "Color"
                          ? attributes[attribute]
                          : "#1D1F22",
                    }}
                  >
                    <ItemAttributeText isMini>
                      {attribute === "Color" ? "" : attributes[attribute]}
                    </ItemAttributeText>
                  </ItemAttribute>
                ))}
              </ItemAttributesWrapper>
            ) : null}{" "}
          </ItemDetailsWrapper>
          <ItemQuantityAndImageWrapper>
            <PlusMinusSignAndQuantiWrapper isMini>
              <SignWrapper
                onClick={() => handleItemCountChange(id, "plus", itemCount)}
                isMini
              >
                <HorizontalLine isMini />
                <VerticalLine isMini />
              </SignWrapper>
              <Quantity isMini>{itemCount}</Quantity>
              <SignWrapper
                onClick={() => handleItemCountChange(id, "minus", itemCount)}
                isMini
              >
                <HorizontalLine isMini />
              </SignWrapper>
            </PlusMinusSignAndQuantiWrapper>
            <ItemImage isMini src={gallery} />
          </ItemQuantityAndImageWrapper>
        </CartItemContentWrapper>
      </CartItemWrapper>
    );
  }
}
