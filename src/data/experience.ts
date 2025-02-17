export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jan 2024 - Jan 2025",
    title: "Intern Software Engineer",
    company: "SELISE Digital Platforms",
    description:
      "Data and Backend Engineering with Microsoft Fabric, PySpark, Python, SQL Server, ETL Processing, Power BI. Machine Learning Solutions using Python, PySpark, Microsoft Fabric, MLflow.",
    companyUrl: "https://selise.ch",
  },
  {
    date: "Oct 2023 - Jan 2024",
    title: "ICT & Database Management Associate",
    company: "Student Promotion & Support Unit, University of Dhaka",
    description:
      "Database Maintenance and Team support.",
    companyUrl: "http://www.du.ac.bd",
  },
  {
    date: "Feb 2023 - Apr 2023",
    title: "Industry Research and Data Analyst Associate",
    company: "Bangladesh Computer Council (BCC) EDGE Project",
    description:
      "Industry Research, Audit and Inspections, Stakeholder Engagement.",
    companyUrl: "http://bcc.gov.bd",
  },
  {
    date: "May 2023 - Sep 2023",
    title: "ERP Systems Analyst Associate",
    company: "Chittagong University ERP Project",
    description:
      "ERP solutions, Task Automation, Inter-university Collaboration.",
    companyUrl: "https://cu.ac.bd",
  },
];

