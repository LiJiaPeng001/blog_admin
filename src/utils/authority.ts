import { env } from './validate'

const name: string = `blog_${env}_website`
const maxAge: number = 1000 * 60 * 60 * 24 * 28;

const authority = {
  get() {
    let localData: string = window.localStorage.getItem(name) as string
    let data = JSON.parse(localData) || { time: 0 };
    // 过期了
    if (data.time && Date.now() - data.time >= maxAge) {
      this.clear();
      return {};
    }
    return data;
  },
  set(data: any) {
    let user = this.get();
    data.time = user.time > 0 ? user.time : Date.now();
    data = JSON.stringify({
      ...user,
      ...data,
    });
    window.localStorage.setItem(name, data);
  },
  clear() {
    window.localStorage.removeItem(name);
  },
};

export default authority;
