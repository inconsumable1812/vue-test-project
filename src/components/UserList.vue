<template>
  <v-list lines="three">
    <v-list-subheader v-if="subheader">{{ subheader }}</v-list-subheader>
    <template v-if="!store.isError">
      <v-card-text
        v-if="users.length === 0 && !store.isLoading"
        class="text-h5"
      >
        Empty list
      </v-card-text>
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="item in users" :key="item.title">
          <user-item :item="item" />
        </template>
      </v-slide-y-transition>
    </template>
    <template v-else>
      <v-card-text class="text-h4 text-red">Loading error</v-card-text>
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
