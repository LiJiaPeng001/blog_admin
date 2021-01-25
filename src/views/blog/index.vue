<template>
  <page-layout>
    <a-card :columns="columns" :data-source="list">
      <search v-model:payload="payload"></search>
      <a-table>
        <template #action>
          <span>详情</span>
        </template>
      </a-table>
    </a-card>
  </page-layout>
</template>

<script>
import search from './search';

export default {
  components: {
    search,
  },
  data() {
    return {
      columns: [
        {
          title: '标题',
          dataIndex: 'title',
        },
        {
          title: '创建时间',
          dataIndex: 'created_at',
        },
        {
          title: '更新事件',
          dataIndex: 'updated_at',
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' },
        },
      ],
      list: [],
      payload: {
        page: 1,
        per_page: 20,
        title: '',
      },
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      console.log('获取列表');
    },
  },
};
</script>

<style>
</style>