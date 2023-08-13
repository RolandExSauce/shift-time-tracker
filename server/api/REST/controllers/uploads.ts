import { Request, Response, NextFunction } from "express";

//upload multiple files, #TODO: authenticate user before sending files 
export const uploadMultipleFiles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(req.files);
  try {
    if (req.files == undefined) {
      return res.status(400).send({ message: "Upload your files please!" });
    }
    next();
    return res.send("ok");
  } catch (err) {
    res.status(500).send({
      message: `Unable to upload the files: ${req?.files}. ${err}`,
    });
  }
};
