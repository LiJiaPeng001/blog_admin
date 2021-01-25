<template>
  <div class="base-layout flex">
    <slide-menu></slide-menu>
    <div class="page-container">
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
};
</script>

<style lang='less' scoped>
.page-container {
  flex: 1;
  background: #f0f2f5;
  main {
    margin: 24px;
  }
}
</style>