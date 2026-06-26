const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(
document.body.classList.contains("light")
){
themeBtn.innerHTML="☀️";
}
else{
themeBtn.innerHTML="🌙";
}

});



const typing =
document.getElementById("typing");

const words = [

"Web Developer",
"AI Enthusiast",
"Programmer",
"Problem Solver",
"Frontend Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord =
words[wordIndex];

if(!deleting){

typing.textContent =
currentWord.substring(
0,
charIndex + 1
);

charIndex++;

if(
charIndex ===
currentWord.length
){

deleting = true;

setTimeout(
typeEffect,
1200
);

return;

}

}else{

typing.textContent =
currentWord.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

wordIndex++;

if(
wordIndex ===
words.length
){
wordIndex = 0;
}

}

}

setTimeout(
typeEffect,
deleting ? 60 : 120
);

}

typeEffect();



const statsSection =
document.querySelector("#stats");

const statsObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

document
.querySelectorAll(".stat h1")
.forEach(stat=>{

const target =
parseInt(stat.dataset.target);

let count = 0;

stat.innerText = "0+";

const timer =
setInterval(()=>{

count++;

stat.innerText =
count + "+";

if(count >= target){

clearInterval(timer);

}

},20);

});

}

});

},
{
threshold:0.5
}
);

statsObserver.observe(statsSection);


const revealElements =
document.querySelectorAll(
".card,.project,.service,.stat"
);

function reveal(){

revealElements.forEach(el=>{

const top =
el.getBoundingClientRect().top;

const windowHeight =
window.innerHeight;

if(
top <
windowHeight - 100
){

el.style.opacity = "1";

el.style.transform =
"translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity = "0";

el.style.transform =
"translateY(40px)";

el.style.transition =
"all .8s ease";

});

window.addEventListener(
"scroll",
reveal
);

reveal();



const sendBtn =
document.getElementById("sendBtn");

sendBtn.addEventListener(
"click",
()=>{

alert(
"Message Sent Successfully!"
);

}
);



const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener(
"click",
()=>{

navLinks.forEach(
l=>l.style.color=""
);

link.style.color =
"var(--primary)";

}
);

});
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("show");
});
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5,
dx:(Math.random()-0.5)*0.3,
dy:(Math.random()-0.5)*0.3
});
}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "white";

stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();

s.x += s.dx;
s.y += s.dy;

/* wrap effect */
if(s.x>canvas.width) s.x=0;
if(s.x<0) s.x=canvas.width;
if(s.y>canvas.height) s.y=0;
if(s.y<0) s.y=canvas.height;
});

requestAnimationFrame(drawStars);
}

drawStars();


const sections =
document.querySelectorAll("section");

const sectionObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show-section"
);

}else{

entry.target.classList.remove(
"show-section"
);

}

});

},
{
threshold:0.2
}
);

sections.forEach(section=>{
sectionObserver.observe(section);
});


const magneticButtons =
document.querySelectorAll(
".btn, .theme-btn, .contact-form button"
);

magneticButtons.forEach(button=>{

button.addEventListener(
"mousemove",
(e)=>{

const rect =
button.getBoundingClientRect();

const x =
e.clientX -
(rect.left + rect.width/2);

const y =
e.clientY -
(rect.top + rect.height/2);

button.style.transform =
`translate(${x*0.2}px, ${y*0.2}px)`;

}
);

button.addEventListener(
"mouseleave",
()=>{

button.style.transform =
"translate(0,0)";

}
);

});

const sectionsNav =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sectionsNav.forEach(section=>{

const top =
window.scrollY;

const offset =
section.offsetTop - 200;

const height =
section.offsetHeight;

if(
top >= offset &&
top < offset + height
){
current = section.id;
}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href") ===
"#"+current
){

link.classList.add("active");

}

});

});

const profile =
document.querySelector(".hero-img img");

let currentRotation = 0;
let rotating = false;
let animationFrame;

profile.addEventListener("mouseenter", () => {

rotating = true;

function rotate(){

if(!rotating) return;

currentRotation += 4;

profile.style.transform =
`translateY(-10px) rotate(${currentRotation}deg)`;

animationFrame =
requestAnimationFrame(rotate);

}

rotate();

});

profile.addEventListener("mouseleave", () => {

rotating = false;

cancelAnimationFrame(animationFrame);

function returnToZero(){

currentRotation *= 0.9;

profile.style.transform =
`translateY(0px) rotate(${currentRotation}deg)`;

if(Math.abs(currentRotation) > 0.5){

requestAnimationFrame(returnToZero);

}else{

currentRotation = 0;

profile.style.transform =
"translateY(0px) rotate(0deg)";

}

}

returnToZero();

});
const target =
parseInt(stat.dataset.target);

let speed = 20;

// Slow count for 10 and 15
if(target === 10 || target === 15){
speed = 150;
}

let count = 0;

const timer =
setInterval(()=>{

count++;

stat.innerText =
count + "+";

if(count >= target){

clearInterval(timer);

}

},speed);