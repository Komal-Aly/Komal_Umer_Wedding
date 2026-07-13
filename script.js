const loader = document.getElementById("loader");
const openDoor = document.getElementById("openDoor");
const invitation = document.getElementById("invitation");
invitation.style.display = "block";
// Scratch Date Reveal

const canvas = document.getElementById("scratchCanvas");

if(canvas){

const ctx = canvas.getContext("2d");


canvas.width = 350;
canvas.height = 220;


// gold foil cover

ctx.fillStyle = "#d4af37";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);


ctx.fillStyle = "rgba(255,255,255,.35)";

ctx.font = "20px Poppins";

ctx.textAlign="center";

ctx.fillText(
"Scratch Here ✨",
175,
110
);



let scratching=false;


function scratch(e){

    if(!scratching) return;


    const rect = canvas.getBoundingClientRect();


    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;


    ctx.globalCompositeOperation="destination-out";


    ctx.beginPath();

    ctx.arc(
    x,
    y,
    18,
    0,
    Math.PI*2
    );

    ctx.fill();


}


canvas.addEventListener(
"mousedown",
()=> scratching=true
);


canvas.addEventListener(
"mouseup",
()=> scratching=false
);


canvas.addEventListener(
"mousemove",
scratch
);



canvas.addEventListener(
"touchstart",
()=> scratching=true
);


canvas.addEventListener(
"touchend",
()=> scratching=false
);


canvas.addEventListener(
"touchmove",
(e)=>{

const touch=e.touches[0];

const rect=canvas.getBoundingClientRect();

const x=touch.clientX-rect.left;

const y=touch.clientY-rect.top;


ctx.globalCompositeOperation="destination-out";

ctx.beginPath();

ctx.arc(x,y,18,0,Math.PI*2);

ctx.fill();

});

}

openDoor.addEventListener("click",()=>{

    const sparkleBox=document.querySelector(".sparkle-effect");


    const sparklePositions = [

    {x:50,y:0},
    {x:20,y:15},
    {x:80,y:15},
    {x:0,y:50},
    {x:100,y:50},
    {x:20,y:85},
    {x:80,y:85},
    {x:50,y:100}

];


    sparklePositions.forEach((p,index)=>{

        let star=document.createElement("span");

        star.className="sparkle";

        for(let i=0;i<60;i++){

    let dot=document.createElement("span");

    dot.className="sparkle-dot";


    let angle=Math.random()*Math.PI*2;

    let distance=30 + Math.random()*100;


    dot.style.left =
    (50 + Math.cos(angle)*distance/2) + "%";


    dot.style.top =
    (50 + Math.sin(angle)*distance/2) + "%";


    dot.style.animationDelay =
    (Math.random()*0.6)+"s";


    sparkleBox.appendChild(dot);


    setTimeout(()=>{

        dot.remove();

    },1500);

}

        star.style.left=p.x+"%";
        star.style.top=p.y+"%";

        star.style.animationDelay=(index*.08)+"s";

        sparkleBox.appendChild(star);


    });


    setTimeout(()=>{

    loader.classList.add("open");

    setTimeout(()=>{

        loader.style.pointerEvents = "none";

    },2500);


},900);


setTimeout(()=>{

    document.querySelector(".hero-overlay")
    .classList.add("show-content");

},3000);


});

const weddingDate = new Date("December 26, 2026 20:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        clearInterval(timer);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}, 1000);
document.addEventListener("DOMContentLoaded", function(){

    const petals = document.getElementById("petals");

    function createPetal(){

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "·";

        petal.style.left = Math.random()*100 + "vw";

        petal.style.animationDuration = (6 + Math.random()*5) + "s";

        petal.style.fontSize = (20 + Math.random()*20) + "px";

        petals.appendChild(petal);

        petal.addEventListener("animationend", () => {
            petal.remove();
        });

    }

    setInterval(createPetal,500);

});
// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
// Sticky Navbar

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});