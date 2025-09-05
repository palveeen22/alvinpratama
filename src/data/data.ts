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
    },
    {
        id: '3',
        title: 'Survival 101: Practical Tips to Stay Alive in Any Situation',
        content: `Life is unpredictable, and while we can’t control every situation, we *can* prepare ourselves with knowledge and mindset that may one day save our lives.

### 🥤 1. Water First
Your body can only survive about **3 days without water**. In an emergency:
- Always identify clean water sources.
- If unsure, boil or filter water before drinking.
- Avoid seawater — it dehydrates faster.

### 🍞 2. Food for Energy
You can survive **3 weeks without food**, but energy levels drop quickly.
- Focus on calorie-rich foods: nuts, dried fruits, grains.
- Learn local edible plants if outdoors.
- Avoid unknown berries or mushrooms.

### 🧭 3. Shelter and Warmth
Exposure can kill faster than hunger.
- Prioritize building shelter from wind, rain, or sun.
- Layer clothing to trap body heat.
- Fire = warmth, water purification, and morale.

### 📱 4. Communication and Signals
- Always carry a whistle, flashlight, or phone power bank.
- SOS (· · · – – – · · ·) is internationally recognized.
- Reflective surfaces (mirrors, metal) can signal far away.

### 🧠 5. Mindset is Everything
Panic is the biggest enemy.
- Breathe deeply, slow your heart rate.
- Break big problems into small tasks.
- Stay positive — many survival stories come down to mental strength.

### 🧠 TL;DR
- **Water first** (3 days rule)
- **Food second** (3 weeks rule)
- **Shelter** protects from exposure
- **Signal** to get rescued
- **Mindset** keeps you alive

Preparation and knowledge are your best survival tools.`,
        excerpt: 'Learn the 5 essential survival rules to stay alive in any emergency: water, food, shelter, signals, and mindset.',
        createdAt: new Date('2025-05-05'),
        author: 'Alvin Pratama',
        readingTime: '3 min read',
        coverImage: '/assets/yeas.png',
        tags: ['Survival', 'Emergency', 'Self-Help', 'Life Skills'],
        metaTitle: 'Survival 101 | How to Stay Alive in Any Situation',
        metaDescription: 'Discover practical survival tips: water, food, shelter, signaling, and mindset. A quick guide to staying alive when life gets unpredictable.',
        slug: 'survival-101-stay-alive',
        contentSort: `The basics of survival follow the "rule of threes": 3 minutes without air, 3 days without water, 3 weeks without food. 🥤 Water is the top priority — find, boil, or filter. 🍞 Food gives energy, but shelter matters more in harsh environments. 🧭 Shelter prevents exposure, and fire is multipurpose. 📱 Signal for help whenever possible. 🧠 Most importantly, mindset keeps you focused and alive. Stay calm, break problems into tasks, and never give up.`,
    },
    {
        id: '4',
        title: 'Deadline Survival: How to Finish Work at the Last Minute (and Still Look Smart)',
        content: `Deadlines are like horror movies: you always think you’re safe until the monster shows up at midnight.  
But don’t panic — here’s your funny-yet-effective guide to surviving deadlines like a pro.

### ⏰ 1. Procrastinate Strategically
Let’s be real — you’re going to procrastinate anyway. The trick is *controlled procrastination*.  
- Do small easy tasks first (so you feel productive).  
- Pretend you’re “researching” while actually scrolling memes.  
- When panic hits, your brain magically unlocks *superhuman focus mode*.  

### ☕ 2. Coffee = Cheat Code
Caffeine is basically a productivity potion.  
- 1 cup = “I’ll start soon.”  
- 2 cups = “I’m in the zone.”  
- 3 cups = “I can see through time.”  

### 🎵 3. The Right Music
Forget chill playlists. Deadlines require *battle mode*.  
- Movie soundtracks → feel like a hero.  
- EDM → type like a hacker.  
- Random Lo-Fi → at least you’ll cry in rhythm.  

### 📋 4. The 80/20 Rule
Remember: 80% of the results come from 20% of the effort.  
Translation: Write the important parts first, and fill the fluff later.  
Professors, bosses, and clients usually won’t notice… unless your fluff is just “lorem ipsum.”  

### 🛏️ 5. Accept Imperfection
Perfectionists miss deadlines. Survivors submit “good enough” and fix later.  
At 11:59 PM, ugly but done > beautiful but late.  

### 🧠 TL;DR
- Procrastinate (but make it look intentional)  
- Fuel yourself with coffee and music  
- Do the 20% that matters  
- Hit send before midnight  

Finishing before the deadline isn’t about being perfect.  
It’s about looking calm while panicking internally — like a true professional.`,
        excerpt: 'Deadlines coming? Learn the funny art of finishing work at the last minute without losing your mind.',
        createdAt: new Date('2025-05-06'),
        author: 'Alvin Pratama',
        readingTime: '2 min read',
        coverImage: '/assets/dead.jpg',
        tags: ['Productivity', 'Humor', 'Work', 'Deadlines'],
        metaTitle: 'Deadline Survival | How to Finish Work Before the Deadline',
        metaDescription: 'A funny yet practical guide to beating deadlines: procrastinate smartly, drink coffee, blast music, and submit just in time.',
        slug: 'deadline-survival-guide',
        contentSort: `Deadlines feel impossible until you realize panic mode = focus mode. ⏰ Step 1: procrastinate strategically. ☕ Step 2: drink coffee until your soul vibrates. 🎵 Step 3: play music that makes you feel like a genius. 📋 Step 4: focus on the 20% that matters. 🛏️ Step 5: submit ugly but done work. Done > perfect. Deadlines fear confidence.`,
    }
]