export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "ENASE",
    title: "Temporal Modeling of Change History for Black-Box Test Suite Minimization",
    authors: "Kamruzzaman Asif, Md. Siam, Kazi Sakib",
    paperUrl: "https://doi.org/10.5220/0015051900004015",
    codeUrl: "https://doi.org/10.5281/zenodo.19506050",
    // bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Prioritize recent code changes for smarter test suite minimization and higher fault detection efficiency.",
    imageUrl:
      "/images/TRTM_ENASE-Page-1.drawio.png",
    award: "🏅 Nominated for Best Student Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "Preprint",
    title: "BanglaFake: Constructing and Evaluating a Specialized Bengali Deepfake Audio Dataset",
    authors: "Istiaq Ahmed Fahad, Kamruzzaman Asif, Sifat Sikder",
    paperUrl: "https://arxiv.org/abs/2505.10885",
    codeUrl: "https://github.com/KamruzzamanAsif/BanglaFake",
    // bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Large-scale Bengali deepfake audio dataset providing a crucial benchmark for deepfake detection and audio forensics in low-resource languages.",
    imageUrl:
      "/images/banglafake_methodology.png",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
