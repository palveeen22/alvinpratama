import type { ReadonlyURLSearchParams } from "next/navigation";

const IS_CLIENT = typeof window !== "undefined";

const isExternalLink = (href: string) => href.startsWith("http");

const getBaseUrl = () => {
  // Client-side: use window.location.origin
  if (IS_CLIENT) return window.location.origin;
  
  // Production: Use Vercel URL with proper protocol
  if (process.env.VERCEL_URL) {
    // return `https://${process.env.VERCEL_URL}`;
    return `https://www.alvinpratama.com`;
  }
  
  // Fallback to public base URL
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  
  // Development fallback
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

const getUrl = ({ path, fullUrl }: { path: string; fullUrl?: string }) => {
  if (fullUrl) return fullUrl;
  return `${getBaseUrl()}${path}`;
};

const createUrl = (path: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${path}${queryString}`;
};

// ✅ Use consistent base URL function
const BASE_URL = { 
  development: getBaseUrl(), 
  production: getBaseUrl() 
};

const ENDPOINTS = { 
  ogImage: "/assets/opengraph.png", 
  sitemap: "/sitemap.xml" 
};

const HEADERS = { 
  path: "x-pathname" 
} as const;

const PATHS = { 
  main: "/" 
};

const ALL_PATHS = Object.values(PATHS).flat();

const URLS = {
  ogImage: getUrl({ path: ENDPOINTS.ogImage }),
  sitemap: getUrl({ path: ENDPOINTS.sitemap }),
};

export {
  getUrl,
  getBaseUrl,
  isExternalLink,
  createUrl,
  URLS,
  BASE_URL,
  ENDPOINTS,
  HEADERS,
  ALL_PATHS,
  PATHS,
  IS_CLIENT,
};