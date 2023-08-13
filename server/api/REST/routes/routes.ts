import express, { Application } from "express";
import { uploadMultipleFiles } from "../controllers/uploads";
import { uploadSingleFile } from "../controllers/upload";
import { upload } from "../middleware/aws";
import { uploadAvatar } from "../controllers/uploadUserAvatar";

const router = express.Router();
export const initRoutes = (app: Application) => {
  router.post("/express/upload-single", upload.single("file"), uploadSingleFile);
  router.post("/express/upload-avatar", upload.single("avatar"), uploadAvatar);
  router.post(
    "/express/upload-multiple",
    upload.array("files", 5),
    uploadMultipleFiles
  );

  // router.get("/files",  upload.array(""), downloadFiles);
  // router.get("(/files/:name", downloadFile);

  app.use(router);
};
