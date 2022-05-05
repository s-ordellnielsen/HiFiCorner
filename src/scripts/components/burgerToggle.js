import "../../style/layout/_navigation.scss"
import "../../style/modules/_navigation__menu.scss"
import themeToggle from "./themeToggle.js"
import "../../style/style.scss"
import feather from "feather-icons"
import '../../style/modules/_themeToggle.scss'


export default function burgerToggle() {
    let element = document.createElement("header")
    element.style.height = "0vh"
    element.classList.add("header__wrapper")

    element.innerHTML = `
   
   <div class="header">
       <div class="header__logo">
           <div class="header__topbar">
               <a href="/" class="logoLink"><svg class="headerLogo" width="48" height="48"
                       viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M7.02539 30H8.79492V26.4375H12.6035V30H14.373V21.5449H12.6035V24.9785H8.79492V21.5449H7.02539V30ZM16.4238 30H18.1934V21.5449H16.4238V30ZM7.02539 41H8.79492V37.6719H12.2344V36.2715H8.79492V34.0039H12.5625V32.5449H7.02539V41ZM14.1973 41H15.9668V32.5449H14.1973V41Z"
                           fill="#214341" />
                       <path
                           d="M8 2H40V-2H8V2ZM46 8V40H50V8H46ZM40 46H8V50H40V46ZM2 40V8H-2V40H2ZM8 46C4.68629 46 2 43.3137 2 40H-2C-2 45.5228 2.47715 50 8 50V46ZM46 40C46 43.3137 43.3137 46 40 46V50C45.5228 50 50 45.5228 50 40H46ZM40 2C43.3137 2 46 4.68629 46 8H50C50 2.47715 45.5228 -2 40 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
                           fill="#214341" />
                   </svg>
               </a>
               <button class="burger" id="burger__Click">${feather.icons.menu.toSvg()}</button>
           </div>
           <ul class="header__menu">
               <li class="header__menuitem">
               <a href="/productlist">
                   <h1>Categories</h1>
                   </a>
               </li>
               <li class="header__menuitem"><a href="/productlist/?type=speakers">Speakers<span class="mobileText">
                           ></span></a> </li>
               <li class="header__menuitem"><a href="/productlist/?type=headphones">Headphones<span
                           class="mobileText"> ></span> </li>
               <li class="header__menuitem"><a href="/productlist/?type=accessories">Accessories<span
                           class="mobileText"> ></span></a></li>
               <li class="header__menuitem"><a href="/productlist/?type=cdplayer">CD player<span class="mobileText">
                           ></span></a></li>
               <li class="header__menuitem"><a href="/productlist/?type=turntable">Turntable<span class="mobileText">
                           ></span></a></li>
           </ul>
       </div>
       <nav class="header__navigation">
           <ul class="navigation__menu ">
               <li class="navigation__menuItem">
                   <h1>HiFi Corner</h1>
               </li>
               <li class="navigation__menuItem"><a href="/news/">${feather.icons.bell.toSvg()}
                       News
                       <span class="mobileText"> ></span></a>
               </li>
               <li class="navigation__menuItem"><a href="/about/">${feather.icons.users.toSvg()} About
                       us
                       <span class="mobileText"> ></span></a></li>
               <li class="navigation__menuItem"><a href="/support/">${feather.icons.phone.toSvg()}
                       Support
                       <span class="mobileText"> ></span></a></li>
               <li class="navigation__menuItem navigation__iconList">
                   <div class="navigation__searchInputField">
                       <button class="navigation__searchBtn navigation__IconBG">${feather.icons.search.toSvg()}</button>
                       <input type="search" placeholder="search sites, products.." name="navigation__searchInput" id="navigation__searchInput"
                           class="navigation__searchInput">

                   </div>
                   <div class="navigation__iconContainer">
                       <div class="navigation__menuIcon"><a class="navigation__IconBG" href="/location/"
                               aria-label="goes to location">${feather.icons["map-pin"].toSvg()}</a ></div >
                   </div >
                   <div class="navigation__iconContainer">
                       <div class="navigation__menuIcon" id="darkmode">
               
                       </div>
                   </div>
                   <div class="navigation__iconContainer">
                       <div class="navigation__menuIcon"><a class="navigation__IconBG" href="/signup/"
                               aria-label="sign up">${feather.icons.user.toSvg()}</a></div>
                   </div>
                   <div class="navigation__iconContainer">
                       <div class="navigation__menuIcon"><a class="navigation__IconBG" href="/cart/"
                               aria-label="cart site">${feather.icons["shopping-bag"].toSvg()}</a></div>
                   </div>
               </li >
           </ul >
       </nav >
   </div >
    `

    const burger = element.querySelector(".burger")
    const burgerClick = element.querySelector("#burger__Click")
    const navMenu = element.querySelector(".navigation__menu")
    const headerMenu = element.querySelector(".header__menu")

    burger.addEventListener("click", function () {

        if (navMenu.classList.contains("navigation__open") && headerMenu.classList.contains("header__open")) {
            navMenu.classList.remove("navigation__open")
            headerMenu.classList.remove("header__open")
            burgerClick.innerHTML = feather.icons.menu.toSvg()
            element.style.height = "0vh"

        }

        else {
            navMenu.classList.add("navigation__open")
            headerMenu.classList.add("header__open")
            burgerClick.innerHTML = feather.icons.x.toSvg()
            element.style.height = "100vh"

        }

    })



    //this is a quick fix, dont mind it, dont touch it, never ask questions, it works.
    function myFunction(x) {
        if (x.matches) {
            navMenu.classList.remove("navigation__open")
            headerMenu.classList.remove("header__open")
            burgerClick.innerHTML = feather.icons.menu.toSvg()
            element.style.height = "0vh"

        }
        else if (x.matches < "830px") {
            navMenu.classList.add("navigation__open")
            headerMenu.classList.add("header__open")
            burgerClick.innerHTML = feather.icons.x.toSvg()
            element.style.height = "100vh"
        }
    }

    var x = window.matchMedia("(min-width: 830px)")
    myFunction(x)
    x.addListener(myFunction)





    element.querySelector("#darkmode").appendChild(themeToggle())
    return element;
}

