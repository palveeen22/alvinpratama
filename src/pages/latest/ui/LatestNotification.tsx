import { MotionDiv } from "@/shared/lib";
import { TBlogDetails } from "@/shared/types";
import Link from "next/link";
import { LatestNotificationCard } from "./LatestNotificationCard";

type TProps = {
  blog: TBlogDetails;
  locale: string;
  index: number;
  isHovered: boolean;
  isCollapsed?: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export const LatestNotification = ({
  blog,
  locale,
  isHovered,
  isCollapsed = false,
  onHoverStart,
  onHoverEnd,
}: TProps) => {

  return (
    <MotionDiv
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {isCollapsed ? (
        <div className="block">
          <LatestNotificationCard
            blog={blog}
            isHovered={isHovered}
          />
        </div>
      ) : (
        <Link href={`/${locale}/blogs/${blog.slug}`} className="block">
          <LatestNotificationCard
            blog={blog}
            isHovered={isHovered}
          />
        </Link>
      )}
    </MotionDiv>
  );
};