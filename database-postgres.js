import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  async list(search) {
    let videos;
    if (search) {
      videos = await sql`select * from videos where title ilike ${
        "%" + search + "%"
      }`;
    } else {
      videos = await sql`select * from videos`;
    }
    return videos;
  }

  async create(video) {
    const videoid = randomUUID();

    const { title, description, length } = video;

    await sql`insert into videos (id, title, description, length) VALUES (${videoid}, ${title}, ${description}, ${length})`;
  }

  async update(id, video) {
    const { title, description, length } = video;

    await sql`UPDATE videos set title = ${title}, description = ${description}, length = ${length} where id = ${id}`;
  }

  async delete(id) {
    await sql`DELETE from videos where id = ${id}`
  }
}
