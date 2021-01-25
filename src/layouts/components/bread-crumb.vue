<template>
  <div>
    <a-breadcrumb class="crumbs">
      <a-breadcrumb-item v-for="it in $route.matched" :key="it.path">
        <router-link :to="{ path: it.path }">{{ it.meta ? it.meta.title : it.name }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="main-content">
      <slot></slot>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.crumbs {
  padding: 16px 24px;
  background-color: #fff;
}
.main-content {
  padding: 24px;
}
</style>