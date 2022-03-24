const burger = document.getElementsByClassName("burger")[0]
const burgerIcon = document.getElementsByClassName("burger__Icon")[0]
const navMenu = document.querySelector(".navigation__menu");
const headerMenu = document.querySelector(".header__menu");

burger.addEventListener("click", function () {

    if (navMenu.style.display == "block" && headerMenu.style.display == "block") {
        navMenu.style.display = "none";
        headerMenu.style.display = "none";
        burgerIcon.src = "/images/navigation/burger-open.png"
    } else {
        navMenu.style.display = "block";
        headerMenu.style.display = "block";
        burgerIcon.src = "/images/navigation/burger-close.png"
    }

})

