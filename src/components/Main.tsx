import { Component, SyntheticEvent } from "react";
import { CURRENCY_AND_SYMBOL } from "../utils/constants";
import {
  GET_CATEGORIES,
  GET_CURRENCIES,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
} from "../apollo/queries";
import { client } from "../apollo/apolloConfig";
import Navigation from "./navigation/Navigation";
import { MainState, MainProps } from "../utils/types";
import { CurrencyProvider } from "../utils/context";
import Products from "./productsToDisplay/Products";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import ProductDescription from "./productDescription/ProductDescription";

class Main extends Component<MainProps & RouteComponentProps, MainState> {
  constructor(props: MainProps & RouteComponentProps) {
    super(props);
    this.state = {
      isCurrencyOpen: false,
      isLoading: false,
      categories: [],
      currentCategoryName: window.localStorage.getItem("category") || "ALL",
      currencies: [],
      currentCurrency: window.localStorage.getItem("currency") || "$",
      products: [],
    };
    this.handleCurrencyOpen = this.handleCurrencyOpen.bind(this);
    this.handelCategoryClick = this.handelCategoryClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleProductRedirect = this.handleProductRedirect.bind(this);
  }

  async handelCategoryClick(e: SyntheticEvent) {
    const name = e.currentTarget?.innerHTML;

    if (name !== "ALL") {
      const productsByCategory = await client.query({
        query: GET_PRODUCTS_BY_CATEGORY,
        variables: {
          input: {
            title: name,
          },
        },
      });
      this.setState((prevState) => ({
        ...prevState,
        currentCategoryName: name,
        products: productsByCategory.data.category.products,
      }));
    } else {
      const products = await client.query({
        query: GET_PRODUCTS,
      });
      this.setState((prevState) => ({
        ...prevState,
        currentCategoryName: name,
        products: [
          ...products.data.categories[0].products,
          ...products.data.categories[1].products,
        ],
      }));
    }
    window.localStorage.setItem("category", name);
  }

  componentDidMount() {
    this.handleInitialQueries();
  }

  handleInitialQueries() {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    const categories = client.query({
      query: GET_CATEGORIES,
    });
    const currencies = client.query({
      query: GET_CURRENCIES,
    });

    const products =
      this.state.currentCategoryName === "ALL"
        ? client.query({
            query: GET_PRODUCTS,
          })
        : client.query({
            query: GET_PRODUCTS_BY_CATEGORY,
            variables: {
              input: {
                title: this.state.currentCategoryName,
              },
            },
          });

    Promise.all([categories, currencies, products]).then((values) =>
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false,
        categories: [{ name: "ALL" }, ...values[0].data.categories],
        currencies: values[1].data.currencies,
        products:
          this.state.currentCategoryName === "ALL"
            ? [
                ...values[2].data.categories[0].products,
                ...values[2].data.categories[1].products,
              ]
            : values[2].data.category.products,
      }))
    );
  }

  handleCurrencyClick(e: SyntheticEvent) {
    const currency =
      CURRENCY_AND_SYMBOL[e.currentTarget.innerHTML.split(" ")[1]];
    this.setState((prevState) => ({
      ...prevState,
      isCurrencyOpen: false,
      currentCurrency: currency,
    }));
    window.localStorage.setItem("currency", currency);
  }

  componentWillUnmount() {
    window.localStorage.removeItem("currency");
    window.localStorage.removeItem("category");
  }

  handleCurrencyOpen() {
    this.setState((prevState) => ({
      ...prevState,
      isCurrencyOpen: !prevState.isCurrencyOpen,
    }));
  }

  handleProductRedirect(id: string) {
    this.props.history.push({
      pathname: "description",
      state: id,
    });
  }

  render() {
    const {
      isLoading,
      categories,
      currentCategoryName,
      isCurrencyOpen,
      currencies,
      currentCurrency,
      products,
    } = this.state;

    return (
      <CurrencyProvider value={currentCurrency}>
        <Navigation
          isCurrencyOpen={isCurrencyOpen}
          isLoading={isLoading}
          categories={categories}
          currencies={currencies}
          currentCategoryName={currentCategoryName}
          handleCurrencyOpen={this.handleCurrencyOpen}
          handleCurrencyClick={this.handleCurrencyClick}
          handelCategoryClick={this.handelCategoryClick}
        />

        <Switch>
          <Route path="/" exact>
            <Products
              handleProductRedirect={this.handleProductRedirect}
              products={products}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/description" exact>
            <ProductDescription />
          </Route>
        </Switch>
      </CurrencyProvider>
    );
  }
}

export default withRouter(Main);
