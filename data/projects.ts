import bristol800 from "@/images/optimized/bristol-800.webp";
import bristol1280 from "@/images/optimized/bristol-1280.webp";
import bristol1920 from "@/images/optimized/bristol-1920.webp";
import cardiff800 from "@/images/optimized/cardiff-800.webp";
import cardiff1280 from "@/images/optimized/cardiff-1280.webp";
import cardiff1920 from "@/images/optimized/cardiff-1920.webp";
import patra800 from "@/images/optimized/patra-800.webp";
import patra1280 from "@/images/optimized/patra-1280.webp";
import patra1920 from "@/images/optimized/patra-1920.webp";
import bristolCastleVideo from "@/videos/optimized/bristol-castle.mp4";
import castlePatrasVideo from "@/videos/optimized/castle-patras.mp4";
import doxaLakeVideo from "@/videos/optimized/doxa-lake.mp4";
import lighthouseDrepanoVideo from "@/videos/optimized/lighthouse-drepano.mp4";
import lighthousePatrasVideo from "@/videos/optimized/lighthouse-patras.mp4";
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
    title: "Μπρίστολ",
    description: "Η ακτογραμμή γίνεται σκηνή. Φως, νερό και κίνηση δένουν σε μια ήρεμη εναέρια αφήγηση.",
    image: bristol1920,
    imageSrcSet: `${bristol800} 800w, ${bristol1280} 1280w, ${bristol1920} 1920w`,
    location: "Μπρίστολ"
  },
  {
    number: "02",
    title: "Κάρντιφ",
    description: "Μια πανοραμική ματιά στον ορίζοντα, εκεί όπου η πόλη, το νερό και η διαδρομή βρίσκουν ρυθμό.",
    image: cardiff1920,
    imageSrcSet: `${cardiff800} 800w, ${cardiff1280} 1280w, ${cardiff1920} 1920w`,
    location: "Κάρντιφ"
  },
  {
    number: "03",
    title: "Πάτρα",
    description: "Η πόλη και η θάλασσα σε ένα κάδρο που κρατά την αίσθηση του ταξιδιού και της επιστροφής.",
    image: patra1920,
    imageSrcSet: `${patra800} 800w, ${patra1280} 1280w, ${patra1920} 1920w`,
    location: "Πάτρα"
  }
];

export const videos: PortfolioVideo[] = [
  {
    number: "01",
    title: "Κάστρο Πάτρας",
    description: "Μια πτήση πάνω από το κάστρο και την πόλη, σαν εισαγωγή σε μια ιστορία με μνήμη και φως.",
    src: castlePatrasVideo,
    poster: defaultVideoPoster,
    location: "Πάτρα"
  },
  {
    number: "02",
    title: "Λίμνη Δόξα",
    description: "Η λίμνη από ψηλά γίνεται παύση. Ήρεμη κίνηση, φυσικό βάθος και ατμόσφαιρα που μένει.",
    src: doxaLakeVideo,
    poster: defaultVideoPoster,
    location: "Λίμνη Δόξα"
  },
  {
    number: "03",
    title: "Γιανισκάρι",
    description: "Μια κάθετη λήψη με ενέργεια, φτιαγμένη για στιγμές που χρειάζονται ένταση χωρίς περιττά λόγια.",
    src: ygin6302Video,
    poster: defaultVideoPoster,
    location: "Γιανισκάρι"
  },
  {
    number: "04",
    title: "Φάρος Δρεπάνου",
    description: "Ο φάρος, η θάλασσα και ο ορίζοντας γίνονται μια καθαρή εικόνα προσανατολισμού και ηρεμίας.",
    src: lighthouseDrepanoVideo,
    poster: defaultVideoPoster,
    location: "Δρέπανο"
  },
  {
    number: "05",
    title: "Κάστρο Μπρίστολ",
    description: "Μια περιήγηση γύρω από το κάστρο, με την αρχιτεκτονική και το τοπίο να μιλούν μαζί.",
    src: bristolCastleVideo,
    poster: defaultVideoPoster,
    location: "Μπρίστολ"
  },
  {
    number: "06",
    title: "Φάρος Πάτρας",
    description: "Ο φάρος της Πάτρας μέσα σε μια απλή, φωτεινή διαδρομή με φόντο θάλασσα και ακτογραμμή.",
    src: lighthousePatrasVideo,
    poster: defaultVideoPoster,
    location: "Πάτρα"
  }
];

export const services = [
  "Προσωπικές εναέριες ιστορίες",
  "Cinematic βίντεο μικρής διάρκειας",
  "Τοπία, ταξίδια και διαδρομές",
  "Events και ξεχωριστές στιγμές",
  "Περιεχόμενο για web και social"
];

export const safetyItems = [
  "Έλεγχος του χώρου πριν από κάθε πτήση",
  "Σεβασμός στην ιδιωτικότητα και στη στιγμή",
  "Καθαρό πλάνο χωρίς ρίσκο για τους ανθρώπους",
  "Υπεύθυνη χρήση drone με ήρεμη προσέγγιση"
];
