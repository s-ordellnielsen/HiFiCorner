function getCartItems() {
    let cartLS = localStorage.getItem('cartItems')
    let emptyCart = false
    
    if (cartLS) {
        let cartItemsLS = JSON.parse(cartLS)
    }
    else {
        emptyCart = true
    
        // let randomItem = {
        //     amount: 3,
        //     id: 12345,
        //     color: 'Black'
        // }
    
        // localStorage.setItem('cartItems', JSON.stringify(randomItem))
    }

    if (emptyCart) {
        cartElement.classList.add('cart--empty')

        let emptyCartHeaderTag = document.createElement('h1')
        emptyCartHeaderTag.classList.add('cart__emptyHeader')
        let emptyCartHeader = document.createTextNode('Nothing to see here ... yet ')

        let emptyCartTextTag = document.createElement('p')
        emptyCartTextTag.classList.add('cart__emptyText')
        let emptyCartText = document.createTextNode('But take a look at our wide range of premium HiFi equipment')

        let emptyCartCategoriesTag = document.createElement('a')
        emptyCartCategoriesTag.classList.add('cart__emptyBtn', 'cart__emptyBtn--categories')
        let emptyCartCategories = document.createTextNode('Browse Categories')
        emptyCartCategoriesTag.setAttribute('href', './categories.html')

        let emptyCartRandomTag = document.createElement('a')
        emptyCartRandomTag.classList.add('cart__emptyBtn', 'cart__emptyBtn--random')
        let emptyCartRandom = document.createTextNode('Find a random product')

        let emptyCartHero = document.createElement('img')
        emptyCartHero.setAttribute('src', './images/cart-human.svg')
        emptyCartHero.classList.add('cart__emptyHero')


        emptyCartHeaderTag.appendChild(emptyCartHeader)
        emptyCartTextTag.appendChild(emptyCartText)
        emptyCartCategoriesTag.appendChild(emptyCartCategories)
        emptyCartRandomTag.appendChild(emptyCartRandom)

        cartElement.appendChild(emptyCartHeaderTag)
        cartElement.appendChild(emptyCartTextTag)
        cartElement.appendChild(emptyCartCategoriesTag)
        cartElement.appendChild(emptyCartRandomTag)
        cartElement.appendChild(emptyCartHero)
    }
}

let cartElement = document.getElementsByClassName('cart')[0]

if (cartElement) {
    getCartItems()
}