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
import { ProductDescriptionProps } from "../../utils/types";

class ProductDescription extends Component<
  ProductDescriptionProps & RouteComponentProps,
  ProductDescriptionState
> {
  constructor(props: ProductDescriptionProps & RouteComponentProps) {
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
    const { handleAddProductToCart, isMiniCartOpen } = this.props;

    return (
      <ProductDescriptionWrapper isMiniCartOpen={isMiniCartOpen}>
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
            id={product.id}
            isProductLoading={isProductLoading}
            name={product.name}
            description={product.description}
            prices={product.prices}
            brand={product.brand}
            attributes={product.attributes}
            inStock={product.inStock}
            handleAddProductToCart={handleAddProductToCart}
            gallery={product.gallery?.[0]}
          />
        </ProductDescriptionContent>
      </ProductDescriptionWrapper>
    );
  }
}

export default withRouter(ProductDescription);
