import packagePageBanner from './components/packageDOM.js';


function packagePage() {
    const element = document.createElement('')
    element.classList.add('wrapper')
    

    element.appendChild(packagePageBanner())
    
    return element
}
document.body.appendChild(packagePageBanner())
