const hambutton = 
document.getElementsByClassName("ham")[0];
hambutton.addEventListener("click",toggleMenu,false);

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};

const date = document.lastModified;
 document.getElementById("last").textContent = date;

