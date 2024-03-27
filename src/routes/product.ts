import { Router } from "express";
import ProductController from "../controller/product";

export const ProductRoute = Router();

ProductRoute.get("/", ProductController.find);
ProductRoute.get("/:id", ProductController.findOne);
ProductRoute.post("/", ProductController.create);
// ProductRoute.put("/", ProductController.update);
ProductRoute.delete("/", ProductController.delete);
