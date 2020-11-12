let changes = ["love","adore","lenovo","wolf","tesla","mokendoodle","mwaahh","rawr","grrr","💙💙💙","dell","treasure","srijador",
               "bhalobhashi","eat 👀","pyaar","want to kiss","want to hug","cant wait to meet"];

let button = document.querySelector("#butt");
let text = document.querySelector("#changeaf");

button.addEventListener("click",function(){
    text.textContent = changes[Math.floor(Math.random()*changes.length)];
});