function productHeadline(text) {
    const element = document.createElement('h1')
    element.classList.add('productDescription__name')
    element.classList.add('x-largeH1')
    
    element.innerHTML = text
    
    return element
}
export default productHeadline