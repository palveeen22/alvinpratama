'use client';

import React from 'react';
import { Locale, LocalizedProject } from '@/shared/types';

type ProjectType = 'all' | 'mobile' | 'web';

type ProjectFilterTabsProps = {
  locale: Locale;
  selectedType: ProjectType;
  onTypeChange: (type: ProjectType) => void;
  projects: LocalizedProject[];
};

// Define tech stack categories
const TECH_CATEGORIES = {
  mobile: ['React Native', 'Flutter', 'Expo', 'Dart', 'Swift', 'Kotlin'],
  web: ['React', 'Next.js', 'NextJs', 'JavaScript', 'TypeScript', 'TailwindCSS', 'HTML']
};

export const ProjectFilterTabs = ({
  locale,
  selectedType,
  onTypeChange,
  projects
}: ProjectFilterTabsProps) => {
  
  // Count projects per category
  const getCategoryCount = (type: ProjectType): number => {
    if (type === 'all') return projects.length;
    
    return projects.filter(project => {
      const hasMobile = project.stacks.some(stack => 
        TECH_CATEGORIES.mobile.includes(stack)
      );
      const hasWeb = project.stacks.some(stack => 
        TECH_CATEGORIES.web.includes(stack)
      );
      
      if (type === 'mobile') return hasMobile;
      if (type === 'web') return hasWeb && !hasMobile;
      return false;
    }).length;
  };

  // Get filter labels based on locale
  const getFilterLabel = (type: ProjectType): string => {
    const labels = {
      en: { 
        all: 'All Projects', 
        mobile: 'Mobile Apps', 
        web: 'Web Apps' 
      },
      ru: { 
        all: 'Все проекты', 
        mobile: 'Мобильные приложения', 
        web: 'Веб-приложения' 
      }
    };
    return labels[locale]?.[type] || labels.en[type];
  };

  // Icons for each filter type
  const icons: Record<ProjectType, string> = {
    all: '📱💻',
    mobile: '📱',
    web: '💻'
  };

  const filterTypes: ProjectType[] = ['all', 'mobile', 'web'];

  return (
    <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {filterTypes.map((type) => {
        const count = getCategoryCount(type);
        const isActive = selectedType === type;
        
        return (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`
              px-4 py-2.5 rounded-lg font-medium transition-all duration-200
              whitespace-nowrap flex-shrink-0 flex items-center gap-2
              ${isActive
                ? 'bg-foreground text-background shadow-lg scale-105'
                : 'bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground hover:scale-102'
              }
            `}
          >
            <span>{icons[type]}</span>
            <span>{getFilterLabel(type)}</span>
            <span 
              className={`
                text-xs px-1.5 py-0.5 rounded-full font-semibold
                ${isActive
                  ? 'bg-background/20 text-background'
                  : 'bg-foreground/10 text-foreground/60'
                }
              `}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

