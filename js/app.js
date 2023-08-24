// Auto Slider at kariyer.html
let img = document.getElementsByClassName("img");
    img[0].style.display = "block";
    img[1].style.display = "none";
    img[2].style.display = "none";

function cevirici(){
    let img = document.getElementsByClassName("img");
    img[0].style.display = "none";
    img[1].style.display = "none";
    img[2].style.display = "none";
    let random = Math.floor(Math.random()*3);
    if (random == 0){
        img[0].style.display = "block";
        img[1].style.display = "none";
        img[2].style.display = "none";
    }
    else if (random == 1){
        img[0].style.display = "none";
        img[1].style.display = "block";
        img[2].style.display = "none";
    }
    else if (random == 2){
        img[0].style.display = "none";
        img[1].style.display = "none";
        img[2].style.display = "block";
    }
}

setInterval(() => { 
    cevirici()
}, 3000);


// Scrolling
document.addEventListener("scroll", () => {
    let nav = document.getElementById("nav");
    if (window.scrollY > 0) {
        nav.classList.add("navbar-background-scroll");
    }
    else {
        nav.classList.remove("navbar-background-scroll");
    }
});