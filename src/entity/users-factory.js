import ManagerEmployee from "./manager.js";
import BackendEmployee from "./backend.js";
import FrontendEmployee from "./frontend.js";
import QaEmployee from "./qa.js";
import User from "./user.js";
import { EMPLOYEES } from "../constants/index.js";

const types = {
  [EMPLOYEES.manager]: ManagerEmployee,
  [EMPLOYEES.backend]: BackendEmployee,
  [EMPLOYEES.frontend]: FrontendEmployee,
  [EMPLOYEES.qa]: QaEmployee,
  [EMPLOYEES.user]: User,
};

export default class UserFactory {
  static createUser({ surname = "", name = "", type = "user", age = 0, company = "" }) {
    if (types[type] !== undefined) {
      return new types[type]({ surname, name, age, company });
    }
    throw new Error(`Пользователь не может быть создан`);
  }
}
