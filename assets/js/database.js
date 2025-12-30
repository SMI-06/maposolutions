const alert = document.getElementById("alertmsg");

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

// Firebase config (tumhara project)
const firebaseConfig = {
  apiKey: "AIzaSyD-J9ZrHVKMq3aP2pRWy1yo7gMxq8DyMBs",
  authDomain: "maposolutions-pro.firebaseapp.com",
  databaseURL:
    "https://maposolutions-pro-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "maposolutions-pro",
  storageBucket: "maposolutions-pro.appspot.com",
  messagingSenderId: "1041332061590",
  appId: "1:1041332061590:web:425f9db0a31738881589b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const data = {
    name: document.getElementById("nameInput").value.trim(),
    email: document.getElementById("emailInput").value.trim(),
    subject: document.getElementById("subjectInput").value.trim(),
    message: document.getElementById("messageInput").value.trim(),
    createdAt: serverTimestamp(),
  };

  // Push data to Firebase Realtime Database
  push(ref(db, "contacts"), data)
    .then(() => {
      Swal.fire({
        title: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
        background: "#37373e", // alert ka background color
        color: "#ffffff",
        confirmButtonText: "OK",
        confirmButtonColor: "#F53C3CCC",
      });

      e.target.reset(); // form clear
    })
    .catch((error) => {
      console.error("Error saving message:", error);

      // Error alert
      Swal.fire({
        title: "Oops! Something went wrong.",
        text: "Could not save your message. Try again.",
        icon: "error",
        draggable: true,
        confirmButtonText: "OK",
      });
    });
});
