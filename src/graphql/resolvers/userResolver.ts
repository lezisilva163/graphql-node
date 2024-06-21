import { query } from "../../db";
import { Resolvers, User } from "../../generated/types";

export const userResolver: Resolvers = {
  Query: {
    users: async () => {
      const res = await query("SELECT * FROM users");
      return res.rows;
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      args: { name: string; email: string }
    ): Promise<User> => {
      const res = await query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [args.name, args.email]
      );
      return res.rows[0];
    },
  },
};
