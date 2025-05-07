import React from 'react';
import { Building, Calendar, MapPin, ChevronRight, Code, LineChart, MessageSquare, Globe, CreditCard, Bell, Map } from 'lucide-react';

const WorkExperienceJourney = () => {
  const experiences = [
    {
      company: 'faoTech',
      period: 'Jun 2022 – Sept 2023',
      location: 'Kazan',
      emoji: '👨‍💻',
      color: 'bg-blue-500',
      achievements: [
        { text: 'Built responsive web apps with React', icon: <Code size={18} /> },
        { text: 'Integrated complex APIs and developed full CRUD features', icon: <ChevronRight size={18} /> },
        { text: 'Focused on UX with animations, SEO optimization, and i18n support', icon: <ChevronRight size={18} /> },
        { text: 'Created admin panels, authentication, and email services', icon: <ChevronRight size={18} /> }
      ]
    },
    {
      company: 'BRI Indonesia – Qlola Squad',
      period: 'Sept 2023 – Feb 2024',
      location: 'Jakarta',
      emoji: '🏦',
      color: 'bg-green-500',
      achievements: [
        { text: 'Developed Qlola Bank Admin platform with charts and dashboards', icon: <LineChart size={18} /> },
        { text: 'Migrated legacy Next.js (v10) to App Router (v14)', icon: <ChevronRight size={18} /> },
        { text: 'Built real-time forex updates via WebSocket', icon: <ChevronRight size={18} /> },
        { text: 'Refactored legacy JS to TS, implemented Storybook and reusable components', icon: <ChevronRight size={18} /> },
        { text: 'Used Zustand for multi-step forms and optimized state management', icon: <ChevronRight size={18} /> }
      ]
    },
    {
      company: 'Curated Community',
      period: 'Feb 2024 – Now',
      location: 'Moscow',
      emoji: '🌍',
      color: 'bg-purple-500',
      achievements: [
        { text: 'Developed a cross-platform social media app (web & PWA) using Next.js & React Native', icon: <Globe size={18} /> },
        { text: 'Implemented real-time chat (DM, group chat, reactions) using Socket.IO', icon: <MessageSquare size={18} /> },
        { text: 'Integrated Stripe payments, Firebase notifications, Google Maps, and email via Brevo', icon: <CreditCard size={18} /> },
        { text: 'Designed a smart user-matching algorithm for community engagement', icon: <ChevronRight size={18} /> },
        { text: 'Deployed the app to TestFlight and App Store', icon: <ChevronRight size={18} /> }
      ]
    }
  ];

  return (
    <div className="px-4 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-16">My Professional Journey</h1>
      
      <div className="relative">
        {/* Main vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-24 relative z-10">
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full border-4 border-white ${exp.color} text-white text-2xl`}>
                <span>{exp.emoji}</span>
              </div>
            </div>

            {/* Experience card - alternating sides */}
            <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2"></div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1 text-gray-700">{achievement.icon}</span>
                        <span>{achievement.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Decorative squiggle lines */}
        <svg className="absolute top-0 left-0 w-32 h-full opacity-10" viewBox="0 0 100 800">
          <path d="M10,0 Q50,50 10,100 Q50,150 10,200 Q50,250 10,300 Q50,350 10,400 Q50,450 10,500" 
                stroke="currentColor" fill="none" strokeWidth="3" className="text-gray-500" />
        </svg>
        <svg className="absolute top-0 right-0 w-32 h-full opacity-10" viewBox="0 0 100 800">
          <path d="M90,0 Q50,50 90,100 Q50,150 90,200 Q50,250 90,300 Q50,350 90,400 Q50,450 90,500" 
                stroke="currentColor" fill="none" strokeWidth="3" className="text-gray-500" />
        </svg>
      </div>
    </div>
  );
};

export default WorkExperienceJourney;