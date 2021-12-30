export const env: string = process.env.NODE_ENV as string;

export const isProd: boolean = env === "production";
export const isDev: boolean = env === "development";