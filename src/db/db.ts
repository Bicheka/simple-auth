import { drizzle } from "drizzle-orm/bun-sql";
import { sql } from "bun";

// sql automatically uses an enviroment variable to get the database url "POSTGRES_URL"
export const db = drizzle(sql);
