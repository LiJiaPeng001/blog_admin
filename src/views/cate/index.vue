<template>
  <page-layout>
    <a-card :columns="columns" :data-source="list">
      <search @fetch="fetchList" v-model:payload="payload"></search>
      <a-button style="margin-bottom: 15px" type="primary" @click="open">添加</a-button>
      <a-table rowKey="id" :columns="columns" :data-source="list">
        <template #action="{ record }">
          <div class="action-box">
            <span class="primary" @click="open(record)">编辑</span>
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

<script setup lang='ts'>
import * as Api from '@/api/cate';
import { getCurrentInstance, reactive, ref } from 'vue';
import search from './search.vue';

const columns = [
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
]
interface RecordInter {
  id: string | number,
  name: string
}

let instance: any = getCurrentInstance()
let list = ref([])
let payload = reactive({ name: '' })
let record = ref<RecordInter>({ id: '', name: '' })
let visible = ref(false)
let total = ref(0)
let labelCol = { span: 4 }
let wrapperCol = { span: 12 }
let ruleForm = ref()
let rules = {
  name: [{ required: true, message: '请输入分类名称' }]
}

let open = (item: RecordInter) => {
  record.value = { ...item };
  visible.value = true;
}
let fetchList = async () => {
  const data = await Api.list(payload);
  list.value = data.list;
  total.value = data.total;
}
let submit = async () => {
  await ruleForm.value.validate();
  if (record.value.id) {
    await Api.update(record.value);
  } else {
    await Api.add(record.value);
  }
  instance.proxy.$success(record.value.id ? '更新成功' : '添加成功');
  visible.value = false;
  fetchList();
}

fetchList()

</script>
