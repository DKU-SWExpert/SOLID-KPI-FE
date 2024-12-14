export const isProd = (env: string | undefined): boolean =>
  env === "production";

export const isMobile = (width: number): boolean => width <= 768;
