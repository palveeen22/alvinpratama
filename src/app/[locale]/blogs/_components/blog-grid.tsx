import { BlogCard } from './blog-card';
import { MotionDiv } from '@/components/MotionClient';

export interface BlogPost {
  id: string;
  title: string;
  contentSort?: string;
  excerpt: string;
  createdAt: Date;
  slug: string;
}

interface BlogGridProps {
  post: BlogPost;
}

export const BlogGrid = ({ post }: BlogGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <MotionDiv
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <BlogCard key={post?.id} post={post} />
    </MotionDiv>
  );
};