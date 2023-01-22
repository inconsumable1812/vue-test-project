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
          <v-list lines="three" :items="users" item-props>
            <template v-slot:title="{ title }">
              <div v-html="title"></div>
            </template>
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["russia", "usa", "> 20", "< 10"]);
const variant = ref(["default"]);
const users = ref([
  { type: "subheader", title: "List" },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: 'Summer BBQ <span class="text-grey text-lighten-1">4</span>',
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]);
</script>
