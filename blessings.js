import { db } from "./firebase.js";

import { 
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const button = document.getElementById("sendBlessing");


if(button){

button.addEventListener("click", async ()=>{


    const name = document.getElementById("guestName").value.trim();

    const message = document.getElementById("guestMessage").value.trim();



    if(name === "" || message === ""){

        alert("Please write your name and blessing ❤️");

        return;

    }



    try{


        await addDoc(
            collection(db,"blessings"),
            {

                name:name,

                message:message,

                createdAt:serverTimestamp()

            }
        );


        alert("Your blessing has been sent ✨");


        document.getElementById("guestName").value="";

        document.getElementById("guestMessage").value="";


    }

    catch(error){

        console.log(error);

        alert("Something went wrong");

    }


});


}