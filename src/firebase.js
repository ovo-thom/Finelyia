import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiziH62-2qeMCc8TWSJyySkiIRPw-fwII",
  authDomain: "finelyia.firebaseapp.com",
  projectId: "finelyia",
  storageBucket: "finelyia.firebasestorage.app",
  messagingSenderId: "490623344389",
  appId: "1:490623344389:web:8f84acfa142ed0f548e16c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
