<template>
  <page-layout>
    <a-card :columns="columns" :data-source="list">
      <search @fetch="fetchList" v-model:payload="payload"></search>
      <a-button style="margin-bottom: 15px" type="primary" @click="open"
        >添加</a-button
      >
      <a-table
        rowKey="id"
        :columns="columns"
        :data-source="list"
        :pagination="false"
      >
        <template #action="{ record }">
          <div class="action-box">
            <span class="primary" @click="open(record)">编辑</span>
            <span class="error" @click="remove(record)">删除</span>
          </div>
        </template>
      </a-table>
    </a-card>
  </page-layout>
</template>

<script>
import * as Api from "@/api/blog";
import search from "./search";

export default {
  components: {
    search,
  },
  data() {
    return {
      columns: [
        {
          title: "ID",
          dataIndex: "id",
        },
        {
          title: "标题",
          dataIndex: "title",
        },
        {
          title: "分类名称",
          dataIndex: "cate.name",
        },
        {
          title: "创建时间",
          dataIndex: "createdAt",
        },
        {
          title: "操作",
          key: "action",
          slots: { customRender: "action" },
        },
      ],
      list: [],
      payload: {
        page: 1,
        per_page: 12,
        title: "",
      },
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    open({ id = "" }) {
      this.$router.push({
        path: "/blog/detail",
        query: { id },
      });
    },
    remove({ id }) {
      this.$confirm({
        content: "您确定要删除嘛？",
        onOk: async () => {
          await Api.remove(id);
          this.fetchList();
        },
      });
    },
    async fetchList() {
      const { list, total } = await Api.list(this.payload);
      this.list = list;
      this.total = total;
    },
    async submit() {
      await this.$refs.ruleForm.validate();
      console.log(this.record);
      if (this.record.id) {
        await Api.update(this.record);
      } else {
        await Api.add(this.record);
      }
      this.$message.success(this.record.id ? "更新成功" : "添加成功");
      this.visible = false;
      this.fetchList();
    },
  },
};
</script>

<style>
</style>