export const project = {
  title: "Projects",
  pharagraph: "Some things that I've created during my learning journey...."
}

export const allPosts = [
  { description: "testx", title: "blabla", date: "2024/12/1", slug: "content-security-policy" },
  { description: "testx", title: "blabla", date: "2024/12/1", slug: "content-security-policy" },
  { description: "testx", title: "blabla", date: "2024/12/1", slug: "content-security-policy" },
];

export const projects = [
  {
    id: "1012",
    slug: "fxx-app",
    url: "https://fxx-app.vercel.app/en",
    image: "/assets/fxx-cover.png",
    title: "Fxx App",
    desc: "An MVP platform designed to help international students find rental apartments in Saint Petersburg.",
    stacks: ["Next.js", "TailwindCSS", "TypeScript", "i18next"],
    keywords: ["student housing", "Saint Petersburg", "international students", "rental platform", "apartment search"],
    features: [
      "Apartment listings with key details (price, location, amenities)",
      "Multilingual support (English, Russian, Chinese)",
      "Favorites feature for saved apartments",
      "Responsive design for mobile and desktop",
      "Basic contact system for connecting with landlords or agents"
    ],
    architectureHighlights: [
      "Built with Next.js App Router and TypeScript for modern development standards",
      "i18next for multilingual support",
      "TailwindCSS for responsive and clean UI",
      "Static and server-rendered pages for performance",
      "Scalable layout ready for expansion to other cities"
    ],
    metaTitle: "Fxx App | for International Students Showcase",
    metaDescription: "An MVP platform designed to help international students find rental apartments in Saint Petersburg. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1001',
    slug: "curated-community-london",
    url: "https://apps.apple.com/us/app/curated-community/id6503678224",
    image: "/assets/currated.png",
    title: "Curated Community London",
    desc: "A members-only social app designed to connect friendly people nearby, making it feel like an intimate yet massive friend group.",
    stacks: ["Node.js", "React Native", "MongoDB", "Mongoose", "Google Maps", "Redux Toolkit"],
    keywords: ["social app", "community", "friendship", "mobile app"],
    features: [
      "User matching based on location and interests",
      "Private messaging and friend suggestions",
      "Interactive map of nearby members"
    ],
    architectureHighlights: [
      "Backend built with Node.js and MongoDB",
      "State management with Redux Toolkit",
      "Real-time location updates via Google Maps API"
    ],
    metaTitle: "Curated Community London | for Social Impact Showcase",
    metaDescription: "A members-only social app designed to connect friendly people nearby, making it feel like an intimate yet massive friend group. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1002',
    slug: "waterhub",
    url: "https://apps.apple.com/id/app/waterhub/id1491202942",
    image: "/assets/waterhub.png",
    title: "WaterHub",
    desc: "Indonesia's first quota-based smart water refill station, accessible through a mobile app.",
    stacks: ["Dart", "Flutter", "Provider"],
    keywords: ["sustainability", "water refill", "mobile app", "Indonesia"],
    features: [
      "Real-time water availability tracking",
      "User quota and refill history management",
      "Multi-platform app support (iOS and Android)"
    ],
    architectureHighlights: [
      "Flutter front-end with Provider state management",
      "Native modules for device-specific operations",
      "API integration for station management backend"
    ],
    metaTitle: "WaterHub | Digital Solution Showcase",
    metaDescription: "Indonesia's first quota-based smart water refill station, accessible through a mobile app. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1003',
    slug: "pintar-ai",
    url: "https://github.com/Prevferr/Pintar-Ai-Next-app",
    image: "/assets/open-ai.png",
    title: "Pintar AI",
    desc: "A web app integrating OpenAI to provide keyword-summarized research and smart project recommendations for investors.",
    stacks: ["TypeScript", "React", "Next.js", "TailwindCSS", "Zustand"],
    keywords: ["AI", "OpenAI", "investment", "web app"],
    features: [
      "Research keyword summarization",
      "Investor project matching",
      "OpenAI GPT-based recommendations"
    ],
    architectureHighlights: [
      "Next.js server-side rendering for SEO optimization",
      "State management with Zustand",
      "OpenAI API integration with efficient caching"
    ],
    metaTitle: "Pintar AI | Digital Solution Showcase",
    metaDescription: "A web app integrating OpenAI to provide keyword-summarized research and smart project recommendations for investors. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1004',
    slug: "webcamtoy",
    url: "https://test-verihubs-webcam.vercel.app/",
    image: "/assets/webcam-toy.png",
    title: "WebcamToy",
    desc: "A webcam app that lets users capture photos with filters and effects directly from their browser.",
    stacks: ["TypeScript", "React", "TailwindCSS", "react-webcam"],
    keywords: ["webcam", "photo app", "browser", "effects"],
    features: [
      "Live camera feed preview",
      "Photo capture with visual effects",
      "Download or share captured images"
    ],
    architectureHighlights: [
      "Webcam integration with react-webcam library",
      "Client-side image processing",
      "Lightweight, optimized for browser performance"
    ],
    metaTitle: "WebcamToy | Digital Solution Showcase",
    metaDescription: "A webcam app that lets users capture photos with filters and effects directly from their browser. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1005',
    slug: "walkies",
    url: "https://github.com/H8-FSJS-P3S6/gc01-palveeen22",
    image: "/assets/walkies.png",
    title: "Walkies",
    desc: "A fictional dog-walking service app, showcasing full UI/UX design and responsiveness across devices.",
    stacks: ["TypeScript", "React Native", "TailwindCSS", "MongoDB", "Apollo GraphQL", "Redis"],
    keywords: ["mobile app", "dog walking", "React Native", "responsive"],
    features: [
      "Dog walker booking and management",
      "Profile creation and history tracking",
      "Real-time notifications"
    ],
    architectureHighlights: [
      "GraphQL APIs for efficient data fetching",
      "Cross-platform mobile app with React Native",
      "Redis caching for faster user sessions"
    ],
    metaTitle: "Walkies | Mobile & Web App Showcase",
    metaDescription: "A fictional dog-walking service app, showcasing full UI/UX design and responsiveness across devices. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1006',
    slug: "canvalon",
    url: "https://canva-contributor.vercel.app/",
    // image: "/images/projects/canvalon.jpg",
    title: "Canvalon",
    desc: "A collaborative whiteboard web app using Socket.IO for real-time multi-user drawing sessions.",
    stacks: ["TypeScript", "ReactJS", "TailwindCSS", "Redux", "Node.js", "Socket.IO"],
    keywords: ["whiteboard", "real-time", "Socket.IO", "collaboration"],
    features: [
      "Multi-user real-time drawing",
      "Session-based room joining",
      "Live cursor sharing"
    ],
    architectureHighlights: [
      "Real-time communication with WebSockets",
      "Node.js backend server",
      "Redux for session and user state management"
    ],
    metaTitle: "Canvalon | Mobile & Web App Showcase",
    metaDescription: "A collaborative whiteboard web app using Socket.IO for real-time multi-user drawing sessions. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1007',
    slug: "pesanaja",
    url: "https://pesanaja-client-react.vercel.app/",
    image: "/assets/pesanaja.png",
    title: "Pesanaja",
    desc: "A grocery delivery platform with Google Maps integration and online payments using Xendit API.",
    stacks: ["JavaScript", "React", "TailwindCSS", "Ant Design", "Redux", "Node.js"],
    keywords: ["e-commerce", "grocery app", "delivery", "maps integration"],
    features: [
      "Product browsing and shopping cart",
      "Delivery address selection via Maps",
      "Secure online payment integration"
    ],
    architectureHighlights: [
      "Google Maps API integration",
      "Secure payment system via Xendit",
      "Responsive web design for mobile users"
    ],
    metaTitle: "Pesanaja | Mobile & Web App Showcase",
    metaDescription: "A grocery delivery platform with Google Maps integration and online payments using Xendit API. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1008',
    slug: "aliexpress-ru-clone",
    url: "https://github.com/palveeen22/next-js-fullstack-aliexpress-clone",
    image: "/assets/aliexpres-clone.png",
    title: "Aliexpress RU - Clone",
    desc: "A full-stack clone of AliExpress built with Next.js, optimized for performance, SEO, and security.",
    stacks: ["TypeScript", "Next.js", "TailwindCSS", "MongoDB", "Zustand"],
    keywords: ["e-commerce", "AliExpress", "Next.js", "clone project"],
    features: [
      "Product listing and search",
      "Shopping cart and order management",
      "User authentication and profiles"
    ],
    architectureHighlights: [
      "Next.js API routes for backend logic",
      "MongoDB database for product data",
      "Zustand for global state management"
    ],
    metaTitle: "Aliexpress RU - Clone | Clone Project Showcase",
    metaDescription: "A full-stack clone of AliExpress built with Next.js, optimized for performance, SEO, and security. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1009',
    slug: "instagram-clone-app",
    url: "https://github.com/H8-FSJS-P3S6/gc01-palveeen22",
    // image: "/images/projects/instagram-clone.jpg",
    title: "Instagram Clone App",
    desc: "A mobile-first project inspired by Instagram, developed with a focus on GraphQL and real-time features.",
    stacks: ["TypeScript", "React Native", "TailwindCSS", "MongoDB", "Apollo GraphQL", "Redis"],
    keywords: ["mobile app", "Instagram clone", "social media", "React Native"],
    features: [
      "Post creation and feeds",
      "Real-time chat and notifications",
      "Profile and following system"
    ],
    architectureHighlights: [
      "GraphQL APIs using Apollo",
      "Real-time updates with Redis pub/sub",
      "Scalable architecture for mobile platforms"
    ],
    metaTitle: "Instagram Clone App | Clone Project Showcase",
    metaDescription: "A mobile-first project inspired by Instagram, developed with a focus on GraphQL and real-time features. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1010',
    slug: "turun-tangan",
    url: "https://turuntangan.id/",
    image: "/assets/turun-tangan.png",
    title: "Turun Tangan",
    desc: "A national volunteer network focusing on social, humanitarian, and educational movements across Indonesia.",
    stacks: ["JavaScript", "React", "TailwindCSS", "Redux"],
    keywords: ["nonprofit", "volunteering", "social movement", "Indonesia"],
    features: [
      "Volunteer registration and profile management",
      "Event management and participation tracking",
      "Donation integration"
    ],
    architectureHighlights: [
      "Responsive web app with React and TailwindCSS",
      "Global state management with Redux",
      "CMS-like structure for event updates"
    ],
    metaTitle: "Turun Tangan | for Social Impact Showcase",
    metaDescription: "A national volunteer network focusing on social, humanitarian, and educational movements across Indonesia. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1011',
    slug: "belinsky-studio",
    url: "https://belinskyproduction.com/",
    image: "/assets/belinsky.png",
    title: "Belinsky Studio",
    desc: "A creative production house specializing in photography and filmmaking, delivering high-quality visual content.",
    stacks: ["JavaScript", "React", "TailwindCSS", "Content Layer"],
    keywords: ["photography", "filmmaking", "studio", "creative production"],
    features: [
      "Portfolio showcase for photography and film",
      "Contact and booking forms",
      "Responsive grid layouts"
    ],
    architectureHighlights: [
      "Static site generation using Content Layer",
      "Responsive UI with TailwindCSS",
      "Optimized SEO and fast load time"
    ],
    metaTitle: "Belinsky Studio | Digital Solution Showcase",
    metaDescription: "A creative production house specializing in photography and filmmaking, delivering high-quality visual content. Explore how this project uses modern technologies to serve its target audience effectively."
  }
];


export const projectsLatest = [

  {
    id: '1001',
    slug: "curated-community-london",
    url: "https://apps.apple.com/us/app/curated-community/id6503678224",
    image: "/assets/currated.png",
    title: "Curated Community London",
    desc: "A members-only social app designed to connect friendly people nearby, making it feel like an intimate yet massive friend group.",
    stacks: ["Node.js", "React Native", "MongoDB", "Mongoose", "Google Maps", "Redux Toolkit"],
    keywords: ["social app", "community", "friendship", "mobile app"],
    features: [
      "User matching based on location and interests",
      "Private messaging and friend suggestions",
      "Interactive map of nearby members"
    ],
    architectureHighlights: [
      "Backend built with Node.js and MongoDB",
      "State management with Redux Toolkit",
      "Real-time location updates via Google Maps API"
    ],
    metaTitle: "Curated Community London | for Social Impact Showcase",
    metaDescription: "A members-only social app designed to connect friendly people nearby, making it feel like an intimate yet massive friend group. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1002',
    slug: "waterhub",
    url: "https://apps.apple.com/id/app/waterhub/id1491202942",
    image: "/assets/waterhub.png",
    title: "WaterHub",
    desc: "Indonesia's first quota-based smart water refill station, accessible through a mobile app.",
    stacks: ["Dart", "Flutter", "Provider"],
    keywords: ["sustainability", "water refill", "mobile app", "Indonesia"],
    features: [
      "Real-time water availability tracking",
      "User quota and refill history management",
      "Multi-platform app support (iOS and Android)"
    ],
    architectureHighlights: [
      "Flutter front-end with Provider state management",
      "Native modules for device-specific operations",
      "API integration for station management backend"
    ],
    metaTitle: "WaterHub | Digital Solution Showcase",
    metaDescription: "Indonesia's first quota-based smart water refill station, accessible through a mobile app. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1010',
    slug: "turun-tangan",
    url: "https://turuntangan.id/",
    image: "/assets/turun-tangan.png",
    title: "Turun Tangan",
    desc: "A national volunteer network focusing on social, humanitarian, and educational movements across Indonesia.",
    stacks: ["JavaScript", "React", "TailwindCSS", "Redux"],
    keywords: ["nonprofit", "volunteering", "social movement", "Indonesia"],
    features: [
      "Volunteer registration and profile management",
      "Event management and participation tracking",
      "Donation integration"
    ],
    architectureHighlights: [
      "Responsive web app with React and TailwindCSS",
      "Global state management with Redux",
      "CMS-like structure for event updates"
    ],
    metaTitle: "Turun Tangan | for Social Impact Showcase",
    metaDescription: "A national volunteer network focusing on social, humanitarian, and educational movements across Indonesia. Explore how this project uses modern technologies to serve its target audience effectively."
  },
  {
    id: '1011',
    slug: "belinsky-studio",
    url: "https://belinskyproduction.com/",
    image: "/assets/belinsky.png",
    title: "Belinsky Studio",
    desc: "A creative production house specializing in photography and filmmaking, delivering high-quality visual content.",
    stacks: ["JavaScript", "React", "TailwindCSS", "Content Layer"],
    keywords: ["photography", "filmmaking", "studio", "creative production"],
    features: [
      "Portfolio showcase for photography and film",
      "Contact and booking forms",
      "Responsive grid layouts"
    ],
    architectureHighlights: [
      "Static site generation using Content Layer",
      "Responsive UI with TailwindCSS",
      "Optimized SEO and fast load time"
    ],
    metaTitle: "Belinsky Studio | Digital Solution Showcase",
    metaDescription: "A creative production house specializing in photography and filmmaking, delivering high-quality visual content. Explore how this project uses modern technologies to serve its target audience effectively."
  }
];