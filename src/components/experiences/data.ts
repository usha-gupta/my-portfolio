import { Company } from "./company.model";
import CognizantLogo from "../../assets/images/cognizant.png";
import LWLogo from "../../assets/images/lw.png";
import DotSquaresLogo from "../../assets/images/dot-squares.png";
import FreshworksLogo from "../../assets/images/freshworks.svg";

import CognizantLogoWebp from "../../assets/images/cognizant.webp";
import LWLogoWebp from "../../assets/images/lw.webp";
import DotSquaresLogoWebp from "../../assets/images/dot-squares.webp";

const companies: Company[] = [
  {
    logo: FreshworksLogo,
    logoWeb: "",
    name: "Freshworks",
    position: "Software Engineer",
    location: "Bangalore, IN",
    description:
      "Freshworks is a leading provider of modern SaaS solutions that solve multiple, complex business problems to companies of all sizes.",
    accomplishments: [
      "Working as a Full Stack Developer on the famous and growing product Freshdesk",
      "Design, Developed and delivered Deep LInk feature",
      "Redesigned timeline activities UI and synced with FreshChat and FreshCaller for Contact and Tickets",
    ],
    duration: "Feb 2022 - Present",
  },
  {
    logo: CognizantLogo,
    logoWeb: CognizantLogoWebp,
    name: "Cognizant",
    position: "Full Stack Developer",
    location: "Bangalore, IN",
    description:
      "Cognizant is an American multinational information technology services and consulting company.",
    accomplishments: [
      "Build project from scratch using Angular and Spring Boot and delivered successfully to client with almost no defects handling thousand of users.",
      "Created Test Completion Report Automation project using Angular, Java and Python to generate well formatted TCR reports for different projects within a minutes using Apache POI Lib",
      "Solved business critical problems for clients using latest technologies.",
    ],
    duration: "Oct 2019 - Feb 2022",
  },
  {
    logo: LWLogo,
    logoWeb: LWLogoWebp,
    name: "LinuxWorld Informatics Pvt. Ltd.",
    position: "Internship Trainee",
    location: "Jaipur, IN",
    description:
      "Linux World India is a leading name among the training institutes of India. The institute is active in the field of training from several years and has produced a number of professionals.",
    accomplishments: [
      "Done Industry 4.0 training by building Smarter World project.",
      "Worked on AI, ML/DL with IoT using realtime data processing with Spark, BigData - Hadoop Framework running app on Kubernetes Clusters.",
    ],
    duration: "May 2019 - Jun 2019",
  },
  {
    logo: DotSquaresLogo,
    logoWeb: DotSquaresLogoWebp,
    name: "Dotsquares",
    position: "Salesforce Intern",
    location: "Jaipur, IN",
    description:
      "Dotsquares is an award winning offshore website design, mobile apps development and digital outsourcing agency based in East Sussex. Upscale your Bandwidth!",
    accomplishments: [
      "Worked on Force.com platform to build Recruiting App using HTML, CSS, DataLoader, Java etc.",
      "It reduced the paper work for both candidates and recruiters",
    ],
    duration: "May 2018 - Jul 2018",
  },
];

export default companies;
