import { TProjectDetail } from '@/shared/types/ProjectDetail';

export const projects: TProjectDetail[] = [
  {
    id: '1008',
    slug: "shout-music-platform",
    url: "",
    image: "/assets/shout.png",
    title: {
      en: "Shout – Music & Events Ecosystem",
      ru: "Shout — Музыкальная и ивент-платформа"
    },
    desc: {
      en: "Shout is a comprehensive music ecosystem connecting Artists and Fans in one platform. Artists can promote music, manage events, engage fans, and monetize content, while Fans can discover music, follow artists, attend events, and purchase tickets — all within a seamless mobile experience.",
      ru: "Shout — это комплексная музыкальная экосистема, объединяющая артистов и поклонников на одной платформе. Артисты могут продвигать музыку, управлять мероприятиями, взаимодействовать с фанатами и монетизировать контент, а пользователи — открывать новую музыку, следить за артистами, посещать события и покупать билеты."
    },
    stacks: [
      "React Native",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe Connect",
      "Firebase",
      "REST API"
    ],
    keywords: {
      en: ["music app", "artists", "events", "ticketing", "fan engagement"],
      ru: ["музыкальное приложение", "артисты", "мероприятия", "билеты", "фанаты"]
    },
    features: {
      en: [
        "Artist profile and content management",
        "Music uploads, playlists, and streaming",
        "Event creation, ticket sales, and attendance tracking",
        "Fan discovery, follow system, and messaging",
        "Stripe-based payouts and revenue tracking"
      ],
      ru: [
        "Управление профилем и контентом артиста",
        "Загрузка музыки, плейлисты и стриминг",
        "Создание мероприятий, продажа билетов и учет посещаемости",
        "Поиск артистов, подписки и сообщения",
        "Выплаты и учет доходов через Stripe"
      ]
    },
    architectureHighlights: {
      en: [
        "Scalable backend with Node.js and PostgreSQL",
        "Secure payments and payouts via Stripe Connect",
        "Push notifications and analytics for fan engagement"
      ],
      ru: [
        "Масштабируемый backend на Node.js и PostgreSQL",
        "Безопасные платежи и выплаты через Stripe Connect",
        "Push-уведомления и аналитика вовлеченности"
      ]
    },
    metaTitle: {
      en: "Shout | Music & Events Mobile Platform",
      ru: "Shout | Музыкальная мобильная платформа"
    },
    metaDescription: {
      en: "Shout empowers artists to grow their audience and monetize content, while fans enjoy music discovery, events, and direct interaction — all in one modern mobile platform.",
      ru: "Shout помогает артистам развивать аудиторию и зарабатывать, а фанатам — открывать музыку, посещать мероприятия и общаться с любимыми исполнителями."
    }
  },
  {
    id: '1010',
    slug: "xatee-social-travel",
    url: "",
    image: "/assets/xatee.png",
    title: {
      en: "Xatee – Social Travel & Lifestyle Platform",
      ru: "Xatee — Социальная travel-платформа"
    },
    desc: {
      en: "Xatee is a global social travel platform that helps users discover unforgettable experiences worldwide — from hotels and restaurants to festivals and parties — while staying socially connected.",
      ru: "Xatee — это глобальная социальная travel-платформа для поиска незабываемых впечатлений по всему миру: от отелей и ресторанов до фестивалей и вечеринок."
    },
    stacks: [
      "React Native Expo",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Cloud Storage"
    ],
    keywords: {
      en: ["travel app", "social network", "dating", "events", "experiences"],
      ru: ["путешествия", "социальная сеть", "знакомства", "мероприятия", "впечатления"]
    },
    features: {
      en: [
        "Global travel discovery (hotels, events, venues)",
        "Social feed with Moments and private chats",
        "Business promotion and advertising tools",
        "Age-restricted Dating Zone with matching"
      ],
      ru: [
        "Поиск travel-локаций и мероприятий по всему миру",
        "Социальная лента Moments и личные чаты",
        "Инструменты продвижения для бизнеса",
        "Возрастная зона знакомств с матчингом"
      ]
    },
    architectureHighlights: {
      en: [
        "Modular social platform with scalable backend",
        "Media storage optimized for global content delivery",
        "Secure access control for age-restricted features"
      ],
      ru: [
        "Модульная архитектура с масштабируемым backend",
        "Оптимизированное хранение медиа-контента",
        "Безопасный контроль доступа для 18+ функций"
      ]
    },
    metaTitle: {
      en: "Xatee | Social Travel & Lifestyle App",
      ru: "Xatee | Социальное travel-приложение"
    },
    metaDescription: {
      en: "Explore the world, connect socially, promote businesses, and meet new people with Xatee — your all-in-one travel and lifestyle companion.",
      ru: "Путешествуйте, общайтесь, продвигайте бизнес и знакомьтесь с новыми людьми вместе с Xatee."
    }
  },
  {
    id: '1009',
    slug: "overwatch-social-streaming",
    url: "",
    image: "/assets/overwatch.png",
    title: {
      en: "OverWatch – Local Influencer Streaming",
      ru: "OverWatch — Локальный стриминг инфлюенсеров"
    },
    desc: {
      en: "OverWatch connects influencers and fans within local communities through live streaming. Influencers can go live instantly, share passions, and build communities, while fans discover nearby creators and interact in real time.",
      ru: "OverWatch соединяет инфлюенсеров и поклонников в локальных сообществах через прямые трансляции. Создатели делятся своим контентом, а пользователи находят стримы поблизости и взаимодействуют в реальном времени."
    },
    stacks: [
      "React Native Expo",
      "TypeScript",
      "WebRTC",
      "Firebase",
      "Node.js",
      "Socket.IO"
    ],
    keywords: {
      en: ["live streaming", "influencers", "social app", "local creators"],
      ru: ["стриминг", "инфлюенсеры", "социальная сеть", "локальный контент"]
    },
    features: {
      en: [
        "Live streaming with real-time chat",
        "Local influencer discovery",
        "Virtual gifts and creator support",
        "Audience interaction and community building"
      ],
      ru: [
        "Прямые трансляции с чатом в реальном времени",
        "Поиск локальных инфлюенсеров",
        "Виртуальные подарки и поддержка создателей",
        "Взаимодействие с аудиторией и комьюнити"
      ]
    },
    architectureHighlights: {
      en: [
        "Real-time communication using WebRTC and Socket.IO",
        "Expo-based rapid development and OTA updates",
        "Scalable backend for live interactions"
      ],
      ru: [
        "Связь в реальном времени через WebRTC и Socket.IO",
        "Быстрая разработка с Expo и OTA-обновлениями",
        "Масштабируемый backend для стриминга"
      ]
    },
    metaTitle: {
      en: "OverWatch | Local Live Streaming Platform",
      ru: "OverWatch | Платформа локальных стримов"
    },
    metaDescription: {
      en: "Discover local influencers, join live streams, and interact instantly with creators through OverWatch — a modern social streaming platform.",
      ru: "Находите локальных инфлюенсеров, подключайтесь к прямым трансляциям и общайтесь в реальном времени с OverWatch."
    }
  },
  {
    id: '1001',
    slug: "curated-community-london",
    url: "https://curated-community.com/",
    image: "/assets/currated.png",
    title: {
      en: "Curated Community London",
      ru: "Curated Community Лондон"
    },
    desc: {
      en: "A members-only social app designed to connect friendly people nearby — making it feel like an intimate yet massive friend group. Through the app, members can also connect with local clubs and communities, discover hangout spots, enjoy exclusive price discounts and promotions, join local events directly from the app, make donations to community causes, and more — all in one seamless social experience.",
      ru: "Социальное приложение для участников, предназначенное для связи дружелюбных людей поблизости — создавая ощущение интимной, но массивной группы друзей. Через приложение участники также могут связываться с местными клубами и сообществами, находить места для встреч, получать эксклюзивные скидки и акции, присоединяться к местным мероприятиям прямо из приложения, делать пожертвования на общественные цели и многое другое — всё в едином социальном опыте."
    },
    stacks: ["Node.js", "React Native", "Typescript", "NextJs", "MongoDB", "Mongoose", "Google Maps", "Zustand", "React Navigation", "Stripe"],
    keywords: {
      en: ["social app", "community", "friendship", "mobile app", "Hangout", "events"],
      ru: ["социальное приложение", "сообщество", "дружба", "мобильное приложение", "встречи", "мероприятия"]
    },
    features: {
      en: [
        "User matching based on location and interests",
        "Private messaging and friend suggestions",
        "Interactive map of nearby members"
      ],
      ru: [
        "Подбор пользователей по местоположению и интересам",
        "Личные сообщения и предложения друзей",
        "Интерактивная карта ближайших участников"
      ]
    },
    architectureHighlights: {
      en: [
        "Backend built with Node.js and MongoDB",
        "State management with Redux Toolkit",
        "Real-time location updates via Google Maps API"
      ],
      ru: [
        "Backend построен на Node.js и MongoDB",
        "Управление состоянием с Redux Toolkit",
        "Обновления местоположения в реальном времени через Google Maps API"
      ]
    },
    metaTitle: {
      en: "Curated Community London | for Social Impact Showcase",
      ru: "Curated Community Лондон | Витрина социального воздействия"
    },
    metaDescription: {
      en: "Through the app, members can also connect with local clubs and communities, discover hangout spots, enjoy exclusive price discounts and promotions, join local events directly from the app, make donations to community causes, and more — all in one seamless social experience. Explore how this project uses modern technologies to serve its target audience effectively.",
      ru: "Через приложение участники могут связываться с местными клубами и сообществами, находить места для встреч, получать эксклюзивные скидки и акции, присоединяться к местным мероприятиям прямо из приложения, делать пожертвования на общественные цели и многое другое — всё в едином социальном опыте. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
    }
  },
  {
    id: '1002',
    slug: "waterhub",
    url: "https://apps.apple.com/id/app/waterhub/id1491202942",
    image: "/assets/waterhub.png",
    title: {
      en: "WaterHub",
      ru: "WaterHub"
    },
    desc: {
      en: "Indonesia's first quota-based smart water refill station, accessible through a mobile app.",
      ru: "Первая в Индонезии умная станция пополнения воды на основе квот, доступная через мобильное приложение."
    },
    stacks: ["Dart", "Flutter", "Provider"],
    keywords: {
      en: ["sustainability", "water refill", "mobile app", "Indonesia"],
      ru: ["устойчивость", "пополнение воды", "мобильное приложение", "Индонезия"]
    },
    features: {
      en: [
        "Real-time water availability tracking",
        "User quota and refill history management",
        "Multi-platform app support (iOS and Android)"
      ],
      ru: [
        "Отслеживание доступности воды в реальном времени",
        "Управление квотами пользователей и историей пополнения",
        "Поддержка нескольких платформ (iOS и Android)"
      ]
    },
    architectureHighlights: {
      en: [
        "Flutter front-end with Provider state management",
        "Native modules for device-specific operations",
        "API integration for station management backend"
      ],
      ru: [
        "Frontend на Flutter с управлением состоянием Provider",
        "Нативные модули для специфических операций устройства",
        "Интеграция API для backend управления станциями"
      ]
    },
    metaTitle: {
      en: "WaterHub | Digital Solution Showcase",
      ru: "WaterHub | Витрина цифровых решений"
    },
    metaDescription: {
      en: "Indonesia's first quota-based smart water refill station, accessible through a mobile app. Explore how this project uses modern technologies to serve its target audience effectively.",
      ru: "Первая в Индонезии умная станция пополнения воды на основе квот, доступная через мобильное приложение. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
    }
  },
  {
    id: '1013',
    slug: "voltron",
    url: "https://voltron.id",
    image: "/assets/volton.webp",
    title: {
      en: "Voltron",
      ru: "Voltron"
    },
    desc: {
      en: "Indonesia's fastest-growing electric vehicle charging provider (SPKLU), with a mobile app for easy EV charging management.",
      ru: "Самый быстрорастущий провайдер зарядки электромобилей в Индонезии (SPKLU), с мобильным приложением для удобного управления зарядкой электромобилей."
    },
    stacks: [
      "TypeScript",
      "React Native",
      "Apollo GraphQL",
      "Zustand",
      "Native Modules (iOS/Android permissions, notifications, Bluetooth, geolocation)",
      "React Navigation",
      "E-wallet payment integration"
    ],
    keywords: {
      en: ["EV charging", "mobile app", "Indonesia", "smart mobility"],
      ru: ["зарядка электромобилей", "мобильное приложение", "Индонезия", "умная мобильность"]
    },
    features: {
      en: [
        "Find nearest EV charging stations quickly and easily",
        "Track and control charging sessions in real-time",
        "View charging history and receive notifications",
        "Seamless e-wallet payment integration",
        "Native permissions and device integration (Bluetooth, geolocation, notifications)"
      ],
      ru: [
        "Быстро и легко находите ближайшие станции зарядки электромобилей",
        "Отслеживайте и контролируйте сеансы зарядки в реальном времени",
        "Просматривайте историю зарядки и получайте уведомления",
        "Бесшовная интеграция с электронным кошельком",
        "Нативные разрешения и интеграция устройств (Bluetooth, геолокация, уведомления)"
      ]
    },
    architectureHighlights: {
      en: [
        "React Native front-end with Zustand state management",
        "Apollo GraphQL integration for backend communication",
        "Native modules for device-specific operations on iOS and Android",
        "React Navigation for multi-platform navigation"
      ],
      ru: [
        "Frontend на React Native с управлением состоянием Zustand",
        "Интеграция Apollo GraphQL для связи с backend",
        "Нативные модули для специфических операций на iOS и Android",
        "React Navigation для навигации на нескольких платформах"
      ]
    },
    metaTitle: {
      en: "Voltron | Digital Solution Showcase",
      ru: "Voltron | Витрина цифровых решений"
    },
    metaDescription: {
      en: "Voltron is Indonesia's leading EV charging provider with a mobile app that enables users to find, track, and pay for EV charging seamlessly. Built using React Native, Apollo GraphQL, Zustand, and native integrations for iOS and Android.",
      ru: "Voltron — ведущий провайдер зарядки электромобилей в Индонезии с мобильным приложением, которое позволяет пользователям находить, отслеживать и оплачивать зарядку электромобилей. Построено с использованием React Native, Apollo GraphQL, Zustand и нативных интеграций для iOS и Android."
    }
  },
  {
    id: '1010',
    slug: "turun-tangan",
    url: "https://turuntangan.id/",
    image: "/assets/turun-tangan.png",
    title: {
      en: "Turun Tangan",
      ru: "Turun Tangan"
    },
    desc: {
      en: "A national volunteer network focusing on social, humanitarian, and educational movements across Indonesia.",
      ru: "Национальная волонтерская сеть, ориентированная на социальные, гуманитарные и образовательные движения по всей Индонезии."
    },
    stacks: ["JavaScript", "React", "TailwindCSS", "Redux"],
    keywords: {
      en: ["nonprofit", "volunteering", "social movement", "Indonesia"],
      ru: ["некоммерческая организация", "волонтерство", "социальное движение", "Индонезия"]
    },
    features: {
      en: [
        "Volunteer registration and profile management",
        "Event management and participation tracking",
        "Donation integration"
      ],
      ru: [
        "Регистрация волонтеров и управление профилями",
        "Управление мероприятиями и отслеживание участия",
        "Интеграция пожертвований"
      ]
    },
    architectureHighlights: {
      en: [
        "Responsive web app with React and TailwindCSS",
        "Global state management with Redux",
        "CMS-like structure for event updates"
      ],
      ru: [
        "Адаптивное веб-приложение на React и TailwindCSS",
        "Глобальное управление состоянием с Redux",
        "CMS-подобная структура для обновления мероприятий"
      ]
    },
    metaTitle: {
      en: "Turun Tangan | for Social Impact Showcase",
      ru: "Turun Tangan | Витрина социального воздействия"
    },
    metaDescription: {
      en: "A national volunteer network focusing on social, humanitarian, and educational movements across Indonesia. Explore how this project uses modern technologies to serve its target audience effectively.",
      ru: "Национальная волонтерская сеть, ориентированная на социальные, гуманитарные и образовательные движения по всей Индонезии. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
    }
  },
  {
    id: '1011',
    slug: "belinsky-studio",
    url: "https://belinskyproduction.com/",
    image: "/assets/belinsky.png",
    title: {
      en: "Belinsky Studio",
      ru: "Студия Belinsky"
    },
    desc: {
      en: "A creative production house specializing in photography and filmmaking, delivering high-quality visual content.",
      ru: "Креативный продакшн-хаус, специализирующийся на фотографии и кинопроизводстве, создающий высококачественный визуальный контент."
    },
    stacks: ["JavaScript", "React", "TailwindCSS", "Content Layer"],
    keywords: {
      en: ["photography", "filmmaking", "studio", "creative production"],
      ru: ["фотография", "кинопроизводство", "студия", "креативный продакшн"]
    },
    features: {
      en: [
        "Portfolio showcase for photography and film",
        "Contact and booking forms",
        "Responsive grid layouts"
      ],
      ru: [
        "Витрина портфолио для фотографии и кино",
        "Формы контактов и бронирования",
        "Адаптивные сеточные макеты"
      ]
    },
    architectureHighlights: {
      en: [
        "Static site generation using Content Layer",
        "Responsive UI with TailwindCSS",
        "Optimized SEO and fast load time"
      ],
      ru: [
        "Генерация статического сайта с использованием Content Layer",
        "Адаптивный UI с TailwindCSS",
        "Оптимизированное SEO и быстрая загрузка"
      ]
    },
    metaTitle: {
      en: "Belinsky Studio | Digital Solution Showcase",
      ru: "Студия Belinsky | Витрина цифровых решений"
    },
    metaDescription: {
      en: "A creative production house specializing in photography and filmmaking, delivering high-quality visual content. Explore how this project uses modern technologies to serve its target audience effectively.",
      ru: "Креативный продакшн-хаус, специализирующийся на фотографии и кинопроизводстве, создающий высококачественный визуальный контент. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
    }
  },
  {
    id: '1004',
    slug: "webcamtoy",
    url: "https://test-verihubs-webcam.vercel.app/",
    image: "/assets/webcam-toy.png",
    title: {
      en: "WebcamToy",
      ru: "WebcamToy"
    },
    desc: {
      en: "A webcam app that lets users capture photos with filters and effects directly from their browser.",
      ru: "Веб-камера приложение, позволяющее пользователям делать фотографии с фильтрами и эффектами прямо из браузера."
    },
    stacks: ["TypeScript", "React", "TailwindCSS", "react-webcam"],
    keywords: {
      en: ["webcam", "photo app", "browser", "effects"],
      ru: ["веб-камера", "фото приложение", "браузер", "эффекты"]
    },
    features: {
      en: [
        "Live camera feed preview",
        "Photo capture with visual effects",
        "Download or share captured images"
      ],
      ru: [
        "Предварительный просмотр камеры в реальном времени",
        "Захват фото с визуальными эффектами",
        "Загрузка или публикация захваченных изображений"
      ]
    },
    architectureHighlights: {
      en: [
        "Webcam integration with react-webcam library",
        "Client-side image processing",
        "Lightweight, optimized for browser performance"
      ],
      ru: [
        "Интеграция веб-камеры с библиотекой react-webcam",
        "Обработка изображений на стороне клиента",
        "Легковесное, оптимизированное для производительности браузера"
      ]
    },
    metaTitle: {
      en: "WebcamToy | Digital Solution Showcase",
      ru: "WebcamToy | Витрина цифровых решений"
    },
    metaDescription: {
      en: "A webcam app that lets users capture photos with filters and effects directly from their browser. Explore how this project uses modern technologies to serve its target audience effectively.",
      ru: "Веб-камера приложение, позволяющее пользователям делать фотографии с фильтрами и эффектами прямо из браузера. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
    }
  },
  {
    id: '1005',
    slug: "walkies",
    url: "https://github.com/H8-FSJS-P3S6/gc01-palveeen22",
    image: "/assets/walkies.png",
    title: {
      en: "Walkies",
      ru: "Walkies"
    },
    desc: {
      en: "Walkies is a pet-care application that helps owners find trusted veterinarians, order pet food and supplies online, and book services such as dog walking or cat sitting with ease.",
      ru: "Walkies — это приложение по уходу за домашними животными, которое помогает владельцам находить проверенных ветеринаров, заказывать корм и товары для питомцев онлайн, а также бронировать услуги, такие как выгул собак или присмотр за кошками."
    },
    stacks: ["TypeScript", "React Native", "TailwindCSS", "MongoDB", "Apollo GraphQL", "Redis", "Expo"],
    keywords: {
      en: ["pet care app", "veterinary search", "pet food delivery", "dog walking", "cat sitting", "React Native"],
      ru: ["приложение для ухода за питомцами", "поиск ветеринара", "доставка корма для питомцев", "выгул собак", "присмотр за кошками", "React Native"]
    },
    features: {
      en: [
        "Search and connect with nearby veterinarians",
        "Order pet food and essential supplies online",
        "Book dog walking or cat sitting services",
        "Pet profile management and service history",
        "Real-time updates and notifications"
      ],
      ru: [
        "Поиск и связь с ближайшими ветеринарами",
        "Заказ корма для питомцев и необходимых товаров онлайн",
        "Бронирование услуг выгула собак или присмотра за кошками",
        "Управление профилем питомца и история услуг",
        "Обновления и уведомления в реальном времени"
      ]
    },
    architectureHighlights: {
      en: [
        "GraphQL APIs for optimized and structured data flow",
        "Cross-platform mobile development using React Native",
        "Redis caching layer for improved session performance"
      ],
      ru: [
        "GraphQL API для оптимизированного и структурированного потока данных",
        "Кроссплатформенная мобильная разработка с использованием React Native",
        "Слой кэширования Redis для улучшенной производительности сеансов"
      ]
    },
    metaTitle: {
      en: "Walkies | Pet Care, Vet Finder & Pet Services App",
      ru: "Walkies | Уход за питомцами, поиск ветеринара и услуги для животных"
    },
    metaDescription: {
      en: "Walkies is an all-in-one pet-care app that helps users find veterinarians, order pet food and supplies online, and book trusted dog walking or cat sitting services. Designed with modern technologies for a seamless pet-care experience.",
      ru: "Walkies — это универсальное приложение для ухода за питомцами, которое помогает пользователям находить ветеринаров, заказывать корм и товары для питомцев онлайн, а также бронировать надежные услуги выгула собак или присмотра за кошками. Разработано с использованием современных технологий для бесшовного опыта ухода за питомцами."
    }
  },
  // {
  //   id: "1012",
  //   slug: "fxx-app",
  //   url: "https://fxx-app.vercel.app/en",
  //   image: "/assets/fxx-cover.png",
  //   title: {
  //     en: "Fxx App",
  //     ru: "Fxx App"
  //   },
  //   desc: {
  //     en: "An MVP platform designed to help international students find rental apartments in Saint Petersburg.",
  //     ru: "MVP платформа, предназначенная для помощи иностранным студентам в поиске арендных квартир в Санкт-Петербурге."
  //   },
  //   stacks: ["Next.js", "TailwindCSS", "TypeScript", "i18next"],
  //   keywords: {
  //     en: ["student housing", "Saint Petersburg", "international students", "rental platform", "apartment search"],
  //     ru: ["студенческое жилье", "Санкт-Петербург", "иностранные студенты", "платформа аренды", "поиск квартир"]
  //   },
  //   features: {
  //     en: [
  //       "Apartment listings with key details (price, location, amenities)",
  //       "Multilingual support (English, Russian, Chinese)",
  //       "Favorites feature for saved apartments",
  //       "Responsive design for mobile and desktop",
  //       "Basic contact system for connecting with landlords or agents"
  //     ],
  //     ru: [
  //       "Объявления о квартирах с ключевыми деталями (цена, местоположение, удобства)",
  //       "Многоязычная поддержка (английский, русский, китайский)",
  //       "Функция и збранного для сохранения квартир",
  //       "Адаптивный дизайн для мобильных устройств и компьютеров",
  //       "Базовая система контактов для связи с арендодателями или агентами"
  //     ]
  //   },
  //   architectureHighlights: {
  //     en: [
  //       "Built with Next.js App Router and TypeScript for modern development standards",
  //       "i18next for multilingual support",
  //       "TailwindCSS for responsive and clean UI",
  //       "Static and server-rendered pages for performance",
  //       "Scalable layout ready for expansion to other cities"
  //     ],
  //     ru: [
  //       "Построено на Next.js App Router и TypeScript для современных стандартов разработки",
  //       "i18next для многоязычной поддержки",
  //       "TailwindCSS для адаптивного и чистого UI",
  //       "Статические и серверные страницы для производительности",
  //       "Масштабируемый макет, готовый к расширению на другие города"
  //     ]
  //   },
  //   metaTitle: {
  //     en: "Fxx App | for International Students Showcase",
  //     ru: "Fxx App | Витрина для иностранных студентов"
  //   },
  //   metaDescription: {
  //     en: "An MVP platform designed to help international students find rental apartments in Saint Petersburg. Explore how this project uses modern technologies to serve its target audience effectively.",
  //     ru: "MVP платформа, предназначенная для помощи иностранным студентам в поиске арендных квартир в Санкт-Петербурге. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
  //   }
  // },
  // {
  //   id: '1003',
  //   slug: "pintar-ai",
  //   url: "https://github.com/Prevferr/Pintar-Ai-Next-app",
  //   image: "/assets/open-ai.png",
  //   title: {
  //     en: "Pintar AI",
  //     ru: "Pintar AI"
  //   },
  //   desc: {
  //     en: "A web app integrating OpenAI to provide keyword-summarized research and smart project recommendations for investors.",
  //     ru: "Веб-приложение, интегрирующее OpenAI для предоставления исследований, суммированных по ключевым словам, и умных рекомендаций проектов для инвесторов."
  //   },
  //   stacks: ["TypeScript", "React", "Next.js", "TailwindCSS", "Zustand"],
  //   keywords: {
  //     en: ["AI", "OpenAI", "investment", "web app"],
  //     ru: ["ИИ", "OpenAI", "инвестиции", "веб-приложение"]
  //   },
  //   features: {
  //     en: [
  //       "Research keyword summarization",
  //       "Investor project matching",
  //       "OpenAI GPT-based recommendations"
  //     ],
  //     ru: [
  //       "Суммирование исследований по ключевым словам",
  //       "Подбор проектов для инвесторов",
  //       "Рекомендации на основе OpenAI GPT"
  //     ]
  //   },
  //   architectureHighlights: {
  //     en: [
  //       "Next.js server-side rendering for SEO optimization",
  //       "State management with Zustand",
  //       "OpenAI API integration with efficient caching"
  //     ],
  //     ru: [
  //       "Серверный рендеринг Next.js для оптимизации SEO",
  //       "Управление состоянием с Zustand",
  //       "Интеграция OpenAI API с эффективным кэшированием"
  //     ]
  //   },
  //   metaTitle: {
  //     en: "Pintar AI | Digital Solution Showcase",
  //     ru: "Pintar AI | Витрина цифровых решений"
  //   },
  //   metaDescription: {
  //     en: "A web app integrating OpenAI to provide keyword-summarized research and smart project recommendations for investors. Explore how this project uses modern technologies to serve its target audience effectively.",
  //     ru: "Веб-приложение, интегрирующее OpenAI для предоставления исследований, суммированных по ключевым словам, и умных рекомендаций проектов для инвесторов. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
  //   }
  // },

  // {
  //   id: '1007',
  //   slug: "pesanaja",
  //   url: "https://pesanaja-client-react.vercel.app/",
  //   image: "/assets/pesanaja.png",
  //   title: {
  //     en: "Pesanaja",
  //     ru: "Pesanaja"
  //   },
  //   desc: {
  //     en: "A grocery delivery platform with Google Maps integration and online payments using Xendit API.",
  //     ru: "Платформа доставки продуктов с интеграцией Google Maps и онлайн-платежами через Xendit API."
  //   },
  //   stacks: ["JavaScript", "React", "TailwindCSS", "Ant Design", "Redux", "Node.js"],
  //   keywords: {
  //     en: ["e-commerce", "grocery app", "delivery", "maps integration"],
  //     ru: ["электронная коммерция", "приложение продуктов", "доставка", "интеграция карт"]
  //   },
  //   features: {
  //     en: [
  //       "Product browsing and shopping cart",
  //       "Delivery address selection via Maps",
  //       "Secure online payment integration"
  //     ],
  //     ru: [
  //       "Просмотр продуктов и корзина покупок",
  //       "Выбор адреса доставки через карты",
  //       "Интеграция безопасных онлайн-платежей"
  //     ]
  //   },
  //   architectureHighlights: {
  //     en: [
  //       "Google Maps API integration",
  //       "Secure payment system via Xendit",
  //       "Responsive web design for mobile users"
  //     ],
  //     ru: [
  //       "Интеграция Google Maps API",
  //       "Безопасная платежная система через Xendit",
  //       "Адаптивный веб-дизайн для мобильных пользователей"
  //     ]
  //   },
  //   metaTitle: {
  //     en: "Pesanaja | Mobile & Web App Showcase",
  //     ru: "Pesanaja | Витрина мобильного и веб-приложения"
  //   },
  //   metaDescription: {
  //     en: "A grocery delivery platform with Google Maps integration and online payments using Xendit API. Explore how this project uses modern technologies to serve its target audience effectively.",
  //     ru: "Платформа доставки продуктов с интеграцией Google Maps и онлайн-платежами через Xendit API. Узнайте, как этот проект использует современные технологии для эффективного обслуживания целевой аудитории."
  //   }
  // }
  // {
  //   id: '1008',
  //   slug: "aliexpress-ru-clone",
  //   url: "https://github.com/palveeen22/next-js-fullstack-aliexpress-clone",
  //   image: "/assets/aliexpres-clone.png",
  //   title: "Aliexpress RU - Clone",
  //   desc: "A full-stack clone of AliExpress built with Next.js, optimized for performance, SEO, and security.",
  //   stacks: ["TypeScript", "Next.js", "TailwindCSS", "MongoDB", "Zustand"],
  //   keywords: ["e-commerce", "AliExpress", "Next.js", "clone project"],
  //   features: [
  //     "Product listing and search",
  //     "Shopping cart and order management",
  //     "User authentication and profiles"
  //   ],
  //   architectureHighlights: [
  //     "Next.js API routes for backend logic",
  //     "MongoDB database for product data",
  //     "Zustand for global state management"
  //   ],
  //   metaTitle: "Aliexpress RU - Clone | Clone Project Showcase",
  //   metaDescription: "A full-stack clone of AliExpress built with Next.js, optimized for performance, SEO, and security. Explore how this project uses modern technologies to serve its target audience effectively."
  // },
  // {
  //   id: '1009',
  //   slug: "instagram-clone-app",
  //   url: "https://github.com/H8-FSJS-P3S6/gc01-palveeen22",
  //   // image: "/images/projects/instagram-clone.jpg",
  //   title: "Instagram Clone App",
  //   desc: "A mobile-first project inspired by Instagram, developed with a focus on GraphQL and real-time features.",
  //   stacks: ["TypeScript", "React Native", "TailwindCSS", "MongoDB", "Apollo GraphQL", "Redis"],
  //   keywords: ["mobile app", "Instagram clone", "social media", "React Native"],
  //   features: [
  //     "Post creation and feeds",
  //     "Real-time chat and notifications",
  //     "Profile and following system"
  //   ],
  //   architectureHighlights: [
  //     "GraphQL APIs using Apollo",
  //     "Real-time updates with Redis pub/sub",
  //     "Scalable architecture for mobile platforms"
  //   ],
  //   metaTitle: "Instagram Clone App | Clone Project Showcase",
  //   metaDescription: "A mobile-first project inspired by Instagram, developed with a focus on GraphQL and real-time features. Explore how this project uses modern technologies to serve its target audience effectively."
  // },
  // {
  //   id: '1006',
  //   slug: "canvalon",
  //   url: "https://canva-contributor.vercel.app/",
  //   // image: "/images/projects/canvalon.jpg",
  //   title: "Canvalon",
  //   desc: "A collaborative whiteboard web app using Socket.IO for real-time multi-user drawing sessions.",
  //   stacks: ["TypeScript", "ReactJS", "TailwindCSS", "Redux", "Node.js", "Socket.IO"],
  //   keywords: ["whiteboard", "real-time", "Socket.IO", "collaboration"],
  //   features: [
  //     "Multi-user real-time drawing",
  //     "Session-based room joining",
  //     "Live cursor sharing"
  //   ],
  //   architectureHighlights: [
  //     "Real-time communication with WebSockets",
  //     "Node.js backend server",
  //     "Redux for session and user state management"
  //   ],
  //   metaTitle: "Canvalon | Mobile & Web App Showcase",
  //   metaDescription: "A collaborative whiteboard web app using Socket.IO for real-time multi-user drawing sessions. Explore how this project uses modern technologies to serve its target audience effectively."
  // },
];