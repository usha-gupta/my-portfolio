import { SkillCategory } from "./skill-category.model";
import AngularLogo from "../../assets/images/angular.png";
import HTML5Logo from "../../assets/images/html5.png";
import CSS3Logo from "../../assets/images/css3.png";
import MaterialDesignLogo from "../../assets/images/material-design.png";
import JSLogo from "../../assets/images/javascript.png";
import SpringBootLogo from "../../assets/images/spring-boot.png";
import SpringLogo from "../../assets/images/spring.png";
import AndroidLogo from "../../assets/images/android.png";
import MySqlLogo from "../../assets/images/mysql.png";
import RedisLogo from "../../assets/images/redis.png";
import GCPLogo from "../../assets/images/google-cloud.png";
import AzureLogo from "../../assets/images/azure.png";
import FirebaseLogo from "../../assets/images/firebase.png";
import DockerLogo from "../../assets/images/docker.png";
import JavaLogo from "../../assets/images/java.png";
import GitHubLogo from "../../assets/images/github.png";
import KibanaLogo from "../../assets/images/kibana.png";
import JUnitLogo from "../../assets/images/junit.png";
import MockitoLogo from "../../assets/images/mokito.png";
import TSLogo from "../../assets/images/typescript.png";
import AngularLogoWebp from "../../assets/images/angular.webp";
import HTML5LogoWebp from "../../assets/images/html5.webp";
import CSS3LogoWebp from "../../assets/images/css3.webp";
import MaterialDesignLogoWebp from "../../assets/images/material-design.webp";
import JSLogoWebp from "../../assets/images/javascript.webp";
import SpringBootLogoWebp from "../../assets/images/spring-boot.webp";
import SpringLogoWebp from "../../assets/images/spring.webp";
import AndroidLogoWebp from "../../assets/images/android.webp";
import MySqlLogoWebp from "../../assets/images/mysql.webp";
import RedisLogoWebp from "../../assets/images/redis.webp";
import GCPLogoWebp from "../../assets/images/google-cloud.webp";
import AzureLogoWebp from "../../assets/images/azure.webp";
import FirebaseLogoWebp from "../../assets/images/firebase.webp";
import DockerLogoWebp from "../../assets/images/docker.webp";
import JavaLogoWebp from "../../assets/images/java.webp";
import GitHubLogoWebp from "../../assets/images/github.webp";
import KibanaLogoWebp from "../../assets/images/kibana.webp";
import JUnitLogoWebp from "../../assets/images/junit.webp";
import MockitoLogoWebp from "../../assets/images/mokito.webp";
import TSLogoWebp from "../../assets/images/typescript.webp";
import EmberJSLogo from "../../assets/images/emberjs.svg";
import RubyLogo from "../../assets/images/ruby.png";
import RubyLogoWebp from "../../assets/images/ruby.webp";
import RailsLogo from "../../assets/images/rails.png";
import RailsLogoWebp from "../../assets/images/rails.webp";
import BoostrapLogo from "../../assets/images/bootstrap.png";
import BootstrapLogoWebp from "../../assets/images/bootstrap.webp";
import SassLogo from "../../assets/images/sass.png";
import SassLogoWebp from "../../assets/images/sass.webp";

const skills: SkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      {
        name: "Ember JS",
        logo: EmberJSLogo,
        logoWebp: "",
      },
      {
        name: "Angular 9",
        logo: AngularLogo,
        logoWebp: AngularLogoWebp,
      },
      {
        name: "HTML5",
        logo: HTML5Logo,
        logoWebp: HTML5LogoWebp,
      },
      {
        name: "CSS3",
        logo: CSS3Logo,
        logoWebp: CSS3LogoWebp,
      },
      {
        name: "SASS",
        logo: SassLogo,
        logoWebp: SassLogoWebp,
      },
      {
        name: "Material Design",
        logo: MaterialDesignLogo,
        logoWebp: MaterialDesignLogoWebp,
      },
      {
        name: "Boostrap",
        logo: BoostrapLogo,
        logoWebp: BootstrapLogoWebp,
      },
    ],
  },
  {
    name: "Back-End",
    skills: [
      {
        name: "Spring Boot",
        logo: SpringBootLogo,
        logoWebp: SpringBootLogoWebp,
      },
      {
        name: "Spring Framework",
        logo: SpringLogo,
        logoWebp: SpringLogoWebp,
      },
      {
        name: "Ruby On Rails",
        logo: RailsLogo,
        logoWebp: RailsLogoWebp,
      },
    ],
  },
  {
    name: "Testing Frameworks",
    skills: [
      {
        name: "JUnit 5",
        logo: JUnitLogo,
        logoWebp: JUnitLogoWebp,
      },
      {
        name: "Mockito",
        logo: MockitoLogo,
        logoWebp: MockitoLogoWebp,
      },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      {
        name: "Java 8",
        logo: JavaLogo,
        logoWebp: JavaLogoWebp,
      },
      {
        name: "Ruby",
        logo: RubyLogo,
        logoWebp: RubyLogoWebp,
      },
      {
        name: "JavaScript",
        logo: JSLogo,
        logoWebp: JSLogoWebp,
      },
      {
        name: "TypeScript",
        logo: TSLogo,
        logoWebp: TSLogoWebp,
      },
    ],
  },
  {
    name: "Mobile",
    skills: [
      {
        name: "Android Development",
        logo: AndroidLogo,
        logoWebp: AndroidLogoWebp,
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "MySQL",
        logo: MySqlLogo,
        logoWebp: MySqlLogoWebp,
      },
      {
        name: "Redis",
        logo: RedisLogo,
        logoWebp: RedisLogoWebp,
      },
    ],
  },
  {
    name: "Cloud",
    skills: [
      {
        name: "Google Cloud",
        logo: GCPLogo,
        logoWebp: GCPLogoWebp,
      },
      {
        name: "Microsoft Azure",
        logo: AzureLogo,
        logoWebp: AzureLogoWebp,
      },
      {
        name: "Firebase",
        logo: FirebaseLogo,
        logoWebp: FirebaseLogoWebp,
      },
    ],
  },
  {
    name: "DevOps Tools",
    skills: [
      {
        name: "Docker",
        logo: DockerLogo,
        logoWebp: DockerLogoWebp,
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "Github",
        logo: GitHubLogo,
        logoWebp: GitHubLogoWebp,
      },
      {
        name: "Kibana",
        logo: KibanaLogo,
        logoWebp: KibanaLogoWebp,
      },
    ],
  },
];

export default skills;
