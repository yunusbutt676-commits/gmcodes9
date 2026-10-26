import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ghulam Mustafa | Full Stack Engineer | GmCodes9",
    short_name: "GmCodes9",
    description:
      "Portfolio of Ghulam Mustafa, Full Stack Engineer specializing in Next.js, React, Node.js, Python, Laravel, AI/ML integrations, and modern web applications.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    lang: "en",
    dir: "ltr",
    categories: ["technology", "business"],
  };
}