import themeToggle from './components/themeToggle.js'
import burgerToggle from "./components/burgerToggle.js"

import packagePageBanner from './components/packageBannerDOM.js';


import packageList from './components/packageList.js'

import favoriteProductsHeader from './components/favoriteProductsHeader.js'
import favoriteProductsList from './components/favoriteProductsList.js'

import footerElement from './components/footerElement.js'

import '../style/layout/_package.scss';
import '../style/style.scss'

function packageJS() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    document.body.appendChild(burgerToggle())
    return element
}

document.body.appendChild(packageJS())

document.body.appendChild(packagePageBanner())

document.body.appendChild(packageList())

document.body.appendChild(favoriteProductsHeader())
document.body.appendChild(favoriteProductsList())

document.body.appendChild(footerElement())


