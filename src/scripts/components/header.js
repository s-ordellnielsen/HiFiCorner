import "../../style/style.scss"
import '../../style/modules/_themeToggle.scss'
import burgerToggle from "../modules/burgerToggle.js"

function header() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    element.appendChild(burgerToggle())

    return element;
}

document.body.append(header());