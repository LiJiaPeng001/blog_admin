import request from "@/utils/request";

export function list(params) {
  return request({
    url: "/api/koa-blog/keep",
    params,
  });
}
export function detail(id) {
  return request({
    url: `/api/koa-blog/keep/${id}`,
    params: { id },
  });
}
export function add(data) {
  return request({
    url: "/api/koa-blog/keep",
    method: "post",
    data,
  });
}
export function update(data) {
  return request({
    url: `/api/koa-blog/keep/${data.id}`,
    method: "put",
    data,
  });
}
export function remove(id) {
  return request({
    url: `/api/koa-blog/keep/${id}`,
    method: "delete",
  });
}
