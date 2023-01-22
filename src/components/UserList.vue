<template>
  <v-list lines="three">
    <v-list-subheader v-if="subheader">{{ subheader }}</v-list-subheader>
    <template v-for="item in users" :key="item.title">
      <user-item
        :title="item.title"
        :prepend-avatar="item.prependAvatar"
        :subtitle="item.subtitle"
      />
    </template>
  </v-list>
</template>

<script setup lang="ts">
import UserItem from "./UserItem.vue";

interface Props {
  users: {
    title: string;
    subtitle: string;
    prependAvatar?: string;
  }[];
  subheader?: string;
}

const props = withDefaults(defineProps<Props>(), {
  subheader: "List",
});
</script>
