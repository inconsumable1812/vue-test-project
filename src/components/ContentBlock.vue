<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img src="../assets/logo.svg" class="my-3" contain height="200" />
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          v-model="variant"
          :items="items"
          clearable
          label="Filter by country"
        ></v-select>

        <v-select
          v-model="variant"
          :items="items"
          clearable
          label="Filter by score"
        ></v-select>
      </v-col>

      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto">
          <user-list :users="store.users"></user-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import UserList from "./UserList.vue";
import { useUsersStore } from "@/store/users";

const store = useUsersStore();

const items = ref(["russia", "usa", "> 20", "< 10"]);
const variant = ref(["default"]);
// const users = ref(store.users);
// const getUsers = async () => {
//   users.value = await fetchUsersLocal();
//   console.log(users.value, "users");
// };

onMounted(() => {
  store.updateUsers();
  console.log(store);
});

// console.log(users.value, "users");
</script>
