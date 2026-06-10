#!/usr/bin/env node
// One-shot image optimization script.
// Generates 4 widths (400, 800, 1280, 1920) in JPG (q=75) and WebP (q=75)
// for each source defined in SOURCES. Uses sharp.

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assets = path.resolve(__dirname, "../src/assets");

const SOURCES = [
  { src: "hero-team.jpg", stem: "hero-team" },
  { src: "about-hero.jpg", stem: "about-hero" },
];

const WIDTHS = [400, 800, 1280, 1920];

for (const { src, stem } of SOURCES) {
  const input = path.join(assets, src);
  for (const w of WIDTHS) {
    const jpgOut = path.join(assets, `${stem}-${w}.jpg`);
    const webpOut = path.join(assets, `${stem}-${w}.webp`);
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 75, mozjpeg: true })
      .toFile(jpgOut);
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(webpOut);
    console.log(`  built ${stem}-${w}.jpg + .webp`);
  }
}

console.log("done.");
