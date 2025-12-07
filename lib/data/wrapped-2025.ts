export const WRAPPED_DATA = {
  hero: {
    title: "2025 Wrapped",
    subtitle: "A year of building, sharing, and shipping.",
    badge: "2025 EDITION",
  },
  metrics: {
    commits: {
      id: "commits",
      value: 536,
      label: "Commits to shadcn/ui",
      description: "That's a lot of code pushed to main.",
    },
    contributors: {
      id: "contributors",
      value: 1240,
      label: "New Contributors",
      description: "Welcome to the family! We love PRs.",
    },
    registries: {
      id: "registries",
      value: 102,
      label: "New Registries",
      description: "Thanks for building this for us! 🎉",
    },
    stars: {
      id: "stars",
      value: 101381,
      label: "GitHub Stars",
      description: "Community love you!",
      isMilestone: true,
    },
    newComponents: {
      id: "newComponents",
      value: 8,
      label: "New Components",
      description: "More tools for your toolbox.",
    },
    newBlocks: {
      id: "newBlocks",
      value: 64,
      label: "New Blocks",
      description: "Copy, paste, and ship faster.",
    },
    forks: {
      id: "forks",
      value: 1222,
      label: "Forks in 2025",
      description: "Go ahead, make it yours.",
    },
    pullRequests: {
      id: "pullRequests",
      value: 1171,
      label: "Pull Requests",
      description: "Collaboration at its finest.",
    },
    topContributor: {
      id: "topContributor",
      name: "Jacksonmills",
      handle: "@Jacksonmills",
      link: "https://github.com/Jacksonmills",
      avatar: "https://avatars.githubusercontent.com/u/19780885?v=4", // Placeholder
      label: "Top Contributor",
      description:
        "The most commits to shadcn/ui. Except for shadcn, of course.",
    },

    mostActiveMonth: {
      month: "October",
      count: 119,
      label: "Most Active Month",
      description: "October was on fire 🔥",
    },
  },
  footer: {
    text: "Here's to another year of shipping.",
    cta: "Star on GitHub",
    link: "https://github.com/shadcn/ui",
  },
} as const;
