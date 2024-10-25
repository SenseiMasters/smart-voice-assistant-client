export const classNames = (...list: string[]) => {
  return list.filter(Boolean).join(" ");
};
