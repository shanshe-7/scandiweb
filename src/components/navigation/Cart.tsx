import { Component } from "react";
import EmptyCartIcon from "../../assets/icons/empty-cart.svg";

import {
  EmptyCart,
  CartIconItemsCount,
  CartIconAndItemsCountWrapper,
} from "./components";

export default class Cart extends Component {
  render() {
    return (
      <CartIconAndItemsCountWrapper>
        <EmptyCart src={EmptyCartIcon} />
        <CartIconItemsCount>2</CartIconItemsCount>
      </CartIconAndItemsCountWrapper>
    );
  }
}
