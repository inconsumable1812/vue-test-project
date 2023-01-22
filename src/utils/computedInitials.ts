export const computedInitials = (fullName: string) => {
  const initialsArr = fullName.split(" ").map((el) => el[0]);
  initialsArr.length = 2;

  return initialsArr.join("");
};
