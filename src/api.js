import { apiSettings as keys } from "./config/config";
import moment from "moment";
import CryptoJS from "crypto-js";
export default class Marvel {
  page = 1;

  getAllCharacters(pageCallback) {
    return this.getMoreCharacters(pageCallback);
  }

  getMoreCharacters(pageCallback, prevResults = []) {
    const instance = this;
    return new Promise((resolve, reject) => {
      Marvel.getCharacters({ page: instance.page })
        .then(respRaw => respRaw.json())
        .then(response => {
          instance.page++;
          const combinedResults = prevResults.concat(response.data.results);
          pageCallback(combinedResults);
          if (response.data.results.length < 100) {
            resolve(combinedResults);
          } else {
            resolve(this.getMoreCharacters(pageCallback, combinedResults));
          }
        });
    });
  }

  static getCharacters(origOptions = {}) {
    const defaultOptions = { page: 1, count: 100 };
    /* juntando opções passadas com as padrão */
    const options = Object.assign(defaultOptions, origOptions);

    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(
      timeStamp + keys.privateKey + keys.publicKey
    ).toString(CryptoJS.enc.Hex);

    const currentOffset = options.count * (options.page - 1);

    const paramsString = `apikey=${keys.publicKey}&limit=${
      options.count
    }&offset=${currentOffset}&ts=${timeStamp}&hash=${hash}`;

    return fetch(`${keys.baseUrl}/v1/public/characters?${paramsString}`);
  }
}
