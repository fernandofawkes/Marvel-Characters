import { apiSettings as keys } from "./config/config";

export default class Marvel {
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
