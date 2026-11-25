/* zyro.games — game catalogue.
 *
 * Edit this list to add a game or update store links; both the home page and
 * each game's page (game.html?id=<id>) rebuild from it automatically.
 *
 *   id        → used in the game's URL: game.html?id=<id>
 *   tile/ink  → background colour of the game's tile, and the text colour on it
 *   links     → App Store / Google Play / web URLs (null = "Coming soon")
 *   featured  → shown large at the top of the games grid
 */

const GAMES = [
  {
    id: "mind-grid",
    title: "MIND GRID",
    tagline: "Logic, carved in light.",
    genre: "Puzzle",
    featured: true,
    description:
      "A premium 3D logic puzzle on a floating isometric grid. Push blocks, ride conveyors, outsmart sentinels — every level solver-verified, plus daily and endless modes.",
    features: [
      ["Push, ride, outsmart", "Push blocks, ride conveyors and slip past sentinels on a floating isometric grid."],
      ["Solver-verified", "Every level is checked by a solver, so every puzzle has a real solution."],
      ["Daily challenges", "A fresh puzzle every day."],
      ["Endless mode", "Keep going for as long as your logic holds."],
    ],
    icon: "assets/games/mind-grid.svg",
    tile: "#6e56cf",
    ink: "#ffffff",
    tags: ["Puzzle", "Logic", "Daily challenges"],
    links: { ios: null, android: null, web: null },
  },
  {
    id: "60-seconds-ahead",
    title: "60 Seconds Ahead",
    tagline: "Bend time. Beat the clock.",
    genre: "Puzzle",
    description:
      "A 3D time-manipulation puzzle game. Rewind, fast-forward and out-think the clock across handcrafted levels where every second is a move you haven't made yet.",
    features: [
      ["Control time", "Rewind and fast-forward to solve each level."],
      ["Handcrafted levels", "Puzzles built by hand around the clock."],
      ["Think ahead", "Every second is a move you haven't made yet."],
    ],
    icon: "assets/games/60seconds.svg",
    tile: "#0e9aa7",
    ink: "#ffffff",
    tags: ["Puzzle", "3D", "Time manipulation"],
    links: { ios: null, android: null, web: null },
  },
  {
    id: "dog-dash",
    title: "Dog Dash",
    tagline: "Run fast. Fetch faster.",
    genre: "Runner",
    description:
      "A 3D endless runner starring a very good dog. Dodge trains, leap obstacles and chase bones, coins and treats through a colorful cartoon city.",
    features: [
      ["Endless runs", "Race through a bright cartoon city for as long as you can last."],
      ["Dodge and leap", "Swerve around trains and jump over obstacles."],
      ["Fetch everything", "Chase bones, coins and treats along the way."],
    ],
    icon: "assets/games/dog-dash.png",
    tile: "#f5c443",
    ink: "#111111",
    tags: ["Runner", "3D", "Arcade"],
    links: { ios: null, android: null, web: null },
  },
  {
    id: "magnet-master",
    title: "Magnet Master",
    tagline: "Attract. Collect. Conquer.",
    genre: "Action",
    description:
      "Wield an industrial magnet in a sprawling scrapyard. Pull in metal, feed the recycler, upgrade your machine — and don't let the rival steal your haul.",
    features: [
      ["Pull in scrap", "Sweep a sprawling scrapyard with an industrial magnet."],
      ["Feed the recycler", "Turn metal into upgrades for your machine."],
      ["Beat the rival", "Don't let a rival steal your haul."],
    ],
    icon: "assets/games/magnet-master.png",
    tile: "#e5484d",
    ink: "#ffffff",
    tags: ["Action", "3D", "Upgrades"],
    links: { ios: null, android: null, web: null },
  },
  {
    id: "deeper",
    title: "DEEPER",
    tagline: "How far down can you go?",
    genre: "Adventure",
    description:
      "A procedurally generated mining adventure. Drill through shifting biomes, unearth rare minerals and ancient relics, and chase the Heart of the Deep.",
    features: [
      ["New every dig", "A procedurally generated world with shifting biomes."],
      ["Rare finds", "Unearth rare minerals and ancient relics."],
      ["A goal at the bottom", "Chase the Heart of the Deep."],
    ],
    icon: "assets/games/deeper.png",
    tile: "#ef8b3c",
    ink: "#111111",
    tags: ["Adventure", "Mining", "Exploration"],
    links: { ios: null, android: null, web: null },
  },
];
