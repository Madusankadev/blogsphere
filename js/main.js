
const bigAnimationTextBoxTop = document.getElementById("bigAnimationTextBox").offsetTop
const bigAnimationTextBoxBottom = document.getElementById("bigAnimationTextBox").offsetHeight + bigAnimationTextBoxTop

document.addEventListener("scroll", () => {
    var scrollY = window.scrollY 

    if ( bigAnimationTextBoxTop <=  scrollY <= bigAnimationTextBoxBottom) {
        console.log("diplay")
    } else {
        console.log("hide")
    }

    
})