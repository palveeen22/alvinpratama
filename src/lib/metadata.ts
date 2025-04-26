import type { Metadata } from "next";
import { keywords, statTitle } from "@/data/metakey";
import { getUrl, URLS } from "./urls";
import { getHeaders } from "./getHeaders";

type OpenGraphArticle = {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  section?: null | string;
  ogUrl?: string
};

type Props = {
  openGraphArticle?: OpenGraphArticle;
  description?: string;
  title?: string;
  imageUrl?: string | null;
  tags?: string[];
  urlData?: string;
  canonicalUrl?: string;
  verificationGoogle?: string;
  verificationYandex?: string;
};

export const getMetadataImage = (title: string) => [
  {
    url: URLS.ogImage,
    type: "image/png",
    width: 1200,
    height: 630,
    alt: title
  }
];

export const getMetadata = async ({
  title,
  description,
  imageUrl,
  urlData,
  openGraphArticle,
  canonicalUrl = 'https://www.alvinpratama.com',
}: Props): Promise<Metadata> => {
  const url = urlData ? urlData : getUrl({ path: (await getHeaders()).path })
  const getMetadataTitle = () => (modifiedTitle === title ? modifiedTitle : `${modifiedTitle}`)
  const modifiedTitle = title || statTitle;
  const medifiedDescription = description;
  const images = [{
    // url: imageUrl ? `${process.env.NEXT_PUBLIC_BASE_URL}${imageUrl}` : URLS.ogImage,
    url: "https://www.alvinpratama.com/assets/opengraph.png",
    alt: getMetadataTitle(),
    type: "image/png",
    width: 1200,
    height: 630
  }];


  const openGraphData: OpenGraphArticle = {
    ...openGraphArticle,
    publishedTime: openGraphArticle?.publishedTime || new Date().toISOString(),
    modifiedTime: openGraphArticle?.publishedTime || new Date().toISOString(),
  };

  return {
    metadataBase: new URL('https://www.alvinpratama.com'),
    generator: modifiedTitle,
    applicationName: modifiedTitle,
    creator: modifiedTitle,
    publisher: modifiedTitle,
    category: "website",
    referrer: "origin-when-cross-origin",
    authors: [{ name: 'Alvin Pratama' }],
    title: {
      default: modifiedTitle,
      template: `%s | ${modifiedTitle}`
    },
    keywords: keywords,
    description: "I'm a Software Engineer with expertise in Frontend and Mobile App Development. Passionate about user experience, infrastructure as code and cloud solutions. Driven to make quality code which is clean, well tested, and maintainable. Committed to constant learning and skill enhancement in new technologies and programming languages.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: {
        default: modifiedTitle,
        template: `%s | ${modifiedTitle}`
      },
      description: medifiedDescription,
      url: url,
      siteName: modifiedTitle,
      locale: 'en_US',
      type: "website",
      images,
      ...openGraphData
    },
    twitter: {
      card: "summary_large_image",
      title: { default: modifiedTitle, template: `%s | ${modifiedTitle}` },
      description: medifiedDescription,
      images,
      creator: url
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appleWebApp: { capable: true, title, statusBarStyle: "default" },
  };
};