import "../../style/style.scss"
import '../../style/modules/_themeToggle.scss'
import burgerToggle from "../modules/burgerToggle.js"

function header() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    // Code here



    element.appendChild(burgerToggle())

    return element;


}

document.body.append(header())
