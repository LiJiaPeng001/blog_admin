<template>
  <div class="login-container">
    <ul class="circles">
      <li v-for="n in 10" :key="n"></li>
    </ul>
    <div class="login-wrap">
      <div class="title">{{ title }}</div>
      <a-form
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        class="form-model"
        ref="form"
        :model="forms"
        :rules="rules"
        @finish="onSubmit"
      >
        <a-form-item name="phone">
          <a-input size="large" placeholder="请输入手机号" v-model:value="forms.phone">
            <template #prefix>
              <PhoneFilled />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input size="large" placeholder="请输入密码" v-model:value="forms.password">
            <template #prefix>
              <LockFilled />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button size="large" style="width: 100%" type="primary" htmlType="submit">登录</a-button>
        </a-form-item>
      </a-form>
      <div class="halo-phone">客服热线：{{ phone }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { PhoneFilled, LockFilled } from "@ant-design/icons-vue";

let router = useRouter()
let store = useStore()

let labelCol = { span: 0 }
let wrapperCol = { span: 24 }
let title = import.meta.env.VITE_TITLE

let phone = 13673717028
let forms = ref({
  phone: "13673717028",
  password: "123456",
})
let form = ref()
let rules = ref({
  phone: [
    {
      required: true,
      pattern: /^1\d{10}$/,
      message: "请正确输入手机号",
    },
  ],
  password: [{ required: true, message: "请输入验证码" }],
})


let onSubmit = async () => {
  await form.value.validate();
  await store.dispatch("user/login", forms.value);
  router.replace("/home");
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;
  background-size: 100%;
}
.form-model {
  width: 336px;
}
.login-wrap {
  position: relative;
  z-index: 1;
}
.title {
  font-size: 26px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  position: relative;
  top: 2px;
  text-align: center;
  padding-bottom: 50px;
}
.halo-phone {
  text-align: center;
  padding-top: 20px;
}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
}
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: #fff;
    animation: animate 25s linear infinite;
    bottom: -200px;
    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
      }
      100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
      }
    }
    &:nth-child(1) {
      left: 15%;
      width: 80px;
      height: 80px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      left: 5%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 12s;
    }
    &:nth-child(3) {
      left: 70%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-delay: 0s;
      animation-duration: 18s;
    }
    &:nth-child(5) {
      left: 65%;
      width: 20px;
      height: 20px;
      animation-delay: 0s;
    }
    &:nth-child(6) {
      left: 75%;
      width: 150px;
      height: 150px;
      animation-delay: 3s;
    }
    &:nth-child(7) {
      left: 35%;
      width: 200px;
      height: 200px;
      animation-delay: 7s;
    }
    &:nth-child(8) {
      left: 50%;
      width: 25px;
      height: 25px;
      animation-delay: 15s;
      animation-duration: 45s;
    }
    &:nth-child(9) {
      left: 20%;
      width: 15px;
      height: 15px;
      animation-delay: 2s;
      animation-duration: 35s;
    }
    &:nth-child(10) {
      left: 85%;
      width: 150px;
      height: 150px;
      animation-delay: 0s;
      animation-duration: 11s;
    }
  }
}
</style>