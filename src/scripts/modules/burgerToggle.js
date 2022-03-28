
const burger = document.getElementsByClassName("burger")[0]
const burgerIcon = document.getElementsByClassName("burger__Icon")[0]
const navMenu = document.getElementsByClassName("navigation__menu")[0]
const headerMenu = document.getElementsByClassName("header__menu")[0]
const navigation = document.getElementsByClassName("header__navigation")[0]

burger.addEventListener("click", function () {

    if (navMenu.style.display == "block" && headerMenu.style.display == "block") {
        navMenu.style.display = "none";
        headerMenu.style.display = "none";
        burgerIcon.src = "/images/navigation/burger-open.png"
        navigation.style.height = "0"
    } else {
        navMenu.style.display = "block";
        headerMenu.style.display = "block";
        burgerIcon.src = "/images/navigation/burger-close.png"
        navigation.style.height = "70vh"
    }

})
