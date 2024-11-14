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

server.get("/videos", (request, reply) => {
  const listaVideos = database.list();
  console.log(listaVideos);
  return reply.listaVideos;
});

server.put("/videos/:id", () => {
  return;
});

server.delete("/videos/:lenght", (request, reply) => {
  database.delete(request.lenght);
  return "Apagou";
});

server.get("/", (request, reply) => {
  return "Página root";
});
