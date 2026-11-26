// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBojognGkKdWAkeWwQlpQ-OMvvqaT5SGa4",
  authDomain: "uk-test-series-de95c.firebaseapp.com",
  projectId: "uk-test-series-de95c",
  databaseURL: "https://uk-test-series-de95c-default-rtdb.firebaseio.com",
  storageBucket: "uk-test-series-de95c.firebasestorage.app",
  messagingSenderId: "412802562581",
  appId: "1:412802562581:web:bfe8b572d1d7cec53a2c1c",
  measurementId: "G-RN8D2XW4XH"
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

document.getElementById("signupBtn").onclick = async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    document.getElementById("authMessage").innerText = "Registration सफल!";
  } catch (e) {
    document.getElementById("authMessage").innerText = e.message;
  }
};

document.getElementById("loginBtn").onclick = async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("authMessage").innerText = "Login सफल!";
    document.getElementById("studentDashboard").style.display = "block";
  } catch (e) {
    document.getElementById("authMessage").innerText = e.message;
  }
};
