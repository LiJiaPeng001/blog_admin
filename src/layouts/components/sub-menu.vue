<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>{{ menuInfo.meta ? menuInfo.meta.title : menuInfo.name }}</template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <span>{{ item.meta ? item.meta.title : item.name }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup lang=ts>

defineProps({
  menuInfo: {
    type: Object,
    default: () => { }
  }
})
</script>

<style>
</style>