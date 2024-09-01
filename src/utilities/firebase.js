
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDD2XIZNpaKKAySiVa4Rr4MJdmKkNTdNAI",
  authDomain: "netflikgpt.firebaseapp.com",
  projectId: "netflikgpt",
  storageBucket: "netflikgpt.appspot.com",
  messagingSenderId: "419838466843",
  appId: "1:419838466843:web:f5e8067ea579ea4a3c51be",
  measurementId: "G-R35WE25QX7"
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);