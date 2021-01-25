<template>
  <page-layout>
    <a-card :columns="columns" :data-source="list">
      <search v-model:payload="payload"></search>
      <a-button style="margin-bottom: 15px" type="primary" @click="open">添加</a-button>
      <a-table rowKey="id" :columns="columns" :data-source="list">
        <template #action="{ record }">
          <div class="action-box">
            <span class="primary" @click="open(record)">编辑</span>
            <span class="error">删除</span>
          </div>
        </template>
      </a-table>
      <a-modal title="操作" v-model:visible="visible" @ok="submit">
        <a-form
          ref="ruleForm"
          :model="record"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-item name="name" label="分类名称">
            <a-input v-model:value="record.name" />
          </a-form-item>
        </a-form>
      </a-modal>
    </a-card>
  </page-layout>
</template>

<script>
import * as Api from '@/api/cate';
import search from './search';

export default {
  components: {
    search,
  },
  data() {
    return {
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: '标题',
          dataIndex: 'name',
        },
        {
          title: '创建时间',
          dataIndex: 'createdAt',
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' },
        },
      ],
      list: [],
      payload: {
        name: '',
      },
      record: {},
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
      rules: {
        name: [{ required: true, message: '请输入分类名称' }],
      },
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    open(item = {}) {
      console.log(item, 'item');
      this.record = { ...item };
      this.visible = true;
    },
    async fetchList() {
      const { list, total } = await Api.list();
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
      this.$message.success(this.record.id ? '更新成功' : '添加成功');
      this.visible = false;
      this.fetchList();
    },
  },
};
</script>

<style>
</style>