<template>
  <v-container>
    <v-row justify="center" class="ma-4">
      <v-col cols="12">
        <v-img src="../assets/logo.svg" class="my-3" contain height="200" />
      </v-col>

      <v-col cols="12" md="4">
        <filter-selectors></filter-selectors>
      </v-col>

      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto" :loading="store.isLoading">
          <user-list :users="store.filteredUsers"></user-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import UserList from "./UserList.vue";
import FilterSelectors from "./FilterSelectors.vue";

import { useUsersStore } from "@/store/users";

const store = useUsersStore();

onMounted(async () => {
  await store.updateUsers();
  await store.calculateFilteredUsers();
});
</script>
