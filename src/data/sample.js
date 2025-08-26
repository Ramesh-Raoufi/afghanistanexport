// IMPORTANT: In production (e.g. Vercel) paths like "/src/assets/.." do NOT work.
// Import assets so Vite fingerprints & serves them correctly.
import saffronImg from "../assets/product-saffron.svg";
import dryFruitsImg from "../assets/product-dryfruits.svg";
import carpetsImg from "../assets/product-carpets.svg";
// small change  ,,,
export const products = [
  {
    id: "saffron",
    name: "Saffron",
    category: "Agriculture",
    description: "High-quality Afghan saffron, hand-harvested and sun-dried.",
    certifications: ["ISO 3632"],
    packaging: ["1g tin", "10g box", "100g bulk"],
    capacity: "50 tons/year",
    destinations: ["Iran", "UAE", "Germany"],
    image: saffronImg,
  },
  {
    id: "dry-fruits",
    name: "Dry Fruits & Nuts",
    category: "Agriculture",
    description: "Almonds, pistachios, walnuts and more.",
    certifications: [],
    packaging: ["500g", "1kg", "bulk bags"],
    capacity: "2000 tons/year",
    destinations: ["India", "Pakistan", "Russia"],
    image: dryFruitsImg,
  },
  {
    id: "carpets",
    name: "Handmade Carpets",
    category: "Handicrafts",
    description: "Hand-knotted Afghan rugs with traditional patterns.",
    certifications: [],
    packaging: ["rolled"],
    capacity: "10,000 units/year",
    destinations: ["USA", "Turkey", "UK"],
    image: carpetsImg,
  },
];

export const exporters = [
  {
    id: "exporter-1",
    name: "Kabul Saffron Co",
    location: "Kabul",
    products: ["saffron"],
    contact: { email: "info@kabulsaffron.example", phone: "+93-700-000000" },
    verified: true,
    license: "EXP-2024-001",
  },
  {
    id: "exporter-2",
    name: "Herat Dry Goods",
    location: "Herat",
    products: ["dry-fruits"],
    contact: { email: "contact@heratdry.example" },
    verified: false,
    license: null,
  },
];

export const news = [
  {
    id: "n1",
    title: "Saffron prices rise in 2024",
    date: "2024-10-01",
    summary: "Global demand increases.",
    category: "Market",
    tags: ["saffron", "pricing", "demand"],
    image: null,
  },
  {
    id: "n2",
    title: "New trade agreement signed",
    date: "2025-01-15",
    summary: "Bilateral trade terms updated.",
    category: "Policy",
    tags: ["agreement", "trade"],
    image: null,
  },
  {
    id: "n3",
    title: "Cold chain infrastructure expansion announced",
    date: "2025-03-02",
    summary:
      "New facilities aim to reduce post-harvest losses for fruit exports.",
    category: "Logistics",
    tags: ["infrastructure", "cold-chain", "fruits"],
    image: null,
  },
  {
    id: "n4",
    title: "International carpet fair highlights Afghan artisans",
    date: "2025-04-11",
    summary: "Handmade rugs gain visibility among European buyers.",
    category: "Events",
    tags: ["carpets", "fair", "artisans"],
    image: null,
  },
];
