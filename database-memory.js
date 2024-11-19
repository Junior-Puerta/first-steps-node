import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  // como vou ter id dos vídeos para poder dar update, é interessante que tenha um relacionamento entre video e id. (set e map)
  #videos = new Map(); //# informação visivel apenas dentro da classe. // ao invés de criar um array criar como um new Map()

  list() {
    return Array.from(this.#videos.entries()).map((arrayvideo) => {
      const id = arrayvideo[0];
      const data = arrayvideo[1];

      return {
        id,
        ...data,
      };
    });
    //return Array.from(this.#videos.entries()); //return this.#videos.values(); precisa mudar para array para pois o values retorna um iterable iterator
  }

  create(video) {
    const videoId = randomUUID(); // Universally unique identifier (id único universal)
    this.#videos.set(videoId, video); // o set exige um key e um valor, portanto assim que criar o video no bd, será criado um id aleatório.

    // como seria com o set? this.#audios[videoId] = video;
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
