import { Pool } from "pg";

const pool = new Pool({
  user: "docker",
  host: "localhost",
  database: "graphql",
  password: "docker",
  port: 5432,
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
