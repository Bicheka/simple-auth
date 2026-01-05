import { Hono } from "hono";
import { logger } from "hono/logger";
import { auth } from "./lib/auth";
const app = new Hono();
app.use(logger());

// this line of code adds several routes provided by better auth got to /api/auth/reference
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
