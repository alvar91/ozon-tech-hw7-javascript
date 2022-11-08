import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 4 });

export function generateId() {
  return uid();
}
