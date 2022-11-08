import { EMPLOYEES, CONSOLE_COLOR } from "../constants/index.js";

function log(user) {
  return `${user.id} - ${user.getFullName()} | опыт: ${
    user.experience
  } | возраст: ${user.age} | компания: ${user.company} | должность: ${
    user.position
  }`;
}

export function printUser(user) {
  if (user.position === EMPLOYEES.manager) {
    console.log(CONSOLE_COLOR.blue, log(user));
  } else {
    console.log(log(user));
  }
}
