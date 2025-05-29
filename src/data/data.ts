import img1 from "@/assets/images/gam1.png"


export const SelfInfo = {
    title: 'Hey I’m Alvin 🕺🏻',
    description: "I'm a Software Engineer with expertise in Frontend and Mobile App Development. Passionate about user experience, infrastructure as code and cloud solutions. Driven to make quality code which is clean, well tested, and maintainable. Committed to constant learning and skill enhancement in new technologies and programming languages."
}

export const projectsData = [
    {
        image: img1,
        url: "",
        title: "Hello Word",
        description: "test test test",
        stacks: ["react", "typescript", "nextjs", "tailwindcss", "mdx-bundler", "content-layer", "shadcn-ui"]

    },
    {
        image: img1,
        url: "",
        title: "Hello Word",
        description: "test test test",
        stacks: ["react", "typescript", "nextjs", "tailwindcss", "mdx-bundler", "content-layer", "shadcn-ui"]

    },
]


export const blogPosts = [
    {
        id: '2',
        title: 'Stop Using 100vh for Full-Height Layouts on Mobile: Here’s Why',
        content: `If you're using \`100vh\` for full-height layouts in your CSS, you might be unknowingly creating layout issues — especially on mobile devices.

### 🚫 The Problem:
\`100vh\` measures the viewport height *without accounting for dynamic browser UI elements*, such as the mobile address or navigation bars. This means your layout may look fine on desktop but:
- Content gets cut off on mobile
- Unwanted scrollbars appear
- Elements don't align correctly

### ✅ The Modern Fix: \`100dvh\`
Instead of hardcoding \`height: 100vh;\`, use:

\`\`\`css
height: 100dvh;
\`\`\`

The new \`dvh\` unit (Dynamic Viewport Height) adapts to visible screen size, **even when browser UI changes** — like when the address bar hides on scroll.

### 🧠 TL;DR
- **Before:** \`height: 100vh;\` → breaks layouts on mobile
- **Now:** \`height: 100dvh;\` → mobile-safe and reliable

It’s a tiny change with a big impact that saves hours of layout debugging.`,
        excerpt: 'Still using 100vh in CSS? Discover why 100dvh is the better choice for mobile-friendly full-height layouts.',
        createdAt: new Date('2025-05-01'),
        author: 'Alvin Pratama',
        readingTime: '1 min read',
        coverImage: '/assets/mob.jpeg',
        tags: ['CSS', 'Mobile', 'Responsive Design', 'Web Development'],
        metaTitle: 'Stop Using 100vh on Mobile | Fix Your CSS Layouts with 100dvh',
        metaDescription: 'Learn why 100vh breaks mobile layouts and how 100dvh provides a reliable, modern fix for full-height CSS sections. A must-read for responsive design.',
        slug: 'still-using-100vh-in-CSS',
        contentSort: `You might be unintentionally breaking your mobile layouts. Why? ❌ 100vh doesn't account for dynamic browser UI (like the address bar), especially on mobile. So even though it looks like full height, part of your content might get cut off or cause awkward scroll behavior. The fix? ✅ Use 100dvh instead. It dynamically adapts to the actual visible screen height — even when the browser UI changes. It's a one-line change that can save you hours of layout debugging. /* Problematic on mobile / height: 100vh; / Mobile-friendly */ height: 100dvh; Small detail. Big impact.`,
    }
];