<template>
  <page-layout>
    <a-card>
      <a-form
        ref="ruleForm"
        :model="data"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item name="title" label="标题">
          <a-input placeholder="请输入标题" v-model:value="data.title" />
        </a-form-item>
        <a-form-item name="cateId" label="分类">
          <a-select
            show-search
            placeholder="请选择分类"
            :filter-option="filterOption"
            v-model:value="data.cateId"
          >
            <a-select-option v-for="it in cateList" :key="it.id">{{ it.name }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 20 }" name="content" label="内容">
          <md-editor class="editor" type="markdown" v-model:value="data.content"></md-editor>
        </a-form-item>
        <a-form-item :wrapperCol="{ offset: 3 }" label>
          <a-button style="margin-right: 15px" type="primary" @click="submit">提交</a-button>
          <a-button @click="$router.back()">取消</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-layout>
</template>

<script setup lang="ts">
import * as Api from '@/api/blog';
import { list } from '@/api/cate';
import { message } from 'ant-design-vue';
import { onMounted, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

let route = useRoute()
let router = useRouter()

let id = ref(0)
id = route.query.id

let labelCol = { span: 3 }
let wrapperCol = { span: 12 }
let ruleForm = ref()
let rules = {
  title: [{ required: true, message: '请输入标题' }],
  cateId: [{ required: true, message: '请选择分类' }],
  content: [{ required: true, message: '请输入内容' }],
}
interface CateInter {
  id: number,
  name: string
}

let cateList = ref<CateInter[]>([])

interface DataMaps {
  title: string,
  cateId: number | string,
  content: string
}
let data = ref<DataMaps>({
  title: '',
  cateId: '',
  content: ''
})

onMounted(() => {
  id && fetchData();
  fetchCate();
})

let fetchCate = async () => {
  let data = await list();
  cateList.value = data.list;
}

let fetchData = async () => {
  let d = await Api.detail(id);
  data.value = d;
}
let filterOption = (input: string, option: any) => {
  return (
    option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
  );
}
let submit = async () => {
  await ruleForm.value.validate();
  if (id) {
    await Api.update({ ...data.value, id });
  } else {
    await Api.add(data.value);
  }
  message.success(id ? '更新成功' : '添加成功');
  router.back();
}
</script>

<style lang='less'>
.editor {
  width: 100%;
}
</style>