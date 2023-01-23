<template>
  <v-select
    v-model="countryItem"
    :items="store.countries"
    clearable
    label="Filter by country"
  ></v-select>

  <v-select
    v-model="scoreItem"
    :items="score"
    clearable
    label="Filter by score"
  ></v-select>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useUsersStore } from "@/store/users";

const store = useUsersStore();

const score = ref(["> 25", "> 50", "> 70"]);
const countryItem = ref<string | null>(null);
const scoreItem = ref<string | null>(null);

watch(countryItem, () => {
  store.changeCountry(countryItem.value);
});

watch(scoreItem, () => {
  const preparedNumber =
    scoreItem.value === null ? null : Number(scoreItem.value.slice(2));
  store.changeScore(preparedNumber);
});
</script>
