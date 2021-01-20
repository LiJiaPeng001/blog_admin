import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/api/crm/v1/auth/login",
    method: "post",
    data
  });
}

export function logout() {
  return Promise.resolve();
}

// 获取验证码
export function getCode(data) {
  return request({
    url: "/api/halo-dashboard/v1/phone/code",
    method: "post",
    data
  });
}

// 更改用户tab栏
export function updateTab(data) {
  return request({
    url: "/api/halo-dashboard/v1/user/menu",
    method: "put",
    data
  });
}
