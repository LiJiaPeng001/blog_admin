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
      form: this.payload,
    };
  },
  watch: {
    payload() {
      this.form = this.payload;
    },
  },
  methods: {
    submit() {
      this.$emit('update:payload', { ...this.form, page: 1 });
      this.$emit('fetch');
    },
    reset() {
      this.form = {};
      this.submit();
    },
  },
};
</script>

<style lang='less' scoped>
.form {
  flex-wrap: wrap;
  .item {
    margin-right: 15px;
  }
}
</style>