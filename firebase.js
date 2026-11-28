// Firebase authentication for UK Test Series
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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBox = document.getElementById("loginBox");
const dashboard = document.getElementById("studentDashboard");
const authMessage = document.getElementById("authMessage");

function showUser(user) {
  if (dashboard) dashboard.style.display = user ? "block" : "none";
  if (loginBox) loginBox.style.display = user ? "none" : "block";
  if (authMessage && user) authMessage.innerText = "Login सफल!";
}

onAuthStateChanged(auth, showUser);

document.getElementById("signupBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail")?.value.trim();
  const password = document.getElementById("loginPassword")?.value || "";
  if (!email || !password) {
    if (authMessage) authMessage.innerText = "Email और Password भरें।";
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    if (authMessage) authMessage.innerText = "Registration सफल!";
  } catch (e) {
    if (authMessage) authMessage.innerText = e.message;
  }
});

document.getElementById("loginBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail")?.value.trim();
  const password = document.getElementById("loginPassword")?.value || "";
  if (!email || !password) {
    if (authMessage) authMessage.innerText = "Email और Password भरें।";
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
    if (authMessage) authMessage.innerText = "Login सफल!";
  } catch (e) {
    if (authMessage) authMessage.innerText = e.message;
  }
});

document.getElementById("logoutBtn")?.addEventListener("click", async () => {
  try {
    await signOut(auth);
    if (authMessage) authMessage.innerText = "आप Logout हो गए हैं।";
  } catch (e) {
    if (authMessage) authMessage.innerText = e.message;
  }
});
