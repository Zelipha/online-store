import { gql } from "@apollo/client";

const DESCRIPTION = gql`
  query getProduct($Product_id: String!) {
    product(id: $Product_id) {
      id
      name
      brand
      gallery
      category
      description
      inStock
      attributes {
        name
        type
        id
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          symbol
          label
        }
      }
    }
  }
`;

export default DESCRIPTION;
