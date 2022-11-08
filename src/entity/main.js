import { upperName } from "../utils/upperName.js";
import { generateId } from "../utils/generateId.js";

export default class Main {
  #id = generateId();
  #surname = "";
  #name = "";

  constructor({ surname, name }) {
    this.#surname = upperName(surname);
    this.#name = upperName(name);
  }

  get id() {
    return this.#id;
  }

  getFullName() {
    return `${this.#surname} ${this.#name}`;
  }
}
