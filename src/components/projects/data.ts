import { Project } from "./project.model";
import PaisaVasoolImg from "../../assets/images/ss-paisa-vasool.png";
import PaisaVasoolWebp from "../../assets/images/ss-paisa-vasool.webp";

const projects: Project[] = [
  {
    name: "Paisa Vasool",
    description:
      "It's a expense management and tracker app which also let you split the expenses among your friends and groups.",
    image: PaisaVasoolImg,
    imageWebp: PaisaVasoolWebp,
    accomplishments: [
      "Using firebase for backend",
      "Angular 9 frontend",
      "Using Angular Material for UI Components",
      "Firebase Cloud store & firebase hosting",
      "Current the app is in BETA and in-progress",
    ],
    githubLink: "https://github.com/the-vis-sharma/paisa-vasool",
    websiteLink: "https://paisa-vasool-beta.web.app/",
    skills: [
      "Angular",
      "Material Design",
      "Firebase Hosting",
      "Firestore",
      "OAuth2",
    ],
  },
];

export default projects;
