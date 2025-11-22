export {getStackColor} from "./color-proji"
export { formatDate, formatStacks, formatDateFn, formatBlogDate} from "./FormatDate"
export { getHeaders} from "./getHeaders"
export { getMetadata} from "./metadata"
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
} from "./urls"

export { cn } from "./cn"
export { renderMarkdown } from "./renderMarkdown"
export {
  MotionDiv,
  MotionArticle,
  MotionSection,
  MotionP,
  MotionSpan,
  MotionUl,
  MotionSvg,
  sectionVariants,
  cardVariants,
  containerVariants,
  itemVariants,
  fadeIn,
  MotionButton
} from "./motion"

export {
  isSupportedLocale,
} from "./LangFunction";

export type {
  SupportedLocale,
} from "./LangFunction";

export {
  ThemeProvider
} from "./ThemeProvider"