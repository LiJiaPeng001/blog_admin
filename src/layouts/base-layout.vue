<template>
  <div class="base-layout flex">
    <slide-menu></slide-menu>
    <div class="page-container" :class="{ 'mini-container': setting.collapsed }">
      <page-head />
      <router-view :key="route.fullPath" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import pageHead from './page-head.vue';
import slideMenu from './slide-menu.vue';

const store = useStore()
const route = useRoute()

const setting = computed(() => store.state.setting)

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