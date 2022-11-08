import User from "./user.js";

export default class Employee extends User {
  #experience = 0;
  #company = "";

  constructor({ company, surname, name, age }) {
    super({ surname, name, age });

    this.#company = company;
    this.experience = age;
  }

  set company(company) {
    if (company !== undefined) this.#company = company;
  }

  get company() {
    return this.#company;
  }

  set experience(age) {
    if (age >= 18 && age < 65) {
      this.#experience = age - 18;
    }
  }

  get experience() {
    return this.#experience;
  }
}
