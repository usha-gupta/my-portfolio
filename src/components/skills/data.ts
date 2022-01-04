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

const skills: SkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      {
        name: "ReactJS",
        logo: ReactJSLogo,
      },
      {
        name: "Redux",
        logo: ReduxLogo,
      },
      {
        name: "Angular 9",
        logo: AngularLogo,
      },
      {
        name: "HTML5",
        logo: HTML5Logo,
      },
      {
        name: "CSS3",
        logo: CSS3Logo,
      },
      {
        name: "Material Design",
        logo: MaterialDesignLogo,
      },
    ],
  },
  {
    name: "Back-End",
    skills: [
      {
        name: "Spring Boot",
        logo: SpringBootLogo,
      },
      {
        name: "Spring Framework",
        logo: SpringLogo,
      },
      {
        name: "Node.Js",
        logo: NodeJSLogo,
      },
      {
        name: "Core PHP",
        logo: PHPLogo,
      },
    ],
  },
  {
    name: "Testing Frameworks",
    skills: [
      {
        name: "JUnit 5",
        logo: JUnitLogo,
      },
      {
        name: "Mockito",
        logo: MockitoLogo,
      },
      {
        name: "Cucumber",
        logo: CucumberLogo,
      },
      {
        name: "Spock Framework",
        logo: SpockLogo,
      },
      {
        name: "Jest",
        logo: JestLogo,
      },
      {
        name: "React Testing Library",
        logo: ReactTestingLibLogo,
      },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      {
        name: "Java 11",
        logo: JavaLogo,
      },
      {
        name: "Python 3",
        logo: PythonLogo,
      },
      {
        name: "C/C++",
        logo: CLogo,
      },
      {
        name: "Shell Scripting",
        logo: ShellScriptingLogo,
      },
      {
        name: "JavaScript",
        logo: JSLogo,
      },
      {
        name: "TypeScript",
        logo: TSLogo,
      },
    ],
  },
  {
    name: "Mobile",
    skills: [
      {
        name: "Android Development",
        logo: AndroidLogo,
      },
      {
        name: "Flutter",
        logo: FlutterLogo,
      },
      {
        name: "Ionic 4",
        logo: IonicLogo,
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "MySQL",
        logo: MySqlLogo,
      },
      {
        name: "MongoDB",
        logo: MongoDBLogo,
      },
      {
        name: "Cassandra",
        logo: CassandraLogo,
      },
      {
        name: "Redis",
        logo: RedisLogo,
      },
    ],
  },
  {
    name: "Cloud",
    skills: [
      {
        name: "Google Cloud",
        logo: GCPLogo,
      },
      {
        name: "AWS",
        logo: AWSLogo,
      },
      {
        name: "Microsoft Azure",
        logo: AzureLogo,
      },
      {
        name: "Firebase",
        logo: FirebaseLogo,
      },
    ],
  },
  {
    name: "DevOps Tools",
    skills: [
      {
        name: "Docker",
        logo: DockerLogo,
      },
      {
        name: "Ansible",
        logo: AnsibleLogo,
      },
      {
        name: "Jenkins",
        logo: JenkinsLogo,
      },
      {
        name: "Grafana",
        logo: GrafanaLogo,
      },
      {
        name: "Prometheus",
        logo: PrometheusLogo,
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "Github",
        logo: GitHubLogo,
      },
      {
        name: "Kibana",
        logo: KibanaLogo,
      }
    ],
  },
];

export default skills;
