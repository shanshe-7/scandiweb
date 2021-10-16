import { Component } from "react";
import {
  ProductsWrapper,
  ProductsHeader,
  ProductsContent,
  IndividualsProductsWrapper,
} from "./components";
import IndividualProduct from "./IndividualProduct";
import { ProductsProps } from "../../utils/types";

export default class Products extends Component<ProductsProps> {
  render() {
    const { products, isLoading, handleProductRedirect } = this.props;
    return (
      <ProductsWrapper>
        <ProductsContent>
          <ProductsHeader>Category name</ProductsHeader>
          <IndividualsProductsWrapper>
            {!isLoading &&
              products.map((product) => (
                <IndividualProduct
                  key={product.id}
                  name={product.name}
                  src={product.gallery[0]}
                  prices={product.prices}
                  inStock={product.inStock}
                  id={product.id}
                  handleProductRedirect={handleProductRedirect}
                />
              ))}
          </IndividualsProductsWrapper>
        </ProductsContent>
      </ProductsWrapper>
    );
  }
}
