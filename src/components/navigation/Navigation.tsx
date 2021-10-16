import { Component } from "react";

import { NavProps } from "../../utils/types";
import CurrencyContext from "../../utils/context";

import Cart from "./Cart";
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
            />
            <Cart />
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
