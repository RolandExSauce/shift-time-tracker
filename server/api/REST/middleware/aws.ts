import { Request } from "express";
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import util from "util";
import path from "path";
import multer, { Multer } from "multer";
import multerS3 from "multer-s3";
import {
  ACCESS_KEY_AWS,
  AWS_REGION,
  BUCKET_NAME,
  SECRET_KEY_AWS,
} from "../../env/UseValidatedEnv";

const configAWS = {
  region: AWS_REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_AWS,
    secretAccessKey: SECRET_KEY_AWS,
  },
};
const s3client = new S3Client(configAWS);

//&s3 storage
const storage = multerS3({
  acl: "public-read",
  s3: s3client,
  bucket: BUCKET_NAME,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    const fileName = `${Date.now()}_${uuidv4()}`;
    cb(null, `${fileName}${path.extname(file.originalname)}`);
  },
});

//filter here only for specific files
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

export const upload = multer({
  // storage: multer.memoryStorage(),
  storage: storage,
  fileFilter,
  limits: { fileSize: 1000000000, files: 5 },
});

// export const s3Uploadv3 = async (file: Express.Multer.File) => {
//   const params = {
//     acl: "public-read",
//     Bucket: BUCKET_NAME,
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     Key: `uploads/${uuidv4()}-${file.originalname}`,
//     Body: file.buffer,
//     ServerSideEncrypion: "AES256",
//   };
//   const putCommand = new PutObjectCommand(params);
//   await s3client.send(putCommand);
// };
