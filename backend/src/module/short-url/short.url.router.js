import { Router } from "express";
import {
    getAllUrl,
    createUrl,
    deleteUrl,
    getUrl,
} from "./short.url.controller.js";

export const routerShortUrl = Router();

routerShortUrl.get("/", getAllUrl);
routerShortUrl.get("/:slot", getUrl);
routerShortUrl.post("/", createUrl);
routerShortUrl.delete("/:id", deleteUrl);
