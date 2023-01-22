export const filterByChosenOptions = (
  el: string | number,
  option: string | number | null
) => {
  if (option === null) {
    return true;
  }

  if (typeof option === "number") {
    return el > option;
  }

  return el === option;
};
