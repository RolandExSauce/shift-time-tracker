// import { Request, Response, NextFunction } from "express";
// import fs from "fs";
// import { s3 } from "../config/amazon-sdk";
// import path from "path";

// const baseUrl = "http://localhost:3000/express/files/";
// // const appRoot = process.env.PWD;

// export const downloadFiles = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // const appRoot = process.env.PWD;
//   const directoryPath = "/.resources/static/assets/uploads/";

//   fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//       res.status(500).send({
//         message: "Unable to scan files!",
//       });
//     }

//     let fileInfos: { name: string; url: string }[] = [];

//     files.forEach((file) => {
//       fileInfos.push({
//         name: file,
//         url: baseUrl + file,
//       });
//     });

//     res.status(200).send(fileInfos);
//   });
// };

// export const downloadFile = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
// //   const appRoot = process.env.PWD;
//   const fileName = req.params.name;
//   const directoryPath ="./downloads/";

//   res.download(directoryPath + fileName, fileName, (err) => {
//     if (err) {
//       res.status(500).send({
//         message: "Could not download the file. " + err,
//       });
//     }
//   });
// };
