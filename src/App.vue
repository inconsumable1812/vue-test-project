<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import ContentBlock from "@/components/ContentBlock.vue";
import Footer from "@/components/Footer.vue";

const localAttrs = {
  absolute: true,
  fixed: false,
};
</script>
