var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("slide-inactive");
var i;
var userClick = false;
let myTimeout;

function currentSlide(n){
    showSlides(slideIndex = n);
}

let showSlides = n => {
    slideIndex > slides.length ? slideIndex = 1 : false;
    n < 1 ? slideIndex = slides.length : false;

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        reAssign();
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " slide-active";
}

let slideAutomatic = () => {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }   

    for (i = 0; i < dots.length; i++) {
        reAssign();
    }

    slideIndex++;
    slideIndex > slides.length ? slideIndex = 1 : false; 

    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " slide-active"; 

    if(userClick == false){
        myTimeout = setTimeout(slideAutomatic, 1000);
    } 

    else if(userClick == true){ 
        stop();

    } 
    userClick = false;
}

function stop() { 
    clearTimeout(myTimeout); 
    setTimeout(slideAutomatic, 4000); 
    console.log(userClick);
    console.log("user has clicked."); 
    userClick = false;
} 

document.addEventListener('click', function (event) {
    var clickedElem = event.target;
    if( clickedElem.classList.contains('header-slide-btn')){

        userClick = true;
        stop(myTimeout);
        console.log(userClick);
    }
}, false);

console.log(userClick);
showSlides(slideIndex);
slideAutomatic();

function reAssign(){
    dots[i].className = dots[i].className.replace(" slide-active", "");
}
