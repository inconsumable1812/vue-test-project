import type { Response } from "./types";

const fetchUsers = async (
  url: string
): Promise<Response | globalThis.Error> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetchUsers };
