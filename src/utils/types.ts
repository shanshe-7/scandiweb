export interface MainState {
  isCurrencyOpen: boolean;
  isLoading: boolean;
  categories: Array<any>;
  currencies: Array<any>;
  currentCurrency: any;
  currentCategoryName: any;
  products: Array<any>;
  cartAddedProducts: any;
  isMiniCartOpen: boolean;
}

export interface MainProps {}

export interface NavProps {
  isCurrencyOpen: boolean;
  isLoading: boolean;
  categories: Array<any>;
  currencies: Array<any>;
  currentCategoryName: any;
  handleCurrencyOpen: any;
  handleCurrencyClick: any;
  handelCategoryClick: any;
  cartItemCount: number;
  handleMiniCartOpenCloseClick: any;
  isMiniCartOpen: boolean;
  handleMiniCartClose: any;
  handleCurrencyDropdownClose: any;
  handleItemCountChange: any;
  currency: string;
  total: number;
  items: Array<any>;
  handleViewBug: any;
  handleCheckoutRedirect: any;
}

export interface NavCartProps {
  cartItemCount: number;
  handleMiniCartOpenCloseClick: any;
  isMiniCartOpen: boolean;
  handleMiniCartClose: any;
  handleItemCountChange: any;
  currency: string;
  total: number;
  items: Array<any>;
  handleViewBug: any;
  handleCheckoutRedirect: any;
}

export interface ProductsProps {
  products: Array<any>;
  isLoading: boolean;
  handleProductRedirect: any;
  isMiniCartOpen: boolean;
}

export interface IndividualProductProps {
  src: string;
  name: string;
  prices: Array<any>;
  inStock: boolean;
  id: string;
  handleProductRedirect: any;
}

export interface ProductDescriptionState {
  product: any;
  isProductLoading: boolean;
}

export interface ProductImagesProps {
  images: Array<string>;
  isProductLoading: boolean;
}

export interface ProductImagesState {
  imageIdx: number;
}

export interface DescriptionDetailsProps {
  isProductLoading: boolean;
  name: string;
  description: string;
  prices: Array<any>;
  brand: string;
  attributes: any;
  inStock: boolean;
  id: string;
  gallery: string;
}

export interface CartProps {
  items: Array<any>;
  total: number;
  currency: string;
  handleItemCountChange: any;
  handleCheckoutRedirect: any;
}

export interface CartItemProps {
  id: string;
  prices: Array<any>;
  attributes: any;
  brand: string;
  name: string;
  gallery: string;
  itemCount: number;
  handleItemCountChange: any;
}

export interface DescriptionDetailsState {
  selected: any;
}

export interface ProductDescriptionProps {
  handleAddProductToCart: any;
  isMiniCartOpen: boolean;
}

export interface DescriptionDetailsProps {
  handleAddProductToCart: any;
}

export interface OutsideClickDeteCtorProps {
  onClickOutside: any;
}
// export interface IndividualProductState {
//   currentPrice: number;
// }
