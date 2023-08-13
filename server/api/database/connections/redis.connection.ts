import { createClient } from "redis";
import { REDIS_PORT } from "../../env/UseValidatedEnv";

const redisUrl = `redis://localhost:${REDIS_PORT}`;
const redisClient = createClient({
  url: redisUrl,
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
  } catch (error: any) {
    console.error(error.message);
    setInterval(connectRedis, 5000);
  }
};

redisClient.on("connect", () =>
  console.log("Redis client connected successfully ☄️☄️")
);

redisClient.on("error", (err) => console.error(err));
export default redisClient;
