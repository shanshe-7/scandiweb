import { Component } from "react";

import { NavProps } from "../../utils/types";
import CurrencyContext from "../../utils/context";

import NavigationCart from "./NavigationCart";
import Currency from "./Currency";
import Category from "./Category";

import {
  NavigationWrapper,
  NavigationContent,
  HalfCircle,
  TrapezoidShape,
  CurrencyAndCartWrapper,
} from "./components";

import HalfCircleIcon from "../../assets/icons/half-circle.svg";

class Navigation extends Component<NavProps> {
  static contextType = CurrencyContext;
  render() {
    const {
      isLoading,
      categories,
      currentCategoryName,
      isCurrencyOpen,
      currencies,
      handleCurrencyOpen,
      handleCurrencyClick,
      handelCategoryClick,
      cartItemCount,
      handleMiniCartOpenCloseClick,
      isMiniCartOpen,
      handleMiniCartClose,
      handleCurrencyDropdownClose,
      handleItemCountChange,
      currency,
      total,
      items,
      handleViewBug,
      handleCheckoutRedirect,
    } = this.props;
    return (
      <NavigationWrapper>
        <NavigationContent>
          <Category
            categories={categories}
            currentCategoryName={currentCategoryName}
            isLoading={isLoading}
            handelCategoryClick={handelCategoryClick}
          />
          <CurrencyAndCartWrapper>
            <Currency
              isLoading={isLoading}
              currencies={currencies}
              currentCurrency={this.context}
              handleCurrencyClick={handleCurrencyClick}
              isCurrencyOpen={isCurrencyOpen}
              handleCurrencyOpen={handleCurrencyOpen}
              handleCurrencyDropdownClose={handleCurrencyDropdownClose}
            />
            <NavigationCart
              isMiniCartOpen={isMiniCartOpen}
              handleMiniCartOpenCloseClick={handleMiniCartOpenCloseClick}
              cartItemCount={cartItemCount}
              handleMiniCartClose={handleMiniCartClose}
              handleItemCountChange={handleItemCountChange}
              currency={currency}
              total={total}
              items={items}
              handleViewBug={handleViewBug}
              handleCheckoutRedirect={handleCheckoutRedirect}
            />
          </CurrencyAndCartWrapper>
          <TrapezoidShape>
            <HalfCircle src={HalfCircleIcon}></HalfCircle>
          </TrapezoidShape>
        </NavigationContent>
      </NavigationWrapper>
    );
  }
}

export default Navigation;
