import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
