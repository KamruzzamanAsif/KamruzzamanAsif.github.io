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
  title: "Software Engineering Undergrad",
  institution: "University of Dhaka",

  // Note that links work in the description
  description:
    "I'm a final-year <a href='http://www.iit.du.ac.bd'>software engineering undergrad</a> at University of Dhaka. My research focuses on machine learning, deep learning, and generative AI, specifically addressing web memory leaks in Single-Page Applications. I have interned at <a href='https://selisegroup.com/'>SELISE Digital Platforms</a>, gaining experience in data engineering and machine learning solutions. My technical skills include Python, PySpark, SQL, and various libraries and frameworks. I have achieved recognition in competitions like <b>BUET DL Sprint 3.0</b> and <b>ASR for Regional Dialects, Bengali.AI x IUT</b>.",
  email: "bsse1217@iit.du.ac.bd",
  imageUrl:
    "/asif.jpg",
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "KamruzzamanAsif",
  kaggleUsername: "kamruzzamanasif",
  linkedinUsername: "kamruzzaman-asif",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  cvUrl: "https://docs.google.com/document/d/e/2PACX-1vRVDtYJhCjpVUWSBWEetBH9vtYjmIaCv8-JbKT0uxi8Brhf5lo0_kB7N1FiP-ih7YZ0oVAk1yw62uQ4/pub",
  institutionUrl: "http://www.iit.du.ac.bd",
  // altName: "",
  // secretDescription: "I like dogs.",
};
