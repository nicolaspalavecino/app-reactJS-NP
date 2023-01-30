import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnSqaR-MD0f78AFtpEnagf5A1Y7_ZWVTA",
  authDomain: "el-caldero-humeante.firebaseapp.com",
  projectId: "el-caldero-humeante",
  storageBucket: "el-caldero-humeante.appspot.com",
  messagingSenderId: "84379244126",
  appId: "1:84379244126:web:1373a9dc7d270699ac06cf"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)