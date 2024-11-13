// import { createServer } from "node:http";

// const server = createServer((req,res) => {
//   //precisa passar uma função como parâmetro
//   console.log('OLAAA')
//   res.write('me mama')

//    return res.end();
// });

// // após a criação do servidor, o server devolve o método listen
// const PORT = 3333
// server.listen(PORT)

import { fastify } from "fastify";

const server = fastify();

server.listen({
  port: 3333,
});

server.get("/", () => {
  return " hello root!";
});

server.get("/node", () => {
  return " hello Node.js!";
});

