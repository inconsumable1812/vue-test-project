import usersJSON from "@/api/json/users.json";

export const fetchUsersLocal = async () => {
  const users = await Promise.resolve(usersJSON); // like http-request

  return users;
};
