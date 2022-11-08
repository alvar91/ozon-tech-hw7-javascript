import Main from "./main.js";

export default class User extends Main {
  #age = 0;

  constructor({ surname, name, age }) {
    super({ surname, name });

    this.#age = age;
  }

  set age(age) {
    if (age !== undefined) this.#age = age;
  }

  get age() {
    return this.#age;
  }
}
