
const slide = document.getElementsByClassName("button");
const firstSlide = document.getElementById("first--slide");
const secondSlide = document.getElementById("second--slide");
let show = false;

secondSlide.style.display="none";

function showSlide(){ 

    if(!show){
        firstSlide.style.display ="flex";
        secondSlide.style.display="none";

    }else{
        firstSlide.style.display="none";
        secondSlide.style.display ="flex";
    }
 
    show =!show;
};

firstSlide.addEventListener("click",showSlide);
secondSlide.addEventListener("click",showSlide);