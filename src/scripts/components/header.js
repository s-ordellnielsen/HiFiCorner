
import "../../style/style.scss"
import burgerOpen from "../../images/navigation/burger-open.png"
import bell from "../../images/navigation/bell.png"
import aboutUs from "../../images/navigation/aboutUs.png"
import support from "../../images/navigation/support.png"
import feather from "feather-icons"



function header() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    // Code here
    element.innerHTML = `
     <header class="header__wrapper" style="height: 0px;">
        <div class="header">
            <div class="header__logo">
                <div class="header__topbar">
                    <a href="index.html" class="logoLink"><svg class="headerLogo" width="48" height="48"
                            viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.02539 30H8.79492V26.4375H12.6035V30H14.373V21.5449H12.6035V24.9785H8.79492V21.5449H7.02539V30ZM16.4238 30H18.1934V21.5449H16.4238V30ZM7.02539 41H8.79492V37.6719H12.2344V36.2715H8.79492V34.0039H12.5625V32.5449H7.02539V41ZM14.1973 41H15.9668V32.5449H14.1973V41Z"
                                fill="#214341" />
                            <path
                                d="M8 2H40V-2H8V2ZM46 8V40H50V8H46ZM40 46H8V50H40V46ZM2 40V8H-2V40H2ZM8 46C4.68629 46 2 43.3137 2 40H-2C-2 45.5228 2.47715 50 8 50V46ZM46 40C46 43.3137 43.3137 46 40 46V50C45.5228 50 50 45.5228 50 40H46ZM40 2C43.3137 2 46 4.68629 46 8H50C50 2.47715 45.5228 -2 40 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
                                fill="#214341" />
                        </svg>
                    </a>
                    <button class="burger"><img src="${burgerOpen}" alt=""
                            class="burger__Icon"></button>
                </div>
                <ul class="header__menu ">
                    <li class="header__menuitem">
                        <h1>Categories</h1>
                    </li>
                    <li class="header__menuitem"><a href="categories.html/speakers">Speakers<span class="mobileText">
                                ></span></a> </li>
                    <li class="header__menuitem"><a href="categories.html/headphones">Headphones<span
                                class="mobileText"> ></span> </li>
                    <li class="header__menuitem"><a href="categories.html/accessoris">Accessories<span
                                class="mobileText"> ></span></a></li>
                    <li class="header__menuitem"><a href="categories.html/cdplayer">Categori 1<span class="mobileText">
                                ></span></a></li>
                    <li class="header__menuitem"><a href="categories.html/turntable">Categori 2<span class="mobileText">
                                ></span></a></li>
                </ul>
            </div>
            <nav class="header__navigation">
                <ul class="navigation__menu ">
                    <li class="navigation__menuItem">
                        <h1>HiFi Corner</h1>
                    </li>
                    <li class="navigation__menuItem"><a href="news.html"><img src="${bell}" alt="">
                            News
                            <span class="mobileText"> ></span></a>
                    </li>
                    <li class="navigation__menuItem"><a href="about.html"><img src="${aboutUs}"
                                alt=""> About
                            us
                            <span class="mobileText"> ></span></a></li>
                    <li class="navigation__menuItem"><a href="support.html"><img src="${support}"
                                alt="">
                            Support
                            <span class="mobileText"> ></span></a></li>
                    <li class="navigation__menuItem navigation__iconList">
                        <div class="navigation__searchInputField">
                            <button class="navigation__searchBtn navigation__IconBG">${feather.icons.search.toSvg()}</button>
                            <input type="search" name="navigation__searchInput" id="navigation__searchInput"
                                class="navigation__searchInput">

                        </div>
                        <div class="navigation__iconContainer">
                            <div class="navigation__menuIcon"><a class="navigation__IconBG" href="location.html"
                                    aria-label="goes to location">${feather.icons["map-pin"].toSvg()
        }</a ></div >
                        </div >
                        <div class="navigation__iconContainer">
                            <div class="navigation__menuIcon">
                                <input type="checkbox" name="themeToggle" id="themeToggle" />
                                <label for="themeToggle" class="themeToggleIcon">
                                    <div class="lightIcon">
                                        <div class="lightIcon__circle"></div>
                                        <div class="lightIcon__line lightIcon__line1"></div>
                                        <div class="lightIcon__line lightIcon__line2"></div>
                                        <div class="lightIcon__line lightIcon__line3"></div>
                                        <div class="lightIcon__line lightIcon__line4"></div>
                                        <div class="lightIcon__line lightIcon__line5"></div>
                                        <div class="lightIcon__line lightIcon__line6"></div>
                                        <div class="lightIcon__line lightIcon__line7"></div>
                                        <div class="lightIcon__line lightIcon__line8"></div>
                                    </div>
                                    ${feather.icons.moon.toSvg()}
                                </label>
                            </div>
                        </div>
                        <div class="navigation__iconContainer">
                            <div class="navigation__menuIcon"><a class="navigation__IconBG" href="sign-up.html"
                                    aria-label="sign up">${feather.icons.user.toSvg()}</a></div>
                        </div>
                        <div class="navigation__iconContainer">
                            <div class="navigation__menuIcon"><a class="navigation__IconBG" href="cart.html"
                                    aria-label="cart site">${feather.icons["shopping-bag"].toSvg()}</a></div>
                        </div>
                    </li >
                </ul >
            </nav >
        </div >
    </header >
    `

    return element
}

document.body.append(header())