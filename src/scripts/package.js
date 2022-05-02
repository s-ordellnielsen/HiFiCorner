import themeToggle from './components/themeToggle.js'

import packagePageBanner from './components/packageBannerDOM.js';


import packageList from './components/api/packageList.js'

import favoriteProductsList from './components/api/favoriteProductsList.js'

import footerElement from './components/footerElement.js'

import '../style/layout/_package.scss';
import '../style/style.scss'

function packageJS() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    document.body.appendChild(themeToggle())
    return element
}
document.body.appendChild(packageJS())
document.body.appendChild(packagePageBanner())
document.body.appendChild(packageList())

document.body.appendChild(footerElement())
document.body.appendChild(favoriteProductsList())

