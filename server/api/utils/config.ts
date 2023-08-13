import { EXPRESS_APP_PORT, NODE_ENV, SSL_PORT } from "../env/UseValidatedEnv";
import fs from "fs";

export const isProd = NODE_ENV === "production";
export const configurations = {
  // Note: You may need sudo to run on port 443
  fakeProduction: { ssl: true, port: SSL_PORT, hostname: "devorlando.com" },
  development: { ssl: false, port: EXPRESS_APP_PORT, hostname: "localhost" },
};

export const serverOptions = {
  key: fs.readFileSync(require.resolve("../../../SSL/certificate/server.key"), {
    encoding: "utf8",
  }),

  cert: fs.readFileSync(
    require.resolve("../../../SSL/certificate/server.crt"),
    {
      encoding: "utf8",
    }
  ),
};

export interface configTypes {
  ssl: boolean;
  port: number;
  hostname: string;
}
