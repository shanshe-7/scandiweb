import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      name
    }
  }
`;

export const GET_CURRENCIES = gql`
  query currencies {
    currencies
  }
`;

export const GET_PRODUCTS = gql`
  query {
    categories {
      products {
        id
        name
        gallery
        inStock
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query category($input: CategoryInput) {
    category(input: $input) {
      products {
        id
        name
        gallery
        inStock
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      category
      description
      prices {
        currency
        amount
      }
      brand
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
    }
  }
`;
