import fetch from "node-fetch";

export const singleUpload = async (_: undefined, args: any, ctx: any) => {
  // const baseURL = "http://localhost:3000/express";

  console.log(args)
  console.log(ctx.req)
  const { fileBits, mimetype, encoding } = args;


  return new File(fileBits, mimetype) as any;


  //console.log(ctx.req) => body.query

  // console.log(ctx.req.body.query);

  // return fetch(`${baseURL}/upload-single`, {
  //   method: "POST",
  //   body: JSON.stringify(file),
  //   headers: { "Content-Type": "application/json" },
  // }).then((res) => res.text());
};
