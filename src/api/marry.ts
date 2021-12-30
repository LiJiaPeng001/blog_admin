import request from "@/utils/request";

export function list(params = {}) {
  return request({
    url: "/api/koa-blog/card",
    params,
  });
}
export function detail(id: string | number) {
  return request({
    url: `/api/koa-blog/card/${id}`,
    params: { id },
  });
}
export function add(data = {}) {
  return request({
    url: "/api/koa-blog/card",
    method: "post",
    data,
  });
}
export function update(data: { id: number }) {
  return request({
    url: `/api/koa-blog/card/${data.id}`,
    method: "put",
    data,
  });
}
export function remove(id: string | number) {
  return request({
    url: `/api/koa-blog/card/${id}`,
    method: "delete",
  });
}
