import express from "express";
import cors from "cors";

import { routerShortUrl } from "./module/short-url/short.url.router.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routerShortUrl);
