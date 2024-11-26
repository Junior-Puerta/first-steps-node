import { fastify } from "fastify";

import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

server.listen({
  host: '0.0.0.0',
  port: process.env.PORRT ?? 3333,
});

const database = new DatabasePostgres();

server.post("/videos", async (request, reply) => {
  const { Title, Description, Length } = request.body;

  await database.create({
    title: Title,
    description: Description,
    length: Length,
  });

  return reply.status(201).send();
});

server.get("/videos", () => {
  const listaVideos = database.list();

  //console.log(listaVideos);

  return listaVideos;
});

server.get("/videos/search",async (request, reply) => {
  const search = request.query.movie;

  const listaVideos = await database.list(search);

  return listaVideos;
});

server.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { Title, Description, Length } = request.body;

  await database.update(videoId, {
    title: Title,
    description: Description,
    length: Length,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  database.delete(videoId);

  return reply.status(204).send();
});

server.get("/", (request, reply) => {
  return "Página root";
});
