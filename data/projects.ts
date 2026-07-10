import bristol800 from "@/images/optimized/bristol-800.webp";
import bristol1280 from "@/images/optimized/bristol-1280.webp";
import bristol1920 from "@/images/optimized/bristol-1920.webp";
import cardiff800 from "@/images/optimized/cardiff-800.webp";
import cardiff1280 from "@/images/optimized/cardiff-1280.webp";
import cardiff1920 from "@/images/optimized/cardiff-1920.webp";
import patra800 from "@/images/optimized/patra-800.webp";
import patra1280 from "@/images/optimized/patra-1280.webp";
import patra1920 from "@/images/optimized/patra-1920.webp";
import castlePatrasVideo from "@/videos/optimized/castle-patras.mp4";
import doxaLakeVideo from "@/videos/optimized/doxa-lake.mp4";
import lighthouseDrepanoVideo from "@/videos/optimized/lighthouse-drepano.mp4";
import ygin6302Video from "@/videos/optimized/ygin6302.mp4";

const defaultVideoPoster =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80";

export type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageSrcSet: string;
  location: string;
};

export type PortfolioVideo = {
  number: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  location: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Bristol",
    description: "Εναέρια λήψη της ακτογραμμής με καθαρή σύνθεση, βάθος και κινηματογραφική αίσθηση.",
    image: bristol1920,
    imageSrcSet: `${bristol800} 800w, ${bristol1280} 1280w, ${bristol1920} 1920w`,
    location: "Bristol"
  },
  {
    number: "02",
    title: "Cardiff",
    description: "Πανοραμική πτήση πάνω από το τοπίο, με έμφαση στη γραμμή του ορίζοντα και την κίνηση του νερού.",
    image: cardiff1920,
    imageSrcSet: `${cardiff800} 800w, ${cardiff1280} 1280w, ${cardiff1920} 1920w`,
    location: "Cardiff"
  },
  {
    number: "03",
    title: "Patra",
    description: "Αστικό και παραθαλάσσιο κάδρο από ψηλά, ιδανικό για portfolio, προβολή και social περιεχόμενο.",
    image: patra1920,
    imageSrcSet: `${patra800} 800w, ${patra1280} 1280w, ${patra1920} 1920w`,
    location: "Patra"
  }
];

export const videos: PortfolioVideo[] = [
  {
    number: "01",
    title: "Castle Patras",
    description: "Κάθετη εναέρια λήψη με κινηματογραφική κίνηση πάνω από το κάστρο και την πόλη.",
    src: castlePatrasVideo,
    poster: defaultVideoPoster,
    location: "Patra"
  },
  {
    number: "02",
    title: "Doxa Lake",
    description: "Ήρεμη πτήση πάνω από τη λίμνη, με φυσικό βάθος και καθαρή ατμόσφαιρα.",
    src: doxaLakeVideo,
    poster: defaultVideoPoster,
    location: "Doxa Lake"
  },
  {
    number: "03",
    title: "Aerial Motion",
    description: "Δυναμική κάθετη λήψη από drone, ιδανική για γρήγορο portfolio και social preview.",
    src: ygin6302Video,
    poster: defaultVideoPoster,
    location: "Aerial"
  },
  {
    number: "04",
    title: "Lighthouse Drepano",
    description: "Κινηματογραφική προσέγγιση στον φάρο και τη θάλασσα με καθαρή γραμμή ορίζοντα.",
    src: lighthouseDrepanoVideo,
    poster: defaultVideoPoster,
    location: "Drepano"
  }
];

export const services = [
  "Drone φωτογραφία",
  "Cinematic βίντεο",
  "Real estate λήψεις",
  "Τουριστική προβολή",
  "Social media content"
];

export const safetyItems = [
  "Έλεγχος περιοχής πριν την πτήση",
  "Σεβασμός στην ιδιωτικότητα",
  "Αποφυγή πτήσεων πάνω από πλήθος",
  "Υπεύθυνη χρήση drone"
];
