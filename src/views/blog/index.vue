<template>
  <page-layout>
    <a-card :columns="columns" :data-source="list">
      <search @fetch="fetchList" v-model:payload="payload"></search>
      <a-button style="margin-bottom: 15px" type="primary" @click="open">添加</a-button>
      <a-table rowKey="id" :columns="columns" :data-source="list">
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

<script setup lang="ts">
import * as Api from "@/api/blog";
import { getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";
import search from "./search.vue";

let router = useRouter()
let instance: any = getCurrentInstance()

let { $confirm } = instance.proxy

let columns = [
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
    key: 'cate',
    dataIndex: "cate.name",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
  },
  {
    title: "操作",
    key: "action",
    slots: { customRender: 'action' },
  },
]
let list = ref([])
let total = ref(0)

let payload = {
  page: 1,
  per_page: 12,
  title: "",
}

let open = ({ id = "" }) => {
  router.push({
    path: "/blog/detail",
    query: { id },
  });
}

let remove = ({ id = '' }) => {
  $confirm({
    title: 'Tip',
    content: "您确定要删除嘛？",
    onOk: async () => {
      await Api.remove(id);
      fetchList();
    },
  });
}
let fetchList = async () => {
  const data = await Api.list(payload);
  list.value = data.list;
  total.value = data.total;
}
fetchList()
</script>
