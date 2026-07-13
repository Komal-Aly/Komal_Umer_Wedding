import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD5nCcHbUUZZjYlczgviRX-E-WIq5repXI",
    authDomain: "umer-komal-wedding-d3acc.firebaseapp.com",
    projectId: "umer-komal-wedding-d3acc",
    storageBucket: "umer-komal-wedding-d3acc.firebasestorage.app",
    messagingSenderId: "284360457491",
    appId: "1:284360457491:web:db7bd1011c9f4628d12ee6",
    measurementId: "G-942NWYDHDM"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);