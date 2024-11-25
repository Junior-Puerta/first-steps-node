import { sql } from "./db.js";

//comando para excluir tabela
// sql `DROP TABLE IF EXISTS videos`.then(()=>{
//     console.log("Tabela apagada.")
// })
//A tabela foi criada sem o ID, por isso iremos excluir a tabela antiga e criar uma nova com o ID.

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,   
    description TEXT,
    length INTEGER    
);
`.then(()=>{
    console.log("Tabela Criada")});
