import { Component } from "react";
import { CURRENCY_AND_SYMBOL } from "../../utils/constants";
import CurrencyUpDownIcon from "../../assets/icons/currency-up-down.svg";

import {
  CurrencyUpDown,
  CurrencyText,
  CurrencyDropdown,
  CurrencyDropDownText,
} from "./components";
import { OutsideClickDetector } from "../../utils/OutsideClickDetector";

interface CurrencyProps {
  isLoading: boolean;
  currencies: Array<any>;
  currentCurrency: string;
  isCurrencyOpen: boolean;
  handleCurrencyClick: any;
  handleCurrencyOpen: any;
  handleCurrencyDropdownClose: any;
}

export default class Currency extends Component<CurrencyProps> {
  render() {
    const {
      currencies,
      isLoading,
      currentCurrency,
      handleCurrencyClick,
      isCurrencyOpen,
      handleCurrencyOpen,
      handleCurrencyDropdownClose,
    } = this.props;

    return (
      <>
        <CurrencyText>{currentCurrency}</CurrencyText>
        <OutsideClickDetector onClickOutside={handleCurrencyDropdownClose}>
          <CurrencyUpDown
            isCurrencyOpen={isCurrencyOpen}
            onClick={handleCurrencyOpen}
            src={CurrencyUpDownIcon}
          />

          {isCurrencyOpen && (
            <CurrencyDropdown>
              {!isLoading &&
                currencies.map((currency, idx) => (
                  <CurrencyDropDownText onClick={handleCurrencyClick} key={idx}>
                    {CURRENCY_AND_SYMBOL[currency]} {currency}
                  </CurrencyDropDownText>
                ))}
            </CurrencyDropdown>
          )}
        </OutsideClickDetector>
      </>
    );
  }
}
