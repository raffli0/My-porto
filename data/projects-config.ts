export const statusConfig = {
  live: { label: "Live", text: "text-green-500" },
  wip: { label: "WIP", text: "text-yellow-500" },
  archived: { label: "Archived", text: "text-zinc-400" },
} as const;

export const tagColors: Record<string, string> = {
  "Next.js": "border-white/15 text-white/70",
  "Vite": "border-purple-400/30 text-purple-400",
  "Laravel": "border-red-500/30 text-red-400",
  "Flutter": "border-sky-500/30 text-sky-400",
  "TypeScript": "border-blue-500/30 text-blue-400",
  JavaScript: "border-yellow-400/30 text-yellow-400",
  "Python": "border-blue-400/30 text-blue-400",
  "Dart": "border-sky-400/30 text-sky-400",
  Bash: "border-zinc-400/30 text-zinc-400",
  "MySQL": "border-orange-500/30 text-orange-400",
  "Firebase": "border-red-400/30 text-red-400",
  "Tailwind CSS": "border-sky-400/30 text-sky-400",
  "Bootstrap": "border-indigo-400/30 text-indigo-400",
  HTML: "border-orange-400/30 text-orange-400",
  MQTT: "border-purple-400/30 text-purple-400",
  ESP32: "border-red-400/30 text-red-400",
  "Arduino": "border-green-400/30 text-green-400",
};

export const categoryConfig: Record<string, { bg: string; text: string; border: string }> = {
  "Website": {
    bg: "bg-blue-500/10 hover:bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  "Internet of Things": {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  "Mikrokontroler": {
    bg: "bg-fuchsia-500/10 hover:bg-fuchsia-500/15",
    text: "text-fuchsia-400",
    border: "border-fuchsia-500/20",
  },
  "Mobile App": {
    bg: "bg-rose-500/10 hover:bg-rose-500/15",
    text: "text-rose-400",
    border: "border-rose-500/20",
  },
  "Security Tools": {
    bg: "bg-yellow-500/10 hover:bg-yellow-500/15",
    text: "text-yellow-400",
    border: "border-yellow-500/20",
  },
};

export const placeholderGradients: Record<string, string> = {
  "perpus-digital": "from-red-950/60 via-zinc-900 to-zinc-900",
  porto: "from-emerald-950/60 via-zinc-900 to-zinc-900",
  "sistem-pakar": "from-blue-950/60 via-zinc-900 to-zinc-900",
  IoT: "from-orange-950/60 via-zinc-900 to-zinc-900",
};
