import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());

app.get("/", () => {
  return new Response("Good morning!");
});
export default {
  port: 3000,
  fetch: app.fetch,
};
