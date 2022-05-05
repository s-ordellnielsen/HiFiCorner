import heroDom from "./components/api/showLandingHero.js"
import footerElement from "./components/footerElement.js"
import brandSection from "./components/modules/brandSection.js"
import header from "./components/header.js"
import newsLetter from "./components/newsLetter.js"
import packageSection from "./components/modules/parkageSection.js"

import "../style/style.scss"

import "../style/modules/pageFooter.scss"

function landing() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    // Code here
    element.appendChild(header())
    element.appendChild(heroDom())
    element.appendChild(packageSection())
    element.appendChild(brandSection())
    element.appendChild(newsLetter())
    element.appendChild(footerElement())

    return element
}
document.body.append(landing())


