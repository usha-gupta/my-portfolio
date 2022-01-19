import { SkillCategory } from "./skill-category.model";
import ReactJSLogo from "../../assets/images/react.png";
import AngularLogo from "../../assets/images/angular.png";
import HTML5Logo from "../../assets/images/html5.png";
import CSS3Logo from "../../assets/images/css3.png";
import MaterialDesignLogo from "../../assets/images/material-design.png";
import JSLogo from "../../assets/images/javascript.png";
import SpringBootLogo from "../../assets/images/spring-boot.png";
import SpringLogo from "../../assets/images/spring.png";
import NodeJSLogo from "../../assets/images/nodejs.png";
import PHPLogo from "../../assets/images/php.png";
import AndroidLogo from "../../assets/images/android.png";
import FlutterLogo from "../../assets/images/flutter.png";
import IonicLogo from "../../assets/images/ionic.png";
import MySqlLogo from "../../assets/images/mysql.png";
import MongoDBLogo from "../../assets/images/mongodb.png";
import CassandraLogo from "../../assets/images/cassandra.png";
import RedisLogo from "../../assets/images/redis.png";
import GCPLogo from "../../assets/images/google-cloud.png";
import AWSLogo from "../../assets/images/aws.png";
import AzureLogo from "../../assets/images/azure.png";
import FirebaseLogo from "../../assets/images/firebase.png";
import DockerLogo from "../../assets/images/docker.png";
import AnsibleLogo from "../../assets/images/ansible.png";
import JenkinsLogo from "../../assets/images/jenkins.png";
import GrafanaLogo from "../../assets/images/grafana.png";
import PrometheusLogo from "../../assets/images/prometheus.png";
import JavaLogo from "../../assets/images/java.png";
import PythonLogo from "../../assets/images/python.png";
import CLogo from "../../assets/images/c.png";
import ShellScriptingLogo from "../../assets/images/shell-script.png";
import GitHubLogo from "../../assets/images/github.png";
import KibanaLogo from "../../assets/images/kibana.png";
import CucumberLogo from "../../assets/images/cucumber.png";
import JUnitLogo from "../../assets/images/junit.png";
import SpockLogo from "../../assets/images/spock.png";
import MockitoLogo from "../../assets/images/mokito.png";
import JestLogo from "../../assets/images/jest.png";
import ReactTestingLibLogo from "../../assets/images/react-testing-lib.png";
import ReduxLogo from "../../assets/images/redux.png";
import TSLogo from "../../assets/images/typescript.png";

import ReactJSLogoWebp from "../../assets/images/react.webp";
import AngularLogoWebp from "../../assets/images/angular.webp";
import HTML5LogoWebp from "../../assets/images/html5.webp";
import CSS3LogoWebp from "../../assets/images/css3.webp";
import MaterialDesignLogoWebp from "../../assets/images/material-design.webp";
import JSLogoWebp from "../../assets/images/javascript.webp";
import SpringBootLogoWebp from "../../assets/images/spring-boot.webp";
import SpringLogoWebp from "../../assets/images/spring.webp";
import NodeJSLogoWebp from "../../assets/images/nodejs.webp";
import PHPLogoWebp from "../../assets/images/php.webp";
import AndroidLogoWebp from "../../assets/images/android.webp";
import FlutterLogoWebp from "../../assets/images/flutter.webp";
import IonicLogoWebp from "../../assets/images/ionic.webp";
import MySqlLogoWebp from "../../assets/images/mysql.webp";
import MongoDBLogoWebp from "../../assets/images/mongodb.webp";
import CassandraLogoWebp from "../../assets/images/cassandra.webp";
import RedisLogoWebp from "../../assets/images/redis.webp";
import GCPLogoWebp from "../../assets/images/google-cloud.webp";
import AWSLogoWebp from "../../assets/images/aws.webp";
import AzureLogoWebp from "../../assets/images/azure.webp";
import FirebaseLogoWebp from "../../assets/images/firebase.webp";
import DockerLogoWebp from "../../assets/images/docker.webp";
import AnsibleLogoWebp from "../../assets/images/ansible.webp";
import JenkinsLogoWebp from "../../assets/images/jenkins.webp";
import GrafanaLogoWebp from "../../assets/images/grafana.webp";
import PrometheusLogoWebp from "../../assets/images/prometheus.webp";
import JavaLogoWebp from "../../assets/images/java.webp";
import PythonLogoWebp from "../../assets/images/python.webp";
import CLogoWebp from "../../assets/images/c.webp";
import ShellScriptingLogoWebp from "../../assets/images/shell-script.webp";
import GitHubLogoWebp from "../../assets/images/github.webp";
import KibanaLogoWebp from "../../assets/images/kibana.webp";
import CucumberLogoWebp from "../../assets/images/cucumber.webp";
import JUnitLogoWebp from "../../assets/images/junit.webp";
import SpockLogoWebp from "../../assets/images/spock.webp";
import MockitoLogoWebp from "../../assets/images/mokito.webp";
import JestLogoWebp from "../../assets/images/jest.webp";
import ReactTestingLibLogoWebp from "../../assets/images/react-testing-lib.webp";
import ReduxLogoWebp from "../../assets/images/redux.webp";
import TSLogoWebp from "../../assets/images/typescript.webp";

const skills: SkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      {
        name: "ReactJS",
        logo: ReactJSLogo,
        logoWebp: ReactJSLogoWebp,
      },
      {
        name: "Redux",
        logo: ReduxLogo,
        logoWebp: ReduxLogoWebp,
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
        name: "Material Design",
        logo: MaterialDesignLogo,
        logoWebp: MaterialDesignLogoWebp,
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
        name: "Node.Js",
        logo: NodeJSLogo,
        logoWebp: NodeJSLogoWebp,
      },
      {
        name: "Core PHP",
        logo: PHPLogo,
        logoWebp: PHPLogoWebp,
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
      {
        name: "Cucumber",
        logo: CucumberLogo,
        logoWebp: CucumberLogoWebp,
      },
      {
        name: "Spock Framework",
        logo: SpockLogo,
        logoWebp: SpockLogoWebp,
      },
      {
        name: "Jest",
        logo: JestLogo,
        logoWebp: JestLogoWebp,
      },
      {
        name: "React Testing Library",
        logo: ReactTestingLibLogo,
        logoWebp: ReactTestingLibLogoWebp,
      },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      {
        name: "Java 11",
        logo: JavaLogo,
        logoWebp: JavaLogoWebp,
      },
      {
        name: "Python 3",
        logo: PythonLogo,
        logoWebp: PythonLogoWebp,
      },
      {
        name: "C/C++",
        logo: CLogo,
        logoWebp: CLogoWebp,
      },
      {
        name: "Shell Scripting",
        logo: ShellScriptingLogo,
        logoWebp: ShellScriptingLogoWebp,
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
      {
        name: "Flutter",
        logo: FlutterLogo,
        logoWebp: FlutterLogoWebp,
      },
      {
        name: "Ionic 4",
        logo: IonicLogo,
        logoWebp: IonicLogoWebp,
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
        name: "MongoDB",
        logo: MongoDBLogo,
        logoWebp: MongoDBLogoWebp,
      },
      {
        name: "Cassandra",
        logo: CassandraLogo,
        logoWebp: CassandraLogoWebp,
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
        name: "AWS",
        logo: AWSLogo,
        logoWebp: AWSLogoWebp,
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
      {
        name: "Ansible",
        logo: AnsibleLogo,
        logoWebp: AnsibleLogoWebp,
      },
      {
        name: "Jenkins",
        logo: JenkinsLogo,
        logoWebp: JenkinsLogoWebp,
      },
      {
        name: "Grafana",
        logo: GrafanaLogo,
        logoWebp: GrafanaLogoWebp,
      },
      {
        name: "Prometheus",
        logo: PrometheusLogo,
        logoWebp: PrometheusLogoWebp,
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
