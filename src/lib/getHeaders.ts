"use server";

import { headers } from "next/headers";
import { HEADERS } from "./urls";
// import { isCapacitor } from "./platform";

export const getHeaders = async () => {
  const headersList = await headers();
  return {
    path: headersList.get(HEADERS.path) ?? "",
    fullUrl: headersList.get('x-full-url') ?? ""
  };
};