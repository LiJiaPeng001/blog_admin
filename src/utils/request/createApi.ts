import axios from "axios";
import loadingCtrl from './utils/loading'
import toastCtrl from './utils/toast'
import { getErrStatus, getErrMsg } from './utils/util'

const noop: Function = (): void => { };

export default function createApi({
  loading = loadingCtrl, // loading方法
  toast = toastCtrl, // 提示方法
  setHeaders = noop, // 动态设置headers
  handleError = noop, // 自定义错误处理
  loginForce = noop, // 返回401登录后再次尝试
  createOptions = {}, // axios默认设置
  maxCount = 1,
}) {
  // axios接口返回对象
  const instance = axios.create(createOptions);
  // 动态设置headers
  instance.interceptors.request.use(async (config: any) => {
    const headers = (await setHeaders(config)) || {};
    Object.assign(config.headers, headers);
    return config;
  });
  return async (
    options: object,
    { shouldLoading = true, shouldToast = true, shouldLogin = false } = {}
  ) => {
    if (shouldLoading) loading.show();
    for (let i = 0; i < maxCount + 1; i++) {
      try {
        const response = await instance(options);
        const { data, status = 200 } = response;
        // 取消loading
        if (shouldLoading) loading.hide();
        // success code
        if (status === 200) return data.data;

        if (shouldToast && data.message) toast(data.message, 4000);
        return Promise.reject(data.message);
      } catch (e) {
        const status = getErrStatus(e);
        if (i < maxCount) {
          // 401重新登录
          if (status === 401 && loginForce) {
            await loginForce();
            continue;
          }
        }
        // 消除错误提示
        if (shouldLoading) loading.hide(true);
        // 自定义错误处理
        if (status) toast(getErrMsg(e) + status);
        handleError(e);
        return Promise.reject(e);
      }
    }
  };
}
