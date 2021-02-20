<template>
  <div class="base-layout flex">
    <slide-menu></slide-menu>
    <div class="page-container" :class="{ 'mini-container': setting.collapsed }">
      <page-head />
      <router-view />
    </div>
  </div>
</template>

<script>
import pageHead from './page-head';
import slideMenu from './slide-menu';

export default {
  components: {
    pageHead,
    slideMenu,
  },
  computed: {
    setting() {
      return this.$store.state.setting;
    },
  },
};
</script>

<style lang='less' scoped>
.page-container {
  flex: 1;
  background: #f0f2f5;
  padding-left: 256px;
  transition: 0.3s linear;
  padding-top: 64px;
  main {
    margin: 24px;
  }
}
.mini-container {
  padding-left: 80px;
}
</style>