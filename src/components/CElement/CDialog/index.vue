<!--  -->
<template>
  <Dialog />
</template>

<script lang="ts" setup>
import Dialog from "./dialog/index.vue";

defineProps({
  dialogConfig: {
    text: "编辑弹框配置",
    type: [Object],
    default: () => {
      return {};
    },
  },
});
</script>

<style lang="scss" scoped></style>
