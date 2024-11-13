import { createServer } from "node:http";

const server = createServer((req,res) => {
  //precisa passar uma função como parâmetro
  console.log('OLAAA')
  res.write('me mama')

   return res.end();
});

// após a criação do servidor, o server devolve o método listen
const PORT = 3333
server.listen(PORT)


