import { Request, Response, NextFunction } from "express";
import { getAuthUser } from "../../middleware/authUser";
import { prisma } from "../../database/prisma/db-client";


export const uploadAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAuthUser(req);
    console.log(user)
    const foundUser = await prisma.user.findFirst({
      where: { id: user?.aud as string },
    });
    console.log(foundUser);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Upload your file please!" });
    }
    res.send("ok");
    next();
    return res.json({ status: "success" });
  } catch (err) {
    res.status(500).send({
      message: `Unable to upload the files: ${req?.file}. ${err}`,
    });
  }
};
