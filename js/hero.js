var hero1 = document.getElementById("hero1");
var hero2 = document.getElementById("hero2");
var hero3 = document.getElementById("hero3");
var hero4 = document.getElementById("hero4");
var hero5 = document.getElementById("hero5");
var hero6 = document.getElementById("hero6");
var hero7 = document.getElementById("hero7");

function slideAnimation2() {
    hero1.src = "./img/heroSlide1.2.jpg"
    hero2.src = "./img/heroSlide2.2.jpg"
    hero3.src = "./img/heroSlide3.2.jpg"
    hero4.src = "./img/heroSlide4.2.jpg"
    hero5.src = "./img/heroSlide5.2.jpg"
    hero6.src = "./img/heroSlide6.2.jpg"
    hero7.src = "./img/heroSlide7.2.jpg"
}

function slideAnimation1() {
    hero1.src = "./img/hero1.jpg"
    hero2.src = "./img/hero2.jpg"
    hero3.src = "./img/hero3.jpg"
    hero4.src = "./img/hero4.jpg"
    hero5.src = "./img/hero5.jpg"
    hero6.src = "./img/hero6.jpg"
    hero7.src = "./img/hero7.jpg"
}



setInterval(changeSlid, 5000)

function changeSlid() {
    slideAnimation2();

    setInterval(changeSlid1, 5000)
}

function changeSlid1() {
    slideAnimation1();
}