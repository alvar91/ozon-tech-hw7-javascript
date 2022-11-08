import Employee from "./employee.js";
import { EMPLOYEES } from "../constants/index.js";

export default class QaEmployee extends Employee {
  #position = EMPLOYEES.qa;

  constructor({ company, surname, name, age }) {
    super({
      company,
      surname,
      name,
      age,
    });
  }

  set position(position) {
    if (position !== undefined) this.#position = position;
  }

  get position() {
    return this.#position;
  }
}
