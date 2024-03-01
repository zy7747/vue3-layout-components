<!-- CTable -->
<template>
  <vxe-grid
    ref="xGrid"
    :columns="tableColumn"
    v-bind="{ ...gridOptions, ...tableConfig }"
  >
    <template #toolbar_buttons>
      <Tools :tools="tableConfig.tools" />
    </template>

    <template #tableEdit="{ row, column }: any">
      <c-schema
        v-if="column.params.form"
        :type="column.params.form.type"
        :params="column.params.form.params"
        v-model="row[column.field]"
      />
    </template>

    <template #operate="{ row }">
      <Action :actions="tableConfig.actions" :row="row" :xGrid="xGrid" />
    </template>
  </vxe-grid>
</template>

<script lang="ts" setup>
import { VxeGridProps, VxeGridInstance } from "vxe-table";
import Action from "./components/action.vue";
import Tools from "./components/tools.vue";

const xGrid = ref<VxeGridInstance<any>>();

const prop: any = defineProps({
  tableConfig: {
    text: "表格配置",
    type: [Object],
    default: () => {
      return {};
    },
  },
});

const rules: any = computed(() => {
  const rules: any = {};

  prop.tableConfig.tableColumn.forEach((item: any) => {
    if (item.rules) {
      rules[item.field] = item.rules;
    }
  });

  return rules;
});

const tableColumn = computed(() => {
  return getTableCols(prop.tableConfig.tableColumn);
});

function getTableCols(columns: any) {
  return unref(columns).map((item: any) => {
    const col: any = {
      resizable: true,
      slots: {},
      params: {},
    };

    if (!item.editRender && item.form) {
      col.editRender = {};
      col.slots.edit = "tableEdit";

      Object.assign(col.params, { form: item.form });
    }

    if (item.slots) {
      col.slots = item.slots;
    }

    return { ...item, ...col };
  });
}

const gridOptions = reactive<VxeGridProps<any>>({
  border: true,
  stripe: true,
  round: true,
  size: "small",
  height: 500,
  loading: false,
  align: "center",
  keepSource: true,
  showOverflow: "tooltip",
  rowConfig: {
    keyField: "_row_index",
    isHover: true,
  },
  editConfig: {
    trigger: "manual",
    mode: "row",
    autoClear: false,
    showStatus: false,
    showIcon: false,
  },
  printConfig: {
    columns: prop.tableConfig.columns,
  },
  pagerConfig: {
    enabled: true,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100],
    layouts: [
      "Home",
      "PrevJump",
      "PrevPage",
      "JumpNumber",
      "NextPage",
      "NextJump",
      "End",
      "Sizes",
      "FullJump",
      "Total",
    ],
  },
  checkboxConfig: {
    labelField: "id",
    trigger: "row",
    reserve: true,
    highlight: true,
    range: true,
  },
  toolbarConfig: {
    slots: {
      buttons: "toolbar_buttons",
    },
    refresh: true, // 显示刷新按钮
    print: true, // 显示打印按钮
    zoom: true, // 显示全屏按钮
    custom: true, // 显示自定义列按钮
  },
  editRules: rules,
});
</script>

<style lang="scss" scoped></style>
