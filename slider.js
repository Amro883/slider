body = document.body
slides = document.querySelectorAll(".slide");
leftButton = document.querySelector(".left-arrow")
rightButton = document.querySelector(".right-arrow")
let activeSlide = 1;

const activtebg = () => {
    document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
const setactive = () => {
    slides.forEach((s) => {
        s.classList.remove("active");
        slides[activeSlide].classList.add("active")
    })
}
leftButton.addEventListener("click", () => {
    activeSlide--;
    if(activeSlide < 0) activeSlide = slides. length - 1 ;
    activtebg();
    setactive()
})
rightButton.addEventListener("click", () => {
    activeSlide++;
    if(activeSlide > slides.length) activeSlide = 1;
    activtebg();
    setactive()

})