<template>
  <div class="layout-slider">
    <div class="slider-logo">
      <img :src="setting.cover" class="img" />
    </div>
    <a-menu mode="inline" @click="handleClick">
      <template v-for="item in routes" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <span>{{ item.meta ? item.meta.title : item.name }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import subMenu from './components/sub-menu';

export default {
  components: {
    subMenu,
  },
  computed: {
    setting() {
      return this.$store.state.setting;
    },
    routes() {
      return this.$store.state.permission.currentRoutes;
    },
  },
  mounted() {
    console.log(this.routes);
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang='less' scoped>
.layout-slider {
  flex-shrink: 0;
  height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  flex: 0 0 256px;
  max-width: 256px;
  min-width: 256px;
  width: 256px;
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