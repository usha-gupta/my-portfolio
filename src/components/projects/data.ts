import { Project } from "./project.model";
import PaisaVasoolImg from "../../assets/images/ss-paisa-vasool.png";
import UMoveImg from "../../assets/images/ss-umove.jpg";
import SmartQueuingSystemImg from "../../assets/images/ss-sqs.png";
import PeopleCounterImg from "../../assets/images/ss-people-counter.png";
import StatusDownloaderImg from "../../assets/images/ss-status-downloader.jpg";
import InstaDPImg from "../../assets/images/ss-insta-dp.jpg";
import RedBasketImg from "../../assets/images/ss-red-basket.jpg";
import FuelTradesImg from "../../assets/images/ss-fuel-trades.jpg";

const projects: Project[] = [
  {
    name: "Paisa Vasool",
    description:
      "It's a expense management and tracker app which also let you split the expenses among your friends and groups.",
    image: PaisaVasoolImg,
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
  {
    name: "U-Move: Bike Rental App",
    description:
      "A Bike Rental Project with Angular 8 Admin portal, Ionic 4 App for android & iOS with spring boot for backend.",
    image: UMoveImg,
    accomplishments: [
      "Built on micro-service architecture.",
      "Backend on Spring Boot and RabbitMQ for communcation between each micro-service.",
      "Used Angular 8 for Front-end.",
      "Setup CI/CD using Jenkins & Circle CI.",
      "Used TDD approach and event storming",
    ],
    githubLink: "https://github.com/the-vis-sharma/UMove",
    websiteLink: "https://www.youtube.com/watch?v=wEHTTPIlUCom",
    skills: [
      "Angular",
      "Material Design",
      "Spring Boot",
      "Microservices",
      "AWS",
      "RabbitMQ",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    name: "Smart Queuing System",
    description:
      "This is used to detect the people in queue to smartly manage the queue at various places in our day to day life.",
    image: SmartQueuingSystemImg,
    accomplishments: [
      "This project is build as part of my Intel AI Edge for IoT developer Nenodegree from Udacity",
      "Tested on CPU, IGPU, VPU & FPGA on Intel DevCloud",
      "Optimized and measure model performance using Intel OpenVino Toolkit",
    ],
    githubLink: "https://github.com/the-vis-sharma/Smart-Queuing-System",
    websiteLink: "https://www.youtube.com/watch?v=-tVJ1eeIWNg",
    skills: [
      "Python",
      "Computer Vision",
      "Machine Learning",
      "Intel Dev Cloud",
      "AI at Edge",
      "Intel OpenVino Toolkit",
    ],
  },
  {
    name: "People Counter App",
    description:
      "The app will detect people in a designated area, providing the number of people in the frame, the average duration of people spend and total count.",
    image: PeopleCounterImg,
    accomplishments: [
      "Used Intel OpenVino Toolkit to build this app.",
      "Implemented with Tensorflow SSD MobileNet COCO V2 object detection model.",
      "Build frontend using React.Js",
      "Data is send over MQTT server to UI.",
    ],
    githubLink: "https://github.com/the-vis-sharma/people-counter-app",
    websiteLink: "https://www.youtube.com/watch?v=TIaPByaEIUs",
    skills: [
      "Python",
      "Computer Vision",
      "Machine Learning",
      "Intel Dev Cloud",
      "AI at Edge",
      "Intel OpenVino Toolkit",
    ],
  },
  {
    name: "Status Downloader for WhatsApp",
    description:
      "This is a android application to download and share WhatsApp status into your.",
    image: StatusDownloaderImg,
    accomplishments: [
      "Native android application using Java",
      "Used File System lib to develop the status download feature.",
      "One can see downloaded status in app itself.",
      "Used android default media player lib to play videos in app.",
    ],
    githubLink: "",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.techbuddy.statusdownloader",
    skills: ["Java", "Android", "Material Design"],
  },
  {
    name: "DP & Videos Downloader",
    description:
      "View & Download Instagram Profile Picture & Videos in full & HD Resolution and Zoom Picture with The DP & Videos Downloader app.",
    image: InstaDPImg,
    accomplishments: [
      "Used web scrapping to download the HD Display Picture and Videos from Instagram using JSOUP lib.",
      "Built for Android using Java",
      "Used Glide lib for image caching.",
    ],
    githubLink: "",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.techbuddy.instadp",
    skills: ["Java", "Android", "Material Design", "JSOUP"],
  },
  {
    name: "Red Basket - Groceries Shopping App",
    description: "This is a clone of Big Basket App.",
    image: RedBasketImg,
    accomplishments: [
      "Built application on Android using Java.",
      "Usede PHP and MySQL for Backend.",
      "It has home page, product list, search, adding addresses & payment method and completed order flow.",
      "Used Material Deisgn guidelines.",
    ],
    githubLink:
      "https://github.com/the-vis-sharma/Red-Basket-Online-Shopping-App",
    websiteLink: "",
    skills: ["Java", "Android", "Material Design", "PHP", "MySQL"],
  },
  {
    name: "Fuel Trades",
    description:
      "Web app that helps Boston teens find the nearest available short-term housing.",
    image: FuelTradesImg,
    accomplishments: [
      "Manage your fuel Cards.",
      "Calculate driving cost for your trips easily.",
      "Get the toll fare between cities.",
      "Get current fuel prices of all major cities.",
    ],
    githubLink: "https://github.com/the-vis-sharma/Fuel-Trades",
    websiteLink: "",
    skills: [
      "Java",
      "Android",
      "Material Design",
      "Toll & Fuel API",
      "Google Map SDK",
    ],
  },
];

export default projects;
