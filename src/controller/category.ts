import { PrismaClient } from "@prisma/client";
import CommonCRUD from "./common";

const prisma = new PrismaClient();

class CategoryController extends CommonCRUD {
  constructor() {
    super("category");
  }
}

export default new CategoryController();
