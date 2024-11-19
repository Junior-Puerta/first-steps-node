import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

server.listen({
  port: 3333,
});

const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
  const { Title, Description, Lenght } = request.body;

  database.create({
    title: Title,
    description: Description,
    lenght: Lenght,
  });

  return reply.status(201).send();
});

server.get("/videos", () => {
  const listaVideos = database.list();

  console.log(listaVideos);

  return listaVideos;
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { Title, Description, Length } = request.body;

  database.update(videoId, {
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
