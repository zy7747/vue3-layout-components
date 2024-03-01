<!--  -->
<template>
  <div class="">
    <template v-for="item in tools">
      <vxe-button v-if="item.type === 'add'">新增</vxe-button>
      <vxe-button v-else-if="item.type === 'remove'">批量删除</vxe-button>
      <vxe-button v-else-if="item.type === 'import'">导入</vxe-button>
      <vxe-button v-else-if="item.type === 'export'">导出</vxe-button>
      <vxe-button v-else>{{ item.text }}</vxe-button>
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  tools: {
    text: "工具栏",
    type: [Array] as any,
    default: () => {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped></style>
