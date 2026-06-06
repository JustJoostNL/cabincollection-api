import { Hono } from "hono";
import { auth } from "./lib/auth";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/ping", (c) => {
  return c.json({ message: "OK" });
});

app.onError((err, c) => {
  console.error(err);
  return c.json({ message: "Internal Server Error" }, 500);
});

app.notFound((c) => {
  return c.json({ message: "Not found" }, 404);
});

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth().handler(c.req.raw);
});

// biome-ignore lint/style/noDefaultExport: Required by Hono
export default app;
