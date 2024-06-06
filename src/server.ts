import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({
      host: "0.0.0.0",
      port: 3333,
    });
  } catch (err) {
    process.exit(1);
  }
};

start();
