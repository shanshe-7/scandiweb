import { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import EmptyCartIcon from "../../assets/icons/empty-cart.svg";
import { NavCartProps } from "../../utils/types";
import MiniCartItems from "../cart/MiniCartItems";

import {
  EmptyCart,
  CartIconItemsCount,
  CartIconAndItemsCountWrapper,
  MiniCartItemsWrapper,
  MiniCartItemsHeadedRegular,
  MiniCartItemsHeaderBold,
  MiniCartItemsHeaderWrapper,
  ViewBagAndProceedToCheckoutWrapper,
  ViewBag,
} from "./components";
import {
  ToTalPrice,
  TotalPriceWrapper,
  ToTalPriceText,
  ProceedToCheckout,
} from "../cart/components";
import { OutsideClickDetector } from "../../utils/OutsideClickDetector";

class NavigationCart extends Component<NavCartProps & RouteComponentProps> {
  render() {
    const {
      cartItemCount,
      handleMiniCartOpenCloseClick,
      isMiniCartOpen,
      handleMiniCartClose,
      handleItemCountChange,
      currency,
      total,
      items,
      location: { pathname },
      handleViewBug,
      handleCheckoutRedirect,
    } = this.props;

    return (
      <CartIconAndItemsCountWrapper
        notOpen={!cartItemCount || pathname === "/cart"}
      >
        <OutsideClickDetector onClickOutside={handleMiniCartClose}>
          {isMiniCartOpen && items.length ? (
            <MiniCartItemsWrapper>
              <MiniCartItemsHeaderWrapper>
                <MiniCartItemsHeaderBold>items, </MiniCartItemsHeaderBold>
                <MiniCartItemsHeadedRegular>
                  {cartItemCount} items
                </MiniCartItemsHeadedRegular>
              </MiniCartItemsHeaderWrapper>
              {items.map((item: any) => (
                <MiniCartItems
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

              <TotalPriceWrapper isMini>
                <ToTalPriceText isMini>Total:</ToTalPriceText>
                <ToTalPrice isMini>
                  {currency}
                  {total.toFixed(2)}
                </ToTalPrice>
              </TotalPriceWrapper>
              <ViewBagAndProceedToCheckoutWrapper>
                <ViewBag onClick={handleViewBug}>View Bag</ViewBag>
                <ProceedToCheckout onClick={handleCheckoutRedirect} isMini>
                  CHECK OUT
                </ProceedToCheckout>
              </ViewBagAndProceedToCheckoutWrapper>
            </MiniCartItemsWrapper>
          ) : null}
          <div onClick={handleMiniCartOpenCloseClick}>
            <EmptyCart src={EmptyCartIcon} />
            {cartItemCount ? (
              <CartIconItemsCount>{cartItemCount}</CartIconItemsCount>
            ) : null}
          </div>
        </OutsideClickDetector>
      </CartIconAndItemsCountWrapper>
    );
  }
}
export default withRouter(NavigationCart);
