import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegStaticPath from "ffmpeg-static";

const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = path.join(rootDirectory, "videos");
const outputDirectory = path.join(rootDirectory, "videos", "optimized");
const ffmpegPath = await getFfmpegPath();

await fs.mkdir(outputDirectory, { recursive: true });

const videos = await getSourceVideos();

for (const video of videos) {
  await optimizeVideo(video.source, video.output);
}

console.log(`Optimized ${videos.length} videos into ${outputDirectory}`);

async function getSourceVideos() {
  const entries = await fs.readdir(sourceDirectory, { withFileTypes: true });
  const sourceExtensions = new Set([".mov", ".mp4", ".m4v"]);

  return entries
    .filter((entry) => entry.isFile())
    .filter((entry) => sourceExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => {
      const name = path.basename(entry.name, path.extname(entry.name));
      const slug = toSlug(name);

      return {
        source: path.join(sourceDirectory, entry.name),
        output: path.join(outputDirectory, `${slug}.mp4`)
      };
    });
}

function toSlug(value) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function optimizeVideo(source, output) {
  const args = [
    "-y",
    "-i",
    source,
    "-vf",
    "scale='min(720,iw)':-2,fps=30",
    "-an",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "28",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    output
  ];

  return new Promise((resolve, reject) => {
    const process = spawn(ffmpegPath, args, { stdio: "inherit" });

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });
}

async function getFfmpegPath() {
  const packageDirectory = path.join(rootDirectory, "node_modules", "ffmpeg-static");
  const candidates = [
    ffmpegStaticPath,
    path.join(packageDirectory, "ffmpeg.exe"),
    path.join(packageDirectory, "ffmpeg")
  ];

  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // Try the next package-provided binary path.
    }
  }

  throw new Error("Could not find an ffmpeg binary from ffmpeg-static.");
}
