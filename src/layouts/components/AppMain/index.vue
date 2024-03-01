<!-- AppMain -->
<template>
  <div class="app-main">
    <el-backtop target=".app-main"></el-backtop>
    <CPage :pageOption="pageOption" />
    <CPage :pageOption="pageOption" />
    <CPage :pageOption="pageOption" />
    <CPage :pageOption="pageOption" />
  </div>
</template>

<script lang="ts" setup>
const pageOption: any = ref({
  formConfig: {
    formParams: [
      {
        label: "下拉框",
        prop: "aaa",
        type: "select",
        show: true,
        span: 6,
        options: [
          {
            label: "123",
            value: "123",
          },
        ],
        rules: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
      },
      {
        label: "下拉框",
        prop: "aaa",
        type: "select",
        show: true,
        span: 12,
        options: [
          {
            label: "123",
            value: "123",
          },
        ],
        rules: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
      },
      {
        label: "下拉框",
        prop: "aaa",
        type: "select",
        show: true,
        span: 6,
        options: [
          {
            label: "123",
            value: "123",
          },
        ],
        rules: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
      },
      {
        label: "下拉框",
        prop: "aaa",
        type: "select",
        show: true,
        span: 6,
        options: [
          {
            label: "123",
            value: "123",
          },
        ],
        rules: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
      },
      {
        label: "下拉框",
        prop: "aaa",
        type: "select",
        show: true,
        span: 6,
        options: [
          {
            label: "123",
            value: "123",
          },
        ],
        rules: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
      },
      {
        label: "下拉框",
        prop: "aaa",
        type: "select",
        show: true,
        span: 6,
        options: [
          {
            label: "123",
            value: "123",
          },
        ],
        rules: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
      },
      {
        label: "下拉框",
        prop: "aaa",
        type: "select",
        show: true,
        span: 6,
        options: [
          {
            label: "123",
            value: "123",
          },
        ],
        rules: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
      },
    ],
    formData: {},
  },
  tableConfig: [
    {
      title: "表格",
      tools: [
        {
          type: "add",
        },
        {
          type: "remove",
        },
        {
          type: "import",
        },
        {
          type: "export",
        },
        {
          text: "其他按钮",
        },
      ],
      tableColumn: [
        { type: "checkbox", width: 50 },
        {
          title: "序号", //用户名
          type: "seq",
          width: 100,
        },
        {
          title: "用户名", //用户名
          field: "name",
          width: 150,
          sortable: true,
          isFilters: true,
          rules: [
            {
              type: "date",
              required: true,
              message: "Please pick a date",
              trigger: "change",
            },
          ],
          form: {
            type: "select",
            params: {
              a: 123,
            },
          },
        },
        {
          title: "基本信息", //基本信息
          children: [
            {
              title: "性别", //用户名
              field: "sex",
              width: 300,
              sortable: true,
              isFilters: true,
            },
            {
              title: "年龄", //用户名
              field: "age",
              width: 300,
              sortable: true,
              isFilters: true,
            },
          ],
        },

        { title: "操作", width: 300, slots: { default: "operate" } },
      ],
      actions: [
        {
          type: "operate",
        },
        {
          type: "detail",
        },
        {
          text: "其他按钮",
        },
      ],
      data: [
        { name: "张三", sex: "男", age: 18 },
        { name: "张三", sex: "男", age: 18 },
      ],
    },
  ],
});
</script>

<style lang="scss" scoped>
.app-main {
  height: 760px;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  overflow: auto;
}
</style>
