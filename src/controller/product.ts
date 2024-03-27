import { PrismaClient } from "@prisma/client";
import CommonCRUD from "./common";

const prisma = new PrismaClient();

class ProductController extends CommonCRUD {
  constructor() {
    super("product");
  }

  create = async (req: any, res: any) => {
    try {
      const { name, image, quantity, categories, description, unit, price } =
        req.body;
      const data = {};
      if (name) data["name"] = name;
      if (image) data["image"] = image;
      if (quantity) data["quantity"] = quantity;
      if (description) data["description"] = description;
      if (unit) data["unit"] = unit;
      if (price) {
        data["price"] = price;
      }
      const product = await prisma.product.create({
        data,
      });

      if (categories.length) {
        await prisma.product_category.createMany({
          data: categories.map((category: String) => {
            return {
              product_id: product.id,
              category_id: category,
            };
          }),
        });
      }
      return res.status(201).json(product);
    } catch (error) {
      throw res.status(400).json(error);
    }
  };

  // update = async (req: any, res: any) => {
  //   try {
  //     const id = req.params.id;
  //     const { name, image, quantity, description, unit, price } = req.body;

  //     const data = {};
  //     if (name) data["name"] = name;
  //     if (image) data["image"] = image;
  //     if (quantity) data["quantity"] = quantity;
  //     if (description) data["description"] = description;
  //     if (unit) data["unit"] = unit;
  //     if (price) {
  //       data["price"] = price;
  //     }
  //     const product = await prisma.product.update({
  //       where: {
  //         id,
  //       },
  //       data,
  //     });
  //     return res.status(200).json(product);
  //   } catch (error) {
  //     throw res.status(400).json(error);
  //   }
  // };
}

export default new ProductController();
