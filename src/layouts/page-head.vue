<template>
  <div class="layout-header middle-flex">
    <a-button type="primary" @click="handleClick">
      <MenuUnfoldOutlined v-if="set.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <div class="title">我是头部</div>
  </div>
</template>

<script>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  computed: {
    set() {
      return this.$store.state.setting;
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('SET_SETTING', { collapsed: !this.set.collapsed });
    },
  },
};
</script>

<style lang='less' scoped>
.layout-header {
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  line-height: 64px;
  padding: 0 22px;
  justify-content: space-between;
}
</style>