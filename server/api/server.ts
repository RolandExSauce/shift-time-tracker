import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import Keyv from "keyv";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import { Request, Response } from "express";
import { useServer } from "graphql-ws/lib/use/ws";
import { WebSocketServer } from "ws";
import https from "https";
import http from "http";

//local imports
import MongoConnection from "./database/connections/mongo.connection";
import { schema } from "./generated/generated__Schema";
import { getAuthUser } from "./middleware/authUser";
import { app } from "./app";
import {
  configTypes,
  configurations,
  isProd,
  serverOptions,
} from "./utils/config";
import { connectRedis } from "./database/connections/redis.connection";
import { Disposable } from "graphql-ws";

//create server based on environment
const startExpressApp = async () => {
  let httpServer:
    | https.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
    | http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
  let config: configTypes;
  let port: number;
  let hostname: string;
  let ssl: boolean;

  //production or development mode
  if (isProd) {
    config = configurations["fakeProduction"];
    httpServer = https.createServer(serverOptions, app);
  } else {
    config = configurations["development"];
    httpServer = http.createServer(app);
    port = config.port;
  }
  hostname = config.hostname;
  port = config.port;
  ssl = config.ssl;
  return {
    httpServer,
    hostname,
    port,
    ssl,
  };
};

//Apollo server
(async function startApolloServer(): Promise<void> {
  const { httpServer, hostname, port, ssl } = await startExpressApp();
  const server: ApolloServer = new ApolloServer({
    schema,
    introspection: true,
    cache: new KeyvAdapter(new Keyv()),
    csrfPrevention: false,

    //tell Express to attach GraphQL functionality to the server
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  // Creating the WebSocket server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/express/graphql",
  });

  // Hand in the schema we just created and have the
  // WebSocketServer start listening.
  const serverCleanup: Disposable = useServer({ schema }, wsServer);

  //connect to mongoDB, redis and start the GraphQL server
  await MongoConnection();
  await connectRedis();
  await server.start();

  app.use(
    expressMiddleware(server, {
      context: async ({ req, res }: { res: Response; req: Request }) => ({
        req,
        res,
        getAuthUser,
      }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve)
  );

  console.log(
    `Express app running at http${
      ssl ? "s" : ""
    }://${hostname}:${port}/express 🔥🔥`,
    `\nGraphql server ready at http${
      ssl ? "s" : ""
    }://${hostname}:${port}/express/graphql 🫧 🫧`,
    `\nGraphql Subscription endpoint ready at ws://${hostname}:${port}/express/graphql 🚀🚀`
  );
})();

const watchServer = async () => {
  const { httpServer } = await startExpressApp();
  process.on("unhandledRejection", (err: any) => {
    console.log("UNHANDLED REJECTION 😡😡 Shutting down...");
    console.error("Error❗❗❗", err.message);

    httpServer.close(async () => {
      process.exit(1);
    });
  });
};
watchServer();
