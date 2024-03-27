import { Router } from "express";
import CategoryController from "../controller/category";

export const CategoryRoute = Router();

CategoryRoute.get("/", CategoryController.find);
CategoryRoute.get("/:id", CategoryController.findOne);
CategoryRoute.post("/", CategoryController.create);
