<template>
  <v-list-item>
    <template v-slot:prepend>
      <v-tooltip
        :text="`From ${item.country}`"
        location="bottom"
        offset="12"
        :open-on-hover="false"
        v-model="isShowTooltip"
      >
        <template v-slot:activator="{ props }">
          <v-avatar
            v-bind="props"
            @click="tooltipHandler"
            color="grey"
            class="avatar"
            v-click-outside="() => (isShowTooltip = false)"
          >
            <v-img
              v-if="isExistsImg"
              :src="item.prependAvatar"
              @error="errorHandler"
            />
            <v-icon v-else icon="mdi-account-circle"></v-icon>
          </v-avatar>
        </template>
      </v-tooltip>
    </template>
    <v-list-item-title v-html="item.title"></v-list-item-title>
    <v-list-item-subtitle v-html="item.subtitle"> </v-list-item-subtitle>
    <v-list-item-subtitle> Score: {{ item.score }} </v-list-item-subtitle>
  </v-list-item>
</template>

<script setup lang="ts">
import { User } from "@/api/types";
import { ref } from "vue";

interface Props {
  item: User;
}

const props = defineProps<Props>();
const isExistsImg = ref(Boolean(props.item.prependAvatar));
const isShowTooltip = ref(false);

const errorHandler = () => {
  isExistsImg.value = false;
};
const tooltipHandler = () => {
  isShowTooltip.value = !isShowTooltip.value;
};
</script>

<style>
.avatar {
  cursor: pointer;
}
</style>
