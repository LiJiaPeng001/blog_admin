<template>
  <div class="toast-container center-flex">
    <div class="toast-tips center-flex animated fadeIn" v-if="visible">
      <div class="tips" v-html="tips"></div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

function preventDefault(e: Event) {
  e.preventDefault();
}

let visible = ref(false)
let tips = ref('')

function show(text: string) {
  tips.value = text
  visible.value = true;
  document.body.addEventListener("touchmove", preventDefault);
}
function hide() {
  visible.value = false;
  document.body.removeEventListener("touchmove", preventDefault);
}

defineExpose({
  tips,
  show,
  hide
})

</script>

<style lang="less" scoped>
.toast-container {
  position: fixed;
  left: 0;
  top: 50%;
  z-index: 5000;
  transform: translate(0, -50%);
  width: 100%;
  height: 100%;
}
.toast-tips {
  padding: 0.8em 1em;
  border-radius: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  max-width: 66%;
  .tips {
    font-size: 14px;
    line-height: 22px;
    color: white;
    text-align: center;
    word-break: break-all;
  }
}
</style>