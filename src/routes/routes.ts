import { Router } from "express";
import { auth } from "../middleware/auth";
import { AuthRoute } from "./auth-route";
import { ProductRoute } from "./product";
import { userRoute } from "./user-route";
import { CategoryRoute } from "./category";

export const routes = Router();

routes.use("/auth", AuthRoute);
routes.use("/user", auth, userRoute);
routes.use("/product", auth, ProductRoute);
routes.use("/category", auth, CategoryRoute);
