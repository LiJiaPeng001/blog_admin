<template>
  <div class="main-box">
    <div class="head">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="it in $route.matched" :key="it.path">
          <router-link :to="{ path: it.path }">{{ it.meta ? it.meta.title : it.name }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <div class="route-title">{{ title || route.meta.title }}</div>
    </div>
    <div class="main-content">
      <slot></slot>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

let route = useRoute()
defineProps({
  title: String
})

</script>

<style lang='less'>
.head {
  padding: 16px 24px;
  background-color: #fff;
  .route-title {
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.85);
    margin-top: 16px;
  }
}
.main-content {
  padding: 24px;
  min-height: calc(100vh - 165px);
}
</style>