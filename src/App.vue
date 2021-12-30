<template>
  <a-config-provider :locale="locale">
    <router-view :key="$route.fullPath" />
  </a-config-provider>
</template>

<script setup lang='ts'>
import zhCN from 'ant-design-vue/es/locale/zh_CN';

let locale = zhCN
</script>
