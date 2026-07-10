import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(rootDirectory, "images", "optimized");

const sizes = [800, 1280, 1920];
const images = ["homepage", "bristol", "cardiff", "patra"];

await Promise.all(
  images.flatMap((imageName) => {
    const sourceFile = path.join(rootDirectory, "images", `${imageName}.JPG`);

    return sizes.map((width) =>
      sharp(sourceFile)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(outputDirectory, `${imageName}-${width}.webp`))
    );
  })
);

console.log(`Optimized ${images.length} images into ${outputDirectory}`);
