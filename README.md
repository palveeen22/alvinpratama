# Portfolio - Alvin Pratama

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom components with Tailwind CSS
- **Code Quality**:
  - ESLint for linting
  - TypeScript for type safety
  - Prettier (if configured)

## 📁 Project Structure

This project follows **Feature-Sliced Design (FSD)** architecture for better scalability and maintainability.
```
├── app/                         # Next.js App Router
│   ├── [locale]/                # Internationalized routes
│   │   ├── (home)/              # Home page group
│   │   │   └── page.tsx         # / route
│   │   ├── about/               # About page
│   │   │   └── page.tsx
│   │   ├── blogs/               # Blog pages
│   │   │   ├── page.tsx         # Blog list
│   │   │   └── [slug]/          # Blog detail
│   │   │       └── page.tsx
│   │   ├── projects/            # Projects pages
│   │   │   ├── page.tsx         # Projects list
│   │   │   └── [slug]/          # Project detail
│   │   │       └── page.tsx
│   │   └── layout.tsx           # Locale layout
│   ├── layout.tsx               # Root layout
│   └── not-found.tsx            # Not found page
│
├── src/                         # Main source code (FSD layers)
│   ├── pages/                   # Page compositions (FSD Pages layer)
│   │   ├── home/
│   │   ├── about/
│   │   ├── blog/
│   │   └── projects/
│   │
│   ├── widgets/                 # Large self-contained blocks (FSD Widgets layer)
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── ProjectCard/
│   │
│   ├── features/                # User interactions & features (FSD Features layer)
│   │   ├── ToogleThemeMode/ 
│   │   └── ToggleLanguages/
│   │
│   │
│   └── shared/                  # Reusable utilities (FSD Shared layer)
│       ├── ui/                  # UI components
│       ├── lib/                 # Utilities & helpers
│       └── types/               # Shared TypeScript types
│
├── public/                      # Static assets
│   └── assets/
│
├── messages/                    # i18n translation files
│   ├── en.json
│   └── ru.json
│
├── i18n.ts                      # next-intl configuration (if in root)
├── middleware.ts                # Next.js middleware (i18n routing)
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

### FSD Architecture Layers

1. **app/** - App initialization, providers, and entry point
2. **pages/** - Page compositions that combine widgets and features
3. **widgets/** - Large, independent UI blocks (Header, Footer, etc.)
4. **features/** - User interactions and business features
5. **entities/** - Business domain models and their UI representations
6. **shared/** - Reusable code, UI kit, utilities, and helpers

For more details about FSD, see [Feature-Sliced Design Documentation](https://feature-sliced.design/)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/palveeen22/alvinpratama.git
cd alvinpratama
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The app will automatically redirect to your default locale (`/en` or `/ru`).

### Build for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

### Type Checking

Check TypeScript types:
```bash
npx tsc --noEmit
```

## 🌍 Internationalization

This project supports multiple languages using `next-intl`:

- English (`en`) - Default
- Russian (`ru`)

To add a new language:

1. Create a new translation file in `messages/` directory (e.g., `messages/id.json`)
2. Add the locale to `src/shared/config/i18n.ts` or `src/shared/lib/i18n.ts`
3. Update the middleware in `middleware.ts`

## 🎨 Styling

This project uses Tailwind CSS for styling. Configuration can be found in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and Tailwind directives

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Path Aliases

TypeScript path aliases are configured in `tsconfig.json`:
```json
{
  "paths": {
    "@/*": ["./src/*"],
    "@/app/*": ["./app/*"],
    "@/pages/*": ["./src/pages/*"],
    "@/widgets/*": ["./src/widgets/*"],
    "@/features/*": ["./src/features/*"],
    "@/entities/*": ["./src/entities/*"],
    "@/shared/*": ["./src/shared/*"]
  }
}
```

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Alvin Pratama**