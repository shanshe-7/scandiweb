import { createContext } from "react";

const CurrencyContext = createContext("$");

export const CurrencyProvider = CurrencyContext.Provider;

export default CurrencyContext;
