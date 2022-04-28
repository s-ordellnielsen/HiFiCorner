import themeToggle from './components/themeToggle.js'

import packagePageBanner from './components/packageBannerDOM.js';
import packagePageList from './components/packageListDOM.js'
import footerElement from './components/footerElement.js'

import '../style/layout/_package.scss';
import '../style/style.scss'

function packageJS() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    // Code here
    document.body.appendChild(themeToggle())
    return element
}

document.body.appendChild(packagePageBanner())

document.body.appendChild(packagePageList())
document.body.appendChild(footerElement())
document.body.appendChild(packageJS())

