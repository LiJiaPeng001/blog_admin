<template>
  <a-form @submit="submit" class="form middle-flex" :model="form">
    <a-form-item class="item" label="名称" name="name">
      <a-input placeholder="请输入名称" v-model:value="form.name" />
    </a-form-item>
    <a-form-item class="item">
      <a-button style="margin-right: 10px" type="primary" @click="submit">搜索</a-button>
      <a-button @click="reset">清空</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from 'vue';

const props = defineProps<{
  payload: { name: string }
}>()

const emits = defineEmits(['update:payload', 'fetch'])

let form = ref(props.payload)

watchEffect(() => {
  form.value = props.payload
})

let submit = () => {
  emits('update:payload', { ...form, page: 1 });
  emits('fetch');
}

let reset = () => {
  form.value = { name: '' };
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