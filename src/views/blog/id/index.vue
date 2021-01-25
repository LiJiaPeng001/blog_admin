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

<script>
import * as Api from '@/api/blog';
import { list as cateList } from '@/api/cate';

export default {
  data() {
    let { id = '' } = this.$route.query;
    return {
      id,
      data: { id },
      labelCol: { span: 3 },
      wrapperCol: { span: 12 },
      rules: {
        title: [{ required: true, message: '请输入标题' }],
        cateId: [{ required: true, message: '请选择分类' }],
        content: [{ required: true, message: '请输入内容' }],
      },
      cateList: [],
    };
  },
  mounted() {
    this.id && this.fetchData();
    this.fetchCate();
  },
  methods: {
    async fetchCate() {
      let { list } = await cateList();
      this.cateList = list;
    },
    async fetchData() {
      let data = await Api.detail(this.id);
      this.data = data;
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    async submit() {
      await this.$refs.ruleForm.validate();
      if (this.id) {
        await Api.update(this.data);
      } else {
        await Api.add(this.data);
      }
      this.$message.success(this.id ? '更新成功' : '添加成功');
      this.$router.back();
    },
  },
};
</script>

<style lang='less'>
.editor {
  width: 100%;
}
</style>