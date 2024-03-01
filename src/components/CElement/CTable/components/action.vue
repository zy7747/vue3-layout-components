<!--  -->
<template>
  <div class="">
    <template v-for="item in actions">
      <template v-if="item.type === 'operate'">
        <template v-if="hasActiveEditRow(row)">
          <vxe-button content="保存" @click="saveRowEvent()" />
          <vxe-button content="取消" @click="clearRowEvent" />
        </template>

        <template v-else>
          <vxe-button content="编辑" @click="editRowEvent(row)"></vxe-button>
          <vxe-button content="删除" @click="removeRowEvent(row)"></vxe-button>
        </template>
      </template>

      <vxe-button
        v-else-if="item.type === 'detail'"
        content="详情"
      ></vxe-button>

      <vxe-button
        v-else-if="item.type === 'remove'"
        content="删除"
      ></vxe-button>

      <vxe-button v-else :content="item.text"></vxe-button>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { VXETable } from "vxe-table";

const prop: any = defineProps({
  row: {
    text: "行信息",
    type: [Object],
    default: () => {
      return {};
    },
  },
  actions: {
    text: "操作栏",
    type: [Array] as any,
    default: () => {
      return [];
    },
  },
  xGrid: {
    text: "表格",
    type: [Object],
  },
});

//是否在编辑状态
const hasActiveEditRow = (row: any) => {
  const $grid = prop.xGrid;
  if ($grid) {
    return $grid.isEditByRow(row);
  }
  return false;
};

//编辑
const editRowEvent = (row: any) => {
  const $grid = prop.xGrid;
  if ($grid) {
    $grid.setEditRow(row);
  }
};

//取消
const clearRowEvent = () => {
  const $grid = prop.xGrid;
  if ($grid) {
    $grid.clearEdit();
  }
};

//保存
const saveRowEvent = async () => {
  const $grid = prop.xGrid;
  if ($grid) {
    await $grid.clearEdit();
  }
};

//删除
const removeRowEvent = async (row: any) => {
  const type = await VXETable.modal.confirm("您确定要删除该数据?");
  const $grid = prop.xGrid;
  if ($grid) {
    if (type === "confirm") {
      await $grid.remove(row);
    }
  }
};
</script>

<style lang="scss" scoped></style>
