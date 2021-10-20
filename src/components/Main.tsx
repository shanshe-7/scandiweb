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
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";

class Main extends Component<MainProps & RouteComponentProps, MainState> {
  constructor(props: MainProps & RouteComponentProps) {
    super(props);
    this.state = {
      isMiniCartOpen: false,
      isCurrencyOpen: false,
      isLoading: false,
      categories: [],
      currentCategoryName: window.localStorage.getItem("category") || "ALL",
      currencies: [],
      currentCurrency: window.localStorage.getItem("currency") || "$",
      products: [],
      cartAddedProducts: window.localStorage.getItem("cart")
        ? JSON.parse(window.localStorage.getItem("cart") as string)
        : [],
    };
    this.handleCurrencyOpen = this.handleCurrencyOpen.bind(this);
    this.handelCategoryClick = this.handelCategoryClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleProductRedirect = this.handleProductRedirect.bind(this);
    this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
    this.handleMiniCartOpenCloseClick =
      this.handleMiniCartOpenCloseClick.bind(this);
    this.handleMiniCartClose = this.handleMiniCartClose.bind(this);
    this.handleCurrencyDropdownClose =
      this.handleCurrencyDropdownClose.bind(this);
    this.handleCalculateTotalPrice = this.handleCalculateTotalPrice.bind(this);
    this.handleItemCountChange = this.handleItemCountChange.bind(this);
    this.handleViewBug = this.handleViewBug.bind(this);
    this.handleCheckoutRedirect = this.handleCheckoutRedirect.bind(this);
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

  handleAddProductToCart(item: any, id: string) {
    const findItem = this.state.cartAddedProducts.find(
      (item: any) => item.id === id
    );
    if (findItem) {
      alert("item already in cart");
    } else {
      this.setState((prevState) => ({
        ...prevState,
        cartAddedProducts: [...prevState.cartAddedProducts, item],
      }));
      window.localStorage.setItem(
        "cart",
        JSON.stringify([...this.state.cartAddedProducts, item])
      );
      alert("item successfully added");
    }
  }

  handleMiniCartOpenCloseClick(e: SyntheticEvent) {
    e.stopPropagation();
    this.setState((prevState) => ({
      ...prevState,
      isMiniCartOpen: !prevState.isMiniCartOpen,
    }));
  }

  handleMiniCartClose() {
    this.setState((prevState) => ({
      ...prevState,
      isMiniCartOpen: false,
    }));
  }

  handleCurrencyDropdownClose() {
    this.setState((prevState) => ({
      ...prevState,
      isCurrencyOpen: false,
    }));
  }

  handleCalculateTotalPrice() {
    if (this.state.cartAddedProducts.length) {
      const prices: any = [];
      this.state.cartAddedProducts.forEach((product: any) =>
        prices.push(
          product.prices.find(
            (price: any) =>
              CURRENCY_AND_SYMBOL[price.currency] === this.state.currentCurrency
          ).amount * product.itemCount
        )
      );
      return prices.reduce((prev: any, cur: any) => prev + cur);
    }
  }

  handleItemCountChange(id: string, sign: string, itemCount: number) {
    if (sign === "minus" && itemCount === 1) {
      this.setState((prevState) => ({
        ...prevState,
        isMiniCartOpen:
          prevState.cartAddedProducts.length === 1 ||
          this.props.location.pathname === "/cart"
            ? false
            : true,
        cartAddedProducts: prevState.cartAddedProducts.filter(
          (product: any) => product.id !== id
        ),
      }));
      window.localStorage.setItem(
        "cart",
        JSON.stringify(
          this.state.cartAddedProducts.filter(
            (product: any) => product.id !== id
          )
        )
      );
    } else {
      this.setState((prevState) => ({
        ...prevState,
        cartAddedProducts: prevState.cartAddedProducts.map((product: any) => {
          if (product.id === id) {
            return {
              ...product,
              itemCount:
                sign === "plus" ? product.itemCount++ : product.itemCount--,
            };
          } else {
            return product;
          }
        }),
      }));
      window.localStorage.setItem(
        "cart",
        JSON.stringify(
          this.state.cartAddedProducts.map((product: any) => {
            if (product.id === id) {
              return {
                ...product,
                itemCount:
                  sign === "plus" ? product.itemCount++ : product.itemCount--,
              };
            } else {
              return product;
            }
          })
        )
      );
    }
  }

  handleViewBug() {
    this.props.history.push("/cart");
    this.setState((prevState) => ({
      ...prevState,
      isMiniCartOpen: false,
    }));
  }

  handleCheckoutRedirect() {
    this.props.history.push("/checkout");
    this.setState((prevState) => ({
      ...prevState,
      isMiniCartOpen: false,
    }));
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
      cartAddedProducts,
      isMiniCartOpen,
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
          cartItemCount={cartAddedProducts.length}
          handleMiniCartOpenCloseClick={this.handleMiniCartOpenCloseClick}
          isMiniCartOpen={isMiniCartOpen}
          handleMiniCartClose={this.handleMiniCartClose}
          handleCurrencyDropdownClose={this.handleCurrencyDropdownClose}
          handleItemCountChange={this.handleItemCountChange}
          currency={currentCurrency}
          total={this.handleCalculateTotalPrice()}
          items={this.state.cartAddedProducts}
          handleViewBug={this.handleViewBug}
          handleCheckoutRedirect={this.handleCheckoutRedirect}
        />

        <Switch>
          <Route path="/" exact>
            <Products
              handleProductRedirect={this.handleProductRedirect}
              products={products}
              isLoading={isLoading}
              isMiniCartOpen={isMiniCartOpen}
            />
          </Route>
          <Route path="/description" exact>
            <ProductDescription
              handleAddProductToCart={this.handleAddProductToCart}
              isMiniCartOpen={isMiniCartOpen}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart
              handleItemCountChange={this.handleItemCountChange}
              currency={currentCurrency}
              total={this.handleCalculateTotalPrice()}
              items={this.state.cartAddedProducts}
              handleCheckoutRedirect={this.handleCheckoutRedirect}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="*" exact>
            <div>Page not found</div>
          </Route>
        </Switch>
      </CurrencyProvider>
    );
  }
}

export default withRouter(Main);
