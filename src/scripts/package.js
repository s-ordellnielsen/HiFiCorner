import header from "./components/header.js"

import packagePageBanner from './components/packagePageBanner.js';


import packageList from './components/packageList.js'

import favoriteProductsHeader from './components/favoriteProductsHeader.js'
import favoriteProductsList from './components/favoriteProductsList.js'

import footerElement from './components/footerElement.js'

import '../style/layout/_package.scss';
import '../style/style.scss'



document.body.appendChild(header())

document.body.appendChild(packagePageBanner())

document.body.appendChild(packageList())

document.body.appendChild(favoriteProductsHeader())
document.body.appendChild(favoriteProductsList())

document.body.appendChild(footerElement())


