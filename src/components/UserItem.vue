<template>
  <v-list-item>
    <template v-slot:prepend>
      <v-avatar v-if="isExistsImg">
        <v-img :src="prependAvatar" alt="John" @error="errorHandler" />
      </v-avatar>
      <v-avatar color="grey" v-else>
        <v-icon icon="mdi-account-circle"></v-icon>
      </v-avatar>
    </template>
    <v-list-item-title v-html="title"></v-list-item-title>
    <v-list-item-subtitle v-html="subtitle"> </v-list-item-subtitle>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  title: string;
  subtitle: string;
  prependAvatar?: string;
}

const props = withDefaults(defineProps<Props>(), {
  prependAvatar: "",
});
const isExistsImg = ref(Boolean(props.prependAvatar));

const errorHandler = () => {
  isExistsImg.value = false;
};
</script>
