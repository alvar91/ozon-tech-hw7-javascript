import UserFactory from "./entity/users-factory.js";
import { EMPLOYEES, COMPANIES } from "./constants/index.js";
import { generateAge } from "./utils/generateAge.js";
import { printUser } from "./usecase/printUser.js";

const usersRaw = [
  {
    surname: "Агальцов",
    name: "Антон",
    type: EMPLOYEES.manager,
    age: 60,
    company: COMPANIES.ozon,
  },
  {
    surname: "Сухарев",
    name: "Иван",
    type: EMPLOYEES.frontend,
    age: generateAge(),
    company: COMPANIES.ozon,
  },
  {
    surname: "Иващенко",
    name: "Кирилл",
    type: EMPLOYEES.backend,
    age: generateAge(),
    company: COMPANIES.ozon,
  },
  {
    surname: "Трещенко",
    name: "Диана",
    type: EMPLOYEES.qa,
    age: generateAge(),
    company: COMPANIES.ozon,
  },
  {
    surname: "Трещенко",
    name: "Светлана",
    type: EMPLOYEES.manager,
    age: generateAge(),
    company: COMPANIES.ozon,
  },
];

const users = usersRaw.map((item) => UserFactory.createUser(item));
users.forEach((user) => printUser(user));
