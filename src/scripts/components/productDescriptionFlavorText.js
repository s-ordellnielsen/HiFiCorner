import "./productDescriptionFlavor.scss";
import "../../style/base/_variables.scss";

function productDescriptionFlavorText(text) {
    const element = document.createElement('h3')
    element.classList.add('productDescription__flavor_text')
    
    
    element.innerHTML = text
    
    return element
}
export default productDescriptionFlavorText