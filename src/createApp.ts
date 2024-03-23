import express from "express";
import statusRouter from "./routes/status";

export function createApp() {
  const app = express();

  app.use("/status", statusRouter);

  return app;
}