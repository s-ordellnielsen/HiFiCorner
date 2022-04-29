import "../../style/style.scss"
import '../../style/modules/_themeToggle.scss'
import burgerToggle from "./burgerToggle.js"

export default function header() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    element.appendChild(burgerToggle())

    return element;
}