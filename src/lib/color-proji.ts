// Generate dynamic color for stack based on its name
// This ensures every stack gets a consistent color even if not pre-defined
export const getStackColor = (stack: string): string => {
  // Pre-defined colors for common technologies
  const commonStacks: Record<string, string> = {
    "TypeScript": "bg-blue-500",
    "JavaScript": "bg-yellow-500",
    "React": "bg-blue-400",
    "React Native": "bg-cyan-500",
    "Next.js": "bg-black",
    "Angular": "bg-red-600",
    "Vue.js": "bg-emerald-500",
    "Node.js": "bg-green-600",
    "Express": "bg-gray-600",
    "TailwindCSS": "bg-teal-500",
    "Bootstrap": "bg-purple-600",
    "MongoDB": "bg-green-500",
    "Mongoose": "bg-green-600",
    "PostgreSQL": "bg-blue-600",
    "MySQL": "bg-blue-800",
    "Firebase": "bg-yellow-600",
    "Supabase": "bg-emerald-600",
    "GraphQL": "bg-pink-600",
    "Apollo GraphQL": "bg-purple-500",
    "Redux": "bg-purple-400",
    "Zustand": "bg-indigo-400",
    "Redis": "bg-red-500",
    "Docker": "bg-blue-600",
    "AWS": "bg-yellow-700",
    "Stripe": "bg-indigo-500",
    "Chart.js": "bg-pink-500",
    "D3.js": "bg-orange-600",
    "CSS Modules": "bg-teal-600",
    "SASS": "bg-pink-400",
    "Prisma": "bg-indigo-600",
    "CSS": "bg-teal-600",
    "Responsive Design": "bg-cyan-500",
    "Web Development": "bg-gray-600",
    "Mobile": "bg-blue-600",
  };

  // If stack is in our common list, return its color
  if (commonStacks[stack]) {
    return commonStacks[stack];
  }

  // Otherwise generate a color based on the stack name
  // This creates a deterministic color based on the string
  const hash = stack.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Use the hash to pick from a few tailwind color options
  const colorOptions = [
    "bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-cyan-500",
    "bg-emerald-500", "bg-violet-500", "bg-fuchsia-500", "bg-rose-500"
  ];

  const colorIndex = Math.abs(hash) % colorOptions.length;
  return colorOptions[colorIndex];
};