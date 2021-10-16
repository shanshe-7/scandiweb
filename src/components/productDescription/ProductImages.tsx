import { Component } from "react";
import { ProductImagesProps, ProductImagesState } from "../../utils/types";
import {
  ProductImagesWrapper,
  SmallImagesWrapper,
  SmallImage,
  BigImage,
} from "./components";

export default class ProductImages extends Component<
  ProductImagesProps,
  ProductImagesState
> {
  constructor(props: ProductImagesProps) {
    super(props);
    this.state = {
      imageIdx: 0,
    };
  }
  render() {
    const { isProductLoading, images } = this.props;

    return (
      <ProductImagesWrapper>
        <SmallImagesWrapper>
          {!isProductLoading &&
            images.map((image, i) => (
              <SmallImage
                onClick={() => {
                  this.setState({ imageIdx: i });
                }}
                key={i}
                src={image}
              />
            ))}
        </SmallImagesWrapper>
        {!isProductLoading && <BigImage src={images[this.state.imageIdx]} />}
      </ProductImagesWrapper>
    );
  }
}
