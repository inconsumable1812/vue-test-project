<template>
  <v-list lines="three">
    <v-list-subheader v-if="subheader">{{ subheader }}</v-list-subheader>
    <template v-if="!store.isError">
      <v-list-subheader v-if="users.length === 0">Empty list</v-list-subheader>
      <template v-for="item in users" :key="item.title">
        <user-item :item="item" />
      </template>
    </template>
    <template v-else>
      <v-card-text class="text-h4 text-red">Loading error </v-card-text>
    </template>
  </v-list>
</template>

<script setup lang="ts">
import { User } from "@/api/types";
import UserItem from "./UserItem.vue";
import { useUsersStore } from "@/store/users";

const store = useUsersStore();

interface Props {
  users: User[];
  subheader?: string;
}

const props = withDefaults(defineProps<Props>(), {
  subheader: "List",
});
</script>
