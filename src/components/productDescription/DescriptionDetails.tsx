import React, { Component, SyntheticEvent } from "react";
import {
  DescriptionDetailsProps,
  DescriptionDetailsState,
} from "../../utils/types";
import CurrencyContext from "../../utils/context";

import {
  DescriptionDetailsWrapper,
  BrandName,
  ProductName,
  PriceText,
  PriceAmount,
  AddToCart,
  Description,
  SizeText,
  AttributesWrapper,
  AttributeItemsWrapper,
  AttributeItem,
} from "./components";
import { CURRENCY_AND_SYMBOL } from "../../utils/constants";

export default class DescriptionDetails extends Component<
  DescriptionDetailsProps,
  DescriptionDetailsState
> {
  constructor(props: DescriptionDetailsProps) {
    super(props);
    this.state = {
      selected: {},
    };
  }
  static contextType = CurrencyContext;

  render() {
    const {
      inStock,
      prices,
      attributes,
      brand,
      name,
      description,
      isProductLoading,
      category,
    } = this.props;

    console.log(this.state.selected);

    return (
      <DescriptionDetailsWrapper>
        {!isProductLoading && (
          <>
            <BrandName>{brand}</BrandName>
            <ProductName>{name}</ProductName>
            {attributes.length ? (
              <AttributesWrapper>
                {attributes.map((attribute: any) => (
                  <div key={attribute.id}>
                    <SizeText>{attribute.name}:</SizeText>
                    <AttributeItemsWrapper>
                      {attribute.items.map((item: any) => (
                        <AttributeItem
                          onClick={() => {
                            this.setState((prevState) => ({
                              selected: {
                                ...prevState.selected,
                                [attribute.name]: item.value,
                              },
                            }));
                          }}
                          selected={
                            this.state.selected[attribute.name] ===
                              item.value &&
                            inStock &&
                            attribute.name !== "Color"
                          }
                          style={{
                            opacity:
                              attribute.name === "Color" &&
                              this.state.selected[attribute.name] ===
                                item.value &&
                              `0.1`,

                            background:
                              attribute.name === "Color"
                                ? item.value
                                : this.state.selected[attribute.name] ===
                                  item.value
                                ? "#1d1f22"
                                : "#fff",
                          }}
                          key={item.id}
                          inStock={inStock}
                        >
                          {attribute.name === "Color" ? "" : item.value}
                        </AttributeItem>
                      ))}
                    </AttributeItemsWrapper>
                  </div>
                ))}
              </AttributesWrapper>
            ) : (
              <div style={{ marginTop: "40px" }} />
            )}

            <PriceText>price:</PriceText>

            <PriceAmount>
              {this.context}
              {
                prices.find(
                  (price) =>
                    CURRENCY_AND_SYMBOL[price.currency] === this.context
                ).amount
              }
            </PriceAmount>
            <AddToCart inStock={inStock}>add to cart</AddToCart>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </>
        )}
      </DescriptionDetailsWrapper>
    );
  }
}
