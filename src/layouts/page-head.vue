<template>
  <div class="layout-header" :class="{ 'mini-header': set.collapsed }">
    <div class="top middle-flex">
      <a-button :type="set.theme === 'light' ? 'default' : 'primary'" @click="handleClick">
        <MenuUnfoldOutlined v-if="set.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a-popover>
        <template v-slot:content>
          <p class="text" @click="logout">退出登录</p>
        </template>
        <div class="user-info middle-flex">
          <div class="avatar cover" :style="{ backgroundImage: `url(${user.avatar || imgUrl})` }"></div>
          <div class="name">{{ user.nickName }}</div>
        </div>
      </a-popover>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useStore } from 'vuex'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { imgUrl } from '@/constans/index';
import { computed } from 'vue';

const store = useStore()
const set = computed(() => store.state.setting)
const user = computed(() => store.state.user.user)
let handleClick = () => {
  store.commit('setting/SET_SETTING', { collapsed: !set.value.collapsed });
}
let logout = () => {
  store.dispatch('user/logout');
}
</script>

<style lang='less' scoped>
.layout-header {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 21, 41, 0.08);
  position: fixed;
  top: 0;
  z-index: 2;
  box-sizing: border-box;
  width: calc(100vw - 256px);
  transition: 0.3s linear;
  .top {
    box-sizing: border-box;
    height: 64px;
    line-height: 64px;
    padding: 0 22px;
    justify-content: space-between;
  }
  .user-info {
    cursor: pointer;
    .name {
      margin-left: 10px;
    }
    .avatar {
      border-radius: 50%;
      width: 36px;
      height: 36px;
    }
  }
}
.mini-header {
  width: calc(100vw - 80px);
}
</style>