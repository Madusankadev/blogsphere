const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('signincontainer');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

let popup1 = document.getElementById("popup1");
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");
let popup4 = document.getElementById("popup4");
let popup5 = document.getElementById("popup5");
let popup6 = document.getElementById("popup6");
let popup7 = document.getElementById("popup7");
let popup8 = document.getElementById("popup8");
let popup9 = document.getElementById("popup9");
let popup10 = document.getElementById("popup10");
let popup11 = document.getElementById("popup11");
let popup12 = document.getElementById("popup12");
let popup13 = document.getElementById("popup13");
let popup14 = document.getElementById("popup14");


function openPopup1() {
    popup1.classList.add("open-popup")
}

function closePopup1() {
    popup1.classList.remove("open-popup");
}

function openPopup2() {
    popup2.classList.add("open-popup")
}

function closePopup2() {
    popup1.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
}

function openPopup3() {
    popup3.classList.add("open-popup")
}

function closePopup3() {
    popup1.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
    popup3.classList.remove("open-popup");
}

function openPopup12() {
    popup12.classList.add("open-popup")
}

function closePopup12() {
    popup12.classList.remove("open-popup");
}

function openPopup13() {
    popup13.classList.add("open-popup")
}

function closePopup13() {
    popup12.classList.remove("open-popup");
    popup13.classList.remove("open-popup");
}

function openPopup14() {
    popup14.classList.add("open-popup")
}

function closePopup14() {
    popup12.classList.remove("open-popup");
    popup13.classList.remove("open-popup");
    popup14.classList.remove("open-popup");
}

function closePopup4() {
    popup4.classList.remove("open-popup");
}

function openPopup4() {
    popup4.classList.add("open-popup")
}

function closePopup5() {
    popup5.classList.remove("open-popup");
}

function openPopup5() {
    popup5.classList.add("open-popup")
}

function closePopup6() {
    popup6.classList.remove("open-popup");
}

function openPopup6() {
    popup6.classList.add("open-popup")
}

function closePopup7() {
    popup7.classList.remove("open-popup");
}

function openPopup7() {
    popup7.classList.add("open-popup")
}

function closePopup8() {
    popup8.classList.remove("open-popup");
}

function openPopup8() {
    popup8.classList.add("open-popup")
}

function closePopup9() {
    popup9.classList.remove("open-popup");
}

function openPopup9() {
    popup9.classList.add("open-popup")
}

function closePopup10() {
    popup10.classList.remove("open-popup");
}

function openPopup10() {
    popup10.classList.add("open-popup")
}

function closePopup11() {
    popup11.classList.remove("open-popup");
}

function openPopup11() {
    popup11.classList.add("open-popup")
}


function changeColor(element, curNumber){
    curNumber++;

    if(curNumber > 2){
        curNumber = 1;
    }
    console.log(curNumber);
    element.addClass('color' + curNumber, 500);
    element.attr('class', 'color' + curNumber);
    setTimeout(function(){changeColor(element, curNumber)}, 1000);  
}

changeColor($('#testElement'), 0);