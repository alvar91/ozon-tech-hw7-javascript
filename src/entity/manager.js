import Employee from "./employee.js";
import { EMPLOYEES, EXPERIENCE_COEFFICIENT } from "../constants/index.js";

export default class ManagerEmployee extends Employee {
  #experience = 0;
  #position = EMPLOYEES.manager;

  constructor({ company, surname, name, age }) {
    super({
      company,
      surname,
      name,
      age,
    });

    this.#experience =
      EXPERIENCE_COEFFICIENT[EMPLOYEES.manager] * super.experience;
  }

  set position(position) {
    if (position !== undefined) this.#position = position;
  }

  get position() {
    return this.#position;
  }
}
