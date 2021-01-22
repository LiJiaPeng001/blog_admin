<template>
  <div class="layout-header">
    <!-- header -->
    <div class="top middle-flex">
      <a-button :type="set.theme === 'light' ? 'default' : 'primary'" @click="handleClick">
        <MenuUnfoldOutlined v-if="set.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <div class="title">我是头部</div>
    </div>
    <!-- 面包屑 -->
    <div class="crumbs">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="it in $route.matched" :key="it.path">
          <router-link :to="{ path: it.path }">{{ it.meta ? it.meta.title : it.name }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
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
  background-color: #fff;
  .top {
    height: 64px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    line-height: 64px;
    padding: 0 22px;
    justify-content: space-between;
  }
  .crumbs {
    padding: 16px 24px;
  }
}
</style>