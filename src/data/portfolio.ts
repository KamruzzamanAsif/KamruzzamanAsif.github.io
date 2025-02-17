export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "LeakNix",
    description:
      "Designed and developed a tool to detect and fix web memory leaks in Single-Page Applications (SPAs). Utilized Puppeteer Web Driver to simulate real user interactions and analyze browser heap memory profiles. Implemented automated leak detection and generated detailed reports with proposed fixes.",
    technologies: ["React", "Node.js", "Python", "Puppeteer Web Driver"],
    //projectUrl: "https://github.com/KamruzzamanAsif/LeakNix",
    // imageUrl: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vYmlsZSUyMGRldmVsb3BlcnxlbnwwfHx8fDE2NTgzMjEyNzA&ixlib=rb-1.2.1&q=80&w=1080",
    codeUrl: "https://github.com/KamruzzamanAsif/LeakNix",
  },
  {
    title: "Sikhbe Sobai (EmPower)",
    description:
      "Built an interactive desktop application to help autistic children learn basic academics. Incorporated OpenCV to enable visual feedback and user interaction tracking. Focused on a research-based user-friendly design to ensure accessibility for educators and children.",
    technologies: ["PyQT5", "Python", "OpenCV"],
    // projectUrl: "https://sikhbe-sobai-demo.com",
    // imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDExfHxhdXRpc20lMjBjaGlsZHJlbnxlbnwwfHx8fDE2NTgzMTkzNzg&ixlib=rb-1.2.1&q=80&w=1080",
    codeUrl: "https://github.com/KamruzzamanAsif/SPL-2",
  },
  {
    title: "Wumpus World",
    description:
      "Developed a game featuring self-observing AI agents navigating the Wumpus World. Implemented AI algorithms for agent behavior, including pathfinding and decision-making. Designed the game interface with React and deployed it using Vite and Netlify for a seamless user experience.",
    technologies: ["React", "Vite", "Netlify"],
    projectUrl: "https://wumpus-world-ai.netlify.app/",
    // imageUrl: "https://images.unsplash.com/photo-1573164574399-4c1b87f04d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdhbWV8ZW58MHx8fHwxNjU4MzIxMjc0&ixlib=rb-1.2.1&q=80&w=1080",
    codeUrl: "https://github.com/KamruzzamanAsif/Wumpus-World",
  },
  {
    title: "Mini LinkedIn",
    description:
      "Created a distributed social media application inspired by LinkedIn. Used Docker and MinIO for scalable, distributed storage and deployment. Integrated MongoDB for managing user profiles, posts, and social connections.",
    technologies: ["JavaScript", "Docker", "MongoDB", "MinIO"],
    // projectUrl: "https://mini-linkedin-demo.com",
    // imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxpbmtlZEl8ZW58MHx8fHwxNjU4MzIxMzAx&ixlib=rb-1.2.1&q=80&w=1080",
    codeUrl: "https://github.com/KamruzzamanAsif/Distributed-Systems",
  },
  {
    title: "Static Code Analyzer (SCA)",
    description:
      "Built a tool to analyze C source code without execution, detecting code clones and calculating software metrics like LOC and Halstead Complexity. Enabled developers to identify code inefficiencies and syntactic code clones effectively. Enhanced maintainability by providing detailed insights into code structure and quality.",
    technologies: ["Java"],
    // projectUrl: "https://sca-demo.com",
    // imageUrl: "https://images.unsplash.com/photo-1581091215367-1c6c6d6d8877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fENvZGUlMjBhbmFseXNpc3xlbnwwfHx8fDE2NTgzMjEzMjE&ixlib=rb-1.2.1&q=80&w=1080",
    codeUrl: "https://github.com/KamruzzamanAsif/SPL-1",
  },
  {
    title: "Minesweeper",
    description:
      "Developed a classic logic puzzle game with an interactive graphical interface using JavaFX. Implemented gameplay mechanics like mine placement, safe zone calculation, and user score tracking. Focused on optimizing user experience with intuitive controls and responsive design.",
    technologies: ["Java", "JavaFX"],
    // projectUrl: "https://minesweeper-demo.com",
    // imageUrl: "https://images.unsplash.com/photo-1521579908664-2c3cb6bfc1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fEdhbWV8ZW58MHx8fHwxNjU4MzIxMzYw&ixlib=rb-1.2.1&q=80&w=1080",
    codeUrl: "https://github.com/KamruzzamanAsif/Project_Minesweeper",
  },
];

