import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { client } from "../../apollo/apolloConfig";
import { GET_PRODUCT } from "../../apollo/queries";
import {
  ProductDescriptionContent,
  ProductDescriptionWrapper,
  OutOfStockProductDescriptionPage,
} from "./components";
import ProductImages from "./ProductImages";
import { ProductDescriptionState } from "../../utils/types";
import DescriptionDetails from "./DescriptionDetails";

class ProductDescription extends Component<
  RouteComponentProps,
  ProductDescriptionState
> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      product: {},
      isProductLoading: true,
    };
  }
  componentDidMount() {
    this.handleGetProduct();
  }
  async handleGetProduct() {
    this.setState((prevState) => ({
      ...prevState,
      isProductLoading: true,
    }));
    const product = await client.query({
      query: GET_PRODUCT,
      variables: {
        id: this.props.location.state,
      },
    });
    this.setState((prevState) => ({
      ...prevState,
      isProductLoading: false,
      product: product.data.product,
    }));
  }
  render() {
    const { isProductLoading, product } = this.state;

    return (
      <ProductDescriptionWrapper>
        <ProductDescriptionContent inStock={product.inStock}>
          {!product.inStock && (
            <OutOfStockProductDescriptionPage>
              out of stock
            </OutOfStockProductDescriptionPage>
          )}
          <ProductImages
            isProductLoading={isProductLoading}
            images={product.gallery}
          />
          <DescriptionDetails
            isProductLoading={isProductLoading}
            name={product.name}
            description={product.description}
            prices={product.prices}
            brand={product.brand}
            attributes={product.attributes}
            inStock={product.inStock}
            category={product.category}
          />
        </ProductDescriptionContent>
      </ProductDescriptionWrapper>
    );
  }
}

export default withRouter(ProductDescription);
