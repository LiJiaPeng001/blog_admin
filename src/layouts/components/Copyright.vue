<template>
  <div class="copyright">
    <span>Copyright</span>
    <CopyrightOutlined />
    <span> 2021 李小朋</span>
  </div>
</template>

<script>
import { CopyrightOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    CopyrightOutlined,
  },
};
</script>

<style lang="less" scoped>
.copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.copyright-icon {
  padding: 0 0.5em;
}
</style>