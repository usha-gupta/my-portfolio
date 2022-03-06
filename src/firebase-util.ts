import { initializeApp } from "firebase/app";
import { initializeAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRmKmkNjAVT-YDKL243J2CJnNWTvcorEk",
  authDomain: "the-usha-gupta.firebaseapp.com",
  projectId: "the-usha-gupta",
  storageBucket: "the-usha-gupta.appspot.com",
  messagingSenderId: "427647736903",
  appId: "1:427647736903:web:73b47045fdd6295ef82562",
  measurementId: "G-QRTNFDK63T",
};

const enableFirebaseAnalytics = (): void => {
  const firebaseApp = initializeApp(firebaseConfig);
  initializeAnalytics(firebaseApp);
};

export default enableFirebaseAnalytics;
