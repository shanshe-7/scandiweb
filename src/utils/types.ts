export interface MainState {
  isCurrencyOpen: boolean;
  isLoading: boolean;
  categories: Array<any>;
  currencies: Array<any>;
  currentCurrency: any;
  currentCategoryName: any;
  products: Array<any>;
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
}

export interface ProductsProps {
  products: Array<any>;
  isLoading: boolean;
  handleProductRedirect: any;
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
  category: string;
}

export interface DescriptionDetailsState {
  selected: any;
}
// export interface IndividualProductState {
//   currentPrice: number;
// }
