<!--CPage-->
<template>
  <div class="CPage">
    <Collapse title="页面名称">
      <template #tools>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>

      <template #content>
        <c-form ref="formRef" :formConfig="pageOption.formConfig" />
      </template>
    </Collapse>

    <Collapse title="页面名称">
      <template #content>
        <el-tabs type="border-card">
          <el-tab-pane v-for="item in pageOption.tableConfig">
            <template #label>
              <span>{{ item.title }}</span>
            </template>
            <c-table :tableConfig="item" />
          </el-tab-pane>
        </el-tabs>
      </template>
    </Collapse>
  </div>
</template>

<script lang="ts" setup>
const formRef: any = ref<any>();

defineProps({
  pageOption: {
    text: "页面配置",
    type: [Object],
    default: () => {
      return {};
    },
  },
});

function submitForm() {
  unref(formRef).submitForm();
}
function resetForm() {
  unref(formRef).resetForm();
}
</script>

<style lang="scss" scoped>
.el-main {
  padding: 0;
}
</style>
