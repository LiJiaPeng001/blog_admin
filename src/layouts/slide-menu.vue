<template>
  <div class="layout-slider">
    <div class="slider-logo">
      <img :src="setting.cover" class="img" />
    </div>
    <a-menu
      :selectedKeys="selectedKeys"
      :inline-collapsed="setting.collapsed"
      mode="inline"
      @click="handleClick"
      :style="{ width: !setting.collapsed ? '256px' : '' }"
    >
      <template v-for="item in routes" :key="item.path">
        <template v-if="!item.children && item.hidden !== false">
          <a-menu-item :key="item.path">
            <component v-if="item.meta && item.meta.icon" :is="$icon[item.meta.icon]"></component>
            <span>{{ item.meta ? item.meta.title : item.name }}</span>
          </a-menu-item>
        </template>
        <template v-if="item.children">
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, getCurrentInstance } from 'vue';
import { useStore } from 'vuex'
import SubMenu from './components/sub-menu.vue';

let route = useRoute()
let router = useRouter()
let store = useStore()
let instance: any = getCurrentInstance()

let selectedKeys = computed(() => [route.path])
let setting = computed(() => store.state.setting)
let routes = computed(() => store.state.permission.currentRoutes)

let $icon = instance.proxy.$icon

let handleClick = ({ key = '' }: { key: string }) => {
  router.push(key);
}

</script>

<style lang='less' scoped>
.layout-slider {
  flex-shrink: 0;
  height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  max-width: 256px;
  transition: all 0.3s;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  .slider-logo {
    position: relative;
    height: 64px;
    text-align: center;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 64px;
    box-shadow: 0 0 1px rgba(0, 21, 41, 0.35);
    .img {
      width: 50px;
    }
  }
}
</style>