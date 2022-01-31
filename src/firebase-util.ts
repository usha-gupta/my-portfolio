import { initializeApp } from "firebase/app";
import { initializeAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9K02-tlEq0ZybHU7aCG3M3QGOeF_MX6E",
  authDomain: "the-vis-sharma.firebaseapp.com",
  projectId: "the-vis-sharma",
  storageBucket: "the-vis-sharma.appspot.com",
  messagingSenderId: "522959365081",
  appId: "1:522959365081:web:300842f4a2bade7bcd2fc8",
  measurementId: "G-GFP07EYKRR",
};

const enableFirebaseAnalytics = (): void => {
  const firebaseApp = initializeApp(firebaseConfig);
  initializeAnalytics(firebaseApp);
};

export default enableFirebaseAnalytics;
