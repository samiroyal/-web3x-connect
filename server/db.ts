import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);



export const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const db = drizzle(pool);
