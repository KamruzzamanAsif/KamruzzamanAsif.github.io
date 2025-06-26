export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  kaggleUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kamruzzaman Asif",
  title: "Software Engineering Graduate",
  institution: "University of Dhaka",

  // Note that links work in the description
  description:
    "I'm a <a href='http://www.iit.du.ac.bd'>Software Engineering graduate</a> from the University of Dhaka. My research focuses on machine learning, deep learning, and generative AI, specifically addressing reverse engineering of webassembly. I have interned at <a href='https://selisegroup.com/'>SELISE Digital Platforms</a>, gaining hands-on experience in data engineering and machine learning solutions. My technical skills include Python, PySpark, SQL, and various libraries and frameworks.",
  email: "bsse1217@iit.du.ac.bd",
  imageUrl:
    "/asif.jpg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "KamruzzamanAsif",
  kaggleUsername: "kamruzzamanasif",
  linkedinUsername: "kamruzzaman-asif",
  twitterUsername: "asif_kx",
  // blogUrl: "https://",
  cvUrl: "https://docs.google.com/document/d/1fvSPTh5JFH_wP_WX6aZ10rE4erb373Ppx3sTsROD-d4/edit?usp=sharing",
  institutionUrl: "http://www.iit.du.ac.bd",
  // altName: "",
  // secretDescription: "I like dogs.",
};
