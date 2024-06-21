import { query } from "../../db";
import { Product, Resolvers } from "../../generated/types";

export const productResolver: Resolvers = {
  Query: {
    products: async () => {
      const res = await query("SELECT * FROM products");
      return res.rows;
    },
  },
  Mutation: {
    createProduct: async (
      _: any,
      args: { name: string; price: number }
    ): Promise<Product> => {
      const res = await query(
        "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
        [args.name, args.price]
      );
      return res.rows[0];
    },
  },
};
