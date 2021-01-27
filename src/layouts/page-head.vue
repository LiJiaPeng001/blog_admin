<template>
  <div class="layout-header">
    <div class="top middle-flex">
      <a-button :type="set.theme === 'light' ? 'default' : 'primary'" @click="handleClick">
        <MenuUnfoldOutlined v-if="set.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a-popover>
        <template #content>
          <p class="text" @click="logout">退出登录</p>
        </template>
        <div class="user-info middle-flex">
          <div
            class="avatar cover"
            :style="{ backgroundImage: `url(${user.avatar || imgUrl})` }"
          ></div>
          <div class="name">{{ user.nickName }}</div>
        </div>
      </a-popover>
    </div>
  </div>
</template>

<script>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { imgUrl } from '@/contants';

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  data() {
    return {
      imgUrl,
    };
  },
  computed: {
    set() {
      return this.$store.state.setting;
    },
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('SET_SETTING', { collapsed: !this.set.collapsed });
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang='less' scoped>
.layout-header {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 21, 41, 0.08);
  .top {
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
</style>