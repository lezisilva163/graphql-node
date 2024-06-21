import { gql } from "apollo-server";

export const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product!
  }
`;
