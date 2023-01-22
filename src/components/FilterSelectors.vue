<template>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "@/store/users";

const store = useUsersStore();

const items = ref(["russia", "usa", "> 20", "< 10"]);
const variant = ref(["default"]);
</script>
