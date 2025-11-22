export type TBlogDetails = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: Date;
  author: string;
  readingTime: string;
  coverImage: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  slug: string;
  contentSort: string;
  image1?: string;
  image2?: string;
  image3?: string;
}