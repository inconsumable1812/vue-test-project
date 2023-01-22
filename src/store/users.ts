import { fetchUsers } from "@/api/fetch/getUsers";
import { fetchUsersLocal } from "@/api/fetch/getUsersLocal/fetch";
import { User } from "@/api/types";
import { isUsersFull } from "@/guards/isUsersFull";
import { filterByChosenOptions } from "@/utils";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUsersStore = defineStore("users", () => {
  const isLoading = ref(false);
  const users = ref<User[]>([]);
  const isError = ref(false);
  const chosenCountry = ref<string | null>(null);
  const chosenScore = ref<number | null>(null);

  const filteredUsers = computed(() =>
    users.value
      .filter((el) => filterByChosenOptions(el.country, chosenCountry.value))
      .filter((el) => filterByChosenOptions(el.score, chosenScore.value))
  );

  function changeCountry(newCountry: string | null) {
    chosenCountry.value = newCountry;
  }

  function changeScore(newScore: number | null) {
    chosenScore.value = newScore;
  }

  async function updateUsers(url?: string) {
    isLoading.value = true;
    if (url) {
      const data = await fetchUsers(url);
      if (data instanceof globalThis.Error) {
        Promise.reject(data).catch((e) => {
          console.warn(e.message);
          isError.value = true;
        });
        isLoading.value = false;
        return;
      }
      users.value = data.filter(isUsersFull);
      isLoading.value = false;
    } else {
      const data = await fetchUsersLocal();
      users.value = data;
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    users,
    updateUsers,
    filteredUsers,
    changeCountry,
    changeScore,
  };
});
