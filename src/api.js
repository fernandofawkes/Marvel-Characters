import { apiSettings as keys } from "./config/config";

export default class Marvel {
  page = 1;

  getAllCharacters() {
    return this.getMoreCharacters();
  }

  getMoreCharacters(prevResults = []) {
    const instance = this;
    return new Promise((resolve, reject) => {
      Marvel.getCharacters({ page: instance.page })
        .then(respRaw => respRaw.json())
        .then(response => {
          instance.page++;
          const combinedResults = prevResults.concat(response.data.results);
          if (response.data.results.length < 100) {
            resolve(combinedResults);
          } else {
            resolve(this.getMoreCharacters(combinedResults));
          }
        });
    });
  }

  static getCharacters(origOptions = {}) {
    const defaultOptions = { page: 1, count: 100 };
    /* juntando opções passadas com as padrão */
    const options = Object.assign(defaultOptions, origOptions);

    const currentOffset = options.count * (options.page - 1);

    const paramsString = `apikey=${keys.publicKey}&limit=${
      options.count
    }&offset=${currentOffset}`;

    return fetch(`${keys.baseUrl}/v1/public/characters?${paramsString}`);
  }
}
