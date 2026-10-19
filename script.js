const button=document.getElementById("toggle");
const body=document.querySelector("body");
button.addEventListener("click",toggleTheme);
function toggleTheme(){
    body.classList.toggle("dark")
}