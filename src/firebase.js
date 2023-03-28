import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkzAtm_2oxxlOlkmWfIh6ddwOvCoBZVEs",
  authDomain: "fir-react-45e08.firebaseapp.com",
  projectId: "fir-react-45e08",
  storageBucket: "fir-react-45e08.appspot.com",
  messagingSenderId: "865434655806",
  appId: "1:865434655806:web:837d0a5b7433c8eb13056f"
};

const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);
export default firestore;