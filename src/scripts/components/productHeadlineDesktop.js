import "../../style/base/_variables.scss";

function productHeadlineDesktop(text) {
    const element = document.createElement('h2')
    element.classList.add('productDescription__name')
    element.classList.add('x-largeH1')
    element.classList.add('l-deskt')
    
    element.innerHTML = text
    
    return element
}
export default productHeadlineDesktop