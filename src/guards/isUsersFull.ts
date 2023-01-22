import { User } from "@/api/types";

export const isUsersFull = (user: Partial<User>): user is User => {
  const isFull =
    user.country !== undefined &&
    user.score !== undefined &&
    user.title !== undefined &&
    user.subtitle !== undefined;

  return isFull;
};
