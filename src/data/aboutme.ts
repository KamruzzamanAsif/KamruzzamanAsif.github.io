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
  researchGateUrl?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kamruzzaman Asif",
  title: "M.Sc. in Software Engineering",
  institution: "University of Dhaka",

  // Note that links work in the description
  description:
    "I am a <a href='http://www.iit.du.ac.bd'>Software Engineering graduate</a> from the University of Dhaka. My research focuses on <strong>AI for Software Engineering (AI4SE)</strong>, with a particular emphasis on <strong>black-box test-suite minimization (TSM)</strong> to enhance efficiency and reliability in software testing. I have interned at <a href='https://selisegroup.com/'>SELISE Digital Platforms</a>, gaining practical experience in data engineering and AI-driven solutions. My technical skills include Python, PySpark, SQL, and a range of libraries and frameworks.",
  email: "bsse1217@iit.du.ac.bd",
  imageUrl:
    "/asif.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=mlOl6IwAAAAJ&hl=en&oi=ao",
  githubUsername: "KamruzzamanAsif",
  kaggleUsername: "kamruzzamanasif",
  linkedinUsername: "kamruzzaman-asif",
  // twitterUsername: "asif_kx",
  researchGateUrl: "https://www.researchgate.net/profile/Kamruzzaman-Asif-2",
  // blogUrl: "https://",
  cvUrl: "https://docs.google.com/document/d/1fvSPTh5JFH_wP_WX6aZ10rE4erb373Ppx3sTsROD-d4/edit?usp=sharing",
  institutionUrl: "http://www.iit.du.ac.bd",
  // altName: "",
  // secretDescription: "I like dogs.",
};
