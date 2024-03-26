import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import { omit } from "lodash";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
  fetch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      if (!id) return res.status(500).json("Thiếu id");
      let user = await prisma.users.findUnique({ where: { id } });
      if (!user) {
        return res.status(404).json("Không tìm thấy người dùng");
      } else {
        const userClone = omit(user, "_doc.password");
        return res.status(200).json(userClone);
      }
    } catch (err) {
      next(err);
    }
  };
}
export default new UserController();
