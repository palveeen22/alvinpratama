import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { projectsLatest } from '@/data';
import { useLocale, useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/MotionClient';
import Link from 'next/link';

export const ProjectShowcase = () => {
  const locale = useLocale();
  const t = useTranslations("latestInfo")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-light">{t("header")}</h1>
        <Link href={`/${locale}/projects`}>
          <button className="flex items-center gap-2 transition-colors group">
            <span>{t("seeAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* Mobile: Horizontal scroll, Desktop: Grid */}
      <MotionDiv
        variants={containerVariants}
        className="
          /* Mobile: Horizontal scroll */
          flex overflow-x-auto gap-4 pb-4 
          scrollbar-hide snap-x snap-mandatory
          /* Tablet and up: Grid layout */
          md:grid md:grid-cols-2 md:gap-2 md:overflow-visible md:pb-0
        "
        style={{
          /* Custom scrollbar styles for mobile */
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE/Edge */
        }}
      >
        {projectsLatest?.map((product, index) => (
          <Link
            key={product.id}
            href={`/${locale}/projects/${product?.slug}`}
            className={`
              /* Mobile: Fixed width cards */
              flex-none w-72 
              /* Tablet and up: Responsive grid */
              md:w-auto
              ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              relative overflow-hidden rounded-xl cursor-pointer 
              transform hover:scale-[1.02] transition-all duration-300 
              hover:shadow-2xl group snap-start
            `}
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div
              className={`
                relative 
                /* Mobile: Consistent aspect ratio */
                aspect-[4/3]
                /* Tablet and up: Responsive aspect ratios */
                ${index === 0
                  ? 'md:aspect-[21/10] lg:aspect-[4/3]'
                  : 'md:aspect-[4/3]'
                }
              `}
            >
              {product.image && (
                <Image
                  src={product.image}
                  alt={`${product.title} project showcase`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 288px, (max-width: 1024px) 66vw, 33vw"
                      : "(max-width: 768px) 288px, (max-width: 1024px) 50vw, 33vw"
                  }
                  priority={index < 3}
                  quality={90}
                />
              )}

              {/* Enhanced Dark Overlay - Multiple Layers for Maximum Darkness */}
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/20" />

              {/* Hover Enhancement Overlay - Makes it even darker on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-start">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className={`
                  font-bold mb-2 md:mb-3 text-white group-hover:text-white/95 
                  transition-colors duration-200 
                  /* Mobile: Smaller text */
                  text-lg 
                  /* Tablet and up: Responsive text sizes */
                  md:text-xl lg:text-xl
                  ${index === 0 ? 'md:text-2xl lg:text-xl' : ''}
                `}>
                  {product.title}
                </h3>
                <p className="
                  text-white/85 leading-relaxed group-hover:text-white/95 
                  transition-all duration-200 line-clamp-3 group-hover:line-clamp-none
                  /* Mobile: Smaller text */
                  text-xs
                  /* Tablet and up: Larger text */
                  md:text-sm
                ">
                  {product.desc}
                </p>
              </div>

              {/* Enhanced Bottom Fade for Long Text */}
              <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none group-hover:opacity-50 transition-opacity duration-300" />
            </div>

            {/* Interactive Corner Indicator */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
          </Link>
        ))}
      </MotionDiv>
    </section>
  );
};