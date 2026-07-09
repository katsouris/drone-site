export type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  location: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Κεφαλονιά",
    description: "Απόκρημνες ακτές, τιρκουάζ νερά και αργές κινήσεις κάμερας πάνω από το Ιόνιο.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    location: "Ιόνιο"
  },
  {
    number: "02",
    title: "Μύρτος",
    description: "Κάθετες λήψεις, φυσική γεωμετρία και καθαρό φως πάνω από μία εμβληματική παραλία.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85",
    location: "Κεφαλονιά"
  },
  {
    number: "03",
    title: "Ζάκυνθος",
    description: "Κινηματογραφική ανάγνωση του βράχου, της θάλασσας και της κίνησης από ψηλά.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=85",
    location: "Ιόνιο"
  },
  {
    number: "04",
    title: "Ηλιοβασίλεμα στη θάλασσα",
    description: "Χαμηλές πτήσεις, χρυσό φως και ατμόσφαιρα για ταξιδιωτικό και social περιεχόμενο.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
    location: "Αιγαίο"
  },
  {
    number: "05",
    title: "Ορεινά τοπία",
    description: "Μεγάλες κλίμακες, υφές βουνού και ορίζοντες που αναδεικνύουν τη μορφολογία της Ελλάδας.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85",
    location: "Ηπειρωτική Ελλάδα"
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
