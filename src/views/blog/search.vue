<template>
  <a-form @submit="submit" class="form middle-flex" :model="form">
    <a-form-item class="item" label="标题" name="title">
      <a-input placeholder="请输入标题" v-model:value="form.title" />
    </a-form-item>
    <a-form-item class="item">
      <a-button style="margin-right: 10px" type="primary" @click="submit">搜索</a-button>
      <a-button @click="reset">清空</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

const props = defineProps<{
  payload: {
    title: string
  }
}>();

const emits = defineEmits(['update:payload', 'fetch'])

let form = props.payload

watchEffect(() => {
  form = props.payload;
})

let submit = () => {
  emits('update:payload', { ...form, page: 1 });
  emits('fetch');
}

let reset = () => {
  form = { title: '' };
  submit();
}
</script>

<style lang='less' scoped>
.form {
  flex-wrap: wrap;
  .item {
    margin-right: 15px;
  }
}
</style>