const burger = document.getElementsByClassName("burger")[0]
const burgerIcon = document.getElementsByClassName("burger__Icon")[0]
const navMenu = document.getElementsByClassName("navigation__menu")[0]
const headerMenu = document.getElementsByClassName("header__menu")[0]
const wrapper = document.getElementsByClassName("wrapper")[0]

burger.addEventListener("click", function () {

    if (navMenu.classList.contains("navigation__open") && headerMenu.classList.contains("header__open")) {
        navMenu.classList.remove("navigation__open")
        headerMenu.classList.remove("header__open")
        burgerIcon.src = "/images/navigation/burger-open.png"
        wrapper.style.height = "0"
    } else {
        navMenu.classList.add("navigation__open")
        headerMenu.classList.add("header__open")
        burgerIcon.src = "/images/navigation/burger-close.png"
        wrapper.style.height = "100vh"
    }

})
navMenu.classList.add("open")
navMenu.classList.remove("open")
