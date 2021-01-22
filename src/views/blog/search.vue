<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="标题">
      <a-input v-model:value="form.name" />
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      defualt: () => ({}),
    },
  },
  data() {
    return {
      labelCol: { span: 1 },
      wrapperCol: { span: 5 },
      form: this.payload,
    };
  },
  watch: {
    payload() {
      this.form = this.payload;
    },
  },
};
</script>

<style>
</style>